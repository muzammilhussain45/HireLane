import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  XCircle,
  Users,
  Building,
  TrendingUp,
  Filter,
  Search,
  MapPin,
  User,
  CheckCircle,
  X,
} from "lucide-react";
import { dashboardStyles as s, statColors } from "../assets/dummyStyles";
import BACKEND_URL from '../config'


const Dashboard = () => {
  const [companyFilter, setCompanyFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("active");
  const [loading, setLoading] = useState(true);
  const [dashboardStats, setDashboardStats] = useState({
    totalJobs: "0",
    closedJobs: "0",
    totalApplications: "0",
    totalCompanies: "0",
  });
  const [toast, setToast] = useState(null);
  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        // GET /api/job/admin/stats
        const statsResponse = await fetch(
          `${BACKEND_URL}/api/job/admin/stats`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        const statsData = await statsResponse.json();
        if (statsData.success) setDashboardStats(statsData.stats);

        // GET /api/job/admin/jobs
        const jobResponse = await fetch(`${BACKEND_URL}/api/job/admin/jobs`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const jobsData = await jobResponse.json();

        // Server -> ui mapping for the job cards
        if (jobsData.success) {
          const mappedJobs = jobsData.jobs.map((j) => ({
            id: j._id,
            name: j.companyName,
            role: j.roleName,
            location: j.location,
            category: j.category,
            logo: j.companyLogo?.startsWith("http")
              ? j.companyLogo
              : `http://localhost:5000${j.companyLogo || ""}`,
            applicants: j.applicationCount || 0,
            status: j.status || "active",
          }));
          setJobs(mappedJobs);
        }
      } catch (err) {
        console.error("Error fetching dashboard data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [navigate]);

  // auto dismiss the toast
  useEffect(() => {
    if (toast && !toast.confirm) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // handle close jobs
  const handleCloseJob = (jobId) => {
    setToast({
      message: "Are you sure you want to close this job?",
      type: "confirm",
      confirm: true,
      jobId,
    });
  };

  // to close

  const handleConfirmClose = async () => {
    const jobId = toast.jobId;
    setToast(null);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BACKEND_URL}/api/job/${jobId}/close`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (data.success) {
        setToast({ message: "Job closed successfully", type: "success" });

        // refresh the stats
        const statsResponse = await fetch(
          `${BACKEND_URL}/api/job/admin/stats`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        const statsData = await statsResponse.json();
        if (statsData.success) setDashboardStats(statsData.stats);

        // refresh the jobs
        const jobResponse = await fetch(`${BACKEND_URL}/api/job/admin/jobs`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const jobsData = await jobResponse.json();

        if (jobsData.success) {
          const mappedJobs = jobsData.jobs.map((j) => ({
            id: j._id,
            name: j.companyName,
            role: j.roleName,
            location: j.location,
            category: j.category,
            logo: j.companyLogo?.startsWith("http")
              ? j.companyLogo
              : `http://localhost:5000${j.companyLogo || ""}`,
            applicants: j.applicationCount || 0,
            status: j.status || "active",
          }));
          setJobs(mappedJobs);
        }
      }
    } catch (err) {
      console.error("Error closing the job", err);
      setToast({ message: "Failed to close the job", type: "error" });
    }
  };

  const stats = [
    {
      label: "Total Jobs",
      value: dashboardStats.totalJobs,
      icon: Briefcase,
      colors: statColors.blue,
    },
    {
      label: "Closed Jobs",
      value: dashboardStats.closedJobs,
      icon: Briefcase,
      colors: statColors.rose,
    },
    {
      label: "Total Applicants",
      value: dashboardStats.totalApplications,
      icon: Users,
      colors: statColors.emerald,
    },
    {
      label: "Active Companies",
      value: dashboardStats.totalCompanies,
      icon: Building,
      colors: statColors.amber,
    },
  ];
  // Get unique companies and role filter
  const uniqueCompanies = [...new Set(jobs.map((c) => c.name))];
  const uniqueRoles = [...new Set(jobs.map((c) => c.role))];

  // Filter jobs based on selected filters
  const filteredJobs = jobs.filter((job) => {
    const matchesCompany = companyFilter === "" || job.name === companyFilter;
    const matchesRole = roleFilter === "" || job.role === roleFilter;
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    return matchesCompany && matchesRole && matchesStatus;
  });

  //fallback for logo image if it fails to load

  const handleImageError = (e) => {
    e.target.style.display = "none";
    e.target.nextSibling.classList.remove("hidden");
  };

  //clear all filters

  const clearFilters = () => {
    setCompanyFilter("");
    setRoleFilter("");
    setStatusFilter("active");
  };

  return (
    <div className={s.container}>
      {/* ---------------- TOAST ---------------- */}
      {toast && (
        <div className={s.toastWrapper}>
          <div
            className={`${s.toastBase} ${toast.type === "success" ? s.toastSuccess : toast.type === "error" ? s.toastError : s.toastDefault}`}
          >
            {toast.type === "success" ? (
              <CheckCircle size={20} className={s.toastIconSuccess} />
            ) : (
              <XCircle
                size={20}
                className={
                  toast.type === "error" ? s.toastIconError : s.toastIconDefault
                }
              />
            )}

            <div className={s.toastFlex}>
              <p className={s.toastMessage}>{toast.message}</p>

              {toast.confirm && (
                <div className={s.toastButtonContainer}>
                  <button
                    onClick={handleConfirmClose}
                    className={s.toastConfirmButton}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setToast(null)}
                    className={s.toastCloseButton} 
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {!toast.confirm && (
              <button
                onClick={() => setToast(null)}
                className={s.toastCloseButton}
              >
                <X size={16} />
              </button> 
            )}
          </div>
        </div>
      )}

      <div className={s.contentWrapper}>
        {/* ---------------- HEADER ---------------- */}
        <div className={s.headerContainer}>
          <div>
            <h1 className={s.headerTitle}>HireLane Dashboard</h1>
            <p className={s.headerSubtitle}>
              <TrendingUp className={s.headerIcon} />
              <span>Real-time overview of jobs and applicants</span>
            </p>
          </div>
        </div>

        {/* ---------------- STATS CARDS ---------------- */}
        <div className={s.statsGrid}>
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className={s.statCard}>
                <div className={s.statCardOverlay} />
                <div className={s.statCardContent}>
                  <div className={s.statCardTextContainer}>
                    <p className={s.statCardLabel}>{stat.label}</p>
                    <p className={s.statCardValue}>{stat.value}</p>
                  </div>
                  <div
                    className={`${s.statCardIconWrapper} ${stat.colors.bgLight} bg-linear-to-br ${stat.colors.gradient}`}
                    
                  >
                    <Icon className={s.statCardIcon} strokeWidth={1.8} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------------- FILTERS ---------------- */}
        <div className={s.filterContainer}>
          <div className={s.filterHeader}>
            <div className={s.filterTitleContainer}>
              <Filter className={s.filterIcon} />
              <h2 className={s.filtersTitle}>Filters</h2>
            </div>

            {(companyFilter || roleFilter || statusFilter !== "active") && (
              <button onClick={clearFilters} className={s.filtersClearBtn}>
                <X className="w-4 h-4" />
                Clear all
              </button>
            )}
          </div>

          <div className={s.filterGrid}>
            <div className={s.filterInputContainer}>
              <label className={s.filterLabel}>Filter by company</label>
              <div className={s.filterInputWrapper}>
                <Search className={s.filterSearchIcon} />
                <select
                  value={companyFilter}
                  onChange={(e) => setCompanyFilter(e.target.value)}
                  className={s.filterSelect}
                >
                  <option value="">All companies</option>
                  {uniqueCompanies.map((company) => (
                    <option key={company} value={company}>
                      {company}
                    </option>
                  ))}
                </select>
              </div>
            </div>

                  {/* Role Filter */}
            <div className={s.filterInputContainer}>
              <label className={s.filterLabel}>Filter by Role</label>
              <div className={s.filterInputWrapper}>
                <Search className={s.filterSearchIcon} />
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className={s.filterSelect}
                >
                  <option value="">All Roles</option>
                  {uniqueRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select> 
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- JOBS ---------------- */}
        <div className={s.jobSection}>
          <div className={s.jobsHeader}>
            <h2 className={s.jobsTitle}>
              <Building className={s.jobTitleIcon} />
              {statusFilter === "active"
                ? "Active Roles"
                : statusFilter === "closed"
                  ? "Closed Roles"
                  : "All Roles"}
            </h2>

            <div className={s.jobFilterContainer}>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className={s.jobStatusSelect}
              >
                <option value="active">Active jobs</option>
                <option value="closed">Closed jobs</option>
                <option value="all">All jobs</option>
              </select>

              <div className={s.jobsCount}>
                {filteredJobs.length}{" "}
                {filteredJobs.length === 1 ? "job" : "jobs"}
              </div>
            </div>
          </div>

          {loading ? (
            <div className={s.loadingContainer}>
              <div className={s.loadingSpinner} />
            </div>
          ) : filteredJobs.length > 0 ? (
            <div className={s.jobsGrid}>
              {filteredJobs.map((job) => (
                <div key={job.id} className={s.jobCard}>
                  <div className={s.jobCardOverlay} />
                  <div className={s.jobCardContent}>
                    <div className={s.jobsCardHeader}>
                      <div className={s.jobLogoContainer}>
                        <div className={s.jobLogoWrapper}>
                          <img
                            src={job.logo}
                            alt={job.name}
                            className={s.jobLogo}
                            onError={handleImageError}
                          />
                          <div className={s.jobLogoFallback}>
                            <Building className={s.jobLogoFallbackIcon} />
                          </div>
                        </div>
                      </div>

                      {/* Job Details */}
                      <div className={s.jobDetails}>
                        <h3 className={s.jobRole}>{job.role}</h3>
                        <p className={s.jobCompany}>
                          <Building className={s.jobCompanyIcon} />
                          {job.name}
                        </p>
                        <p className={s.jobLocation}>
                          <MapPin className={s.jobLocationIcon} />
                          {job.location}
                        </p>
                      </div>
                    </div>

                    <div className={s.jobMeta}>
                      <span className={s.jobCategory}>{job.category}</span>
                      <div className={s.jobApplicants}>
                        <User className={s.jobApplicantIcon} />
                        <span className={s.jobApplicantsCount}>
                          {job.applicants}
                        </span>
                        <span className={s.jobApplicantsLabel}>applicants</span>
                      </div>
                    </div>

                    <div className={s.jobActions}>
                      <button
                        onClick={() =>
                          navigate("/applicants", {
                            state: {
                              jobId: job.id,
                              role: job.role,
                              companyName: job.name,
                            },
                          })
                        }
                        className={s.viewApplicantsBtn}
                      >
                        View Applicants
                      </button>

                      {job.status === "active" && (
                        <button
                          onClick={() => handleCloseJob(job.id)}
                          className={s.closeJobBtn}
                        >
                          Close Job
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={s.emptyState}>
              <Building className={s.emptyStateIcon} />
              <h3 className={s.emptyStateTitle}>No matching job found</h3>
              <p className={s.emptyStateText}>Try adjusting your filters</p>
              <button onClick={clearFilters} className={s.emptyStateBtn}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{s.animations}</style>
    </div>
  );
};

export default Dashboard;
