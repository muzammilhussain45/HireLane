import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { interviewQuestionsStyles as s } from "../assets/dummyStyles";
import { ChevronRight, CircleArrowOutUpRight } from "lucide-react";

import BACKEND_URL from "../config";

const slugify = (str) =>
  str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

// CompanyCard Component
function CompanyCard({ company }) {
  const [imageError, setImageError] = useState(false);

  const initials = company?.companyName
    ? company.companyName
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
    : "??";

  const colorClass = s.getColorClass("company", company.companyName);

  return (
    <Link
      to={`/company/${company._id}`}
      state={{ companyId: company._id }}
      className={s.cardLink}
    >
      <div className={s.cardGlow} />
      <article className={s.cardArticle}>
        <div className={s.cardFlex}>
          <div className={s.cardLeftFlex}>
            <div
              className={s.logoContainer(colorClass)}
              style={{ width: 56, height: 56, overflow: "hidden" }}
            >
              {!imageError && company?.logo ? (
                <img
                  src={company.logo}
                  alt="logo"
                  className={s.logoImage}
                  onError={() => setImageError(true)}
                />
              ) : (
                <span className={s.logoFallbackText}>{initials}</span>
              )}
            </div>

            <div>
              <h3 className={s.cardTitle}>{company?.companyName}</h3>
              <p className={s.cardSubtitle}>
                {company?.questionsCount || "0"} interviews
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <CircleArrowOutUpRight className={s.cardIcon} />
          </div>
        </div>
      </article>
    </Link>
  );
}

// RoleCard Component

function RoleCard({ role }) {
  const [imgError, setImgError] = useState(false);
  const initials = role.roleName
    ? role.roleName
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
    : "??";

  const colorClass = s.getColorClass("role", role.roleName);
  const slug = slugify(role.roleName);

  return (
    <Link
      to={`/roles/${slug}`}
      state={{ selectedRoleSlug: slug }}
      className={s.cardLink}
    >
      <div className={s.roleCardGlow}></div>

      <article className={s.cardArticle}>
        <div className={s.cardFlex}>
          <div className={s.cardLeftFlex}>
            <div
              className={s.logoContainer(colorClass)}
              style={{ width: 56, height: 56, overflow: "hidden" }}
            >
              {!imgError && role.image ? (
                <img
                  src={role.image}
                  alt={`${role.roleName} logo`}
                  onError={() => setImgError(true)}
                  className={s.logoImage}
                />
              ) : (
                <span className={s.logoFallbackText}>{initials}</span>
              )}
            </div>

            <div>
              <h3 className={s.cardTitle}>{role.roleName}</h3>
              <p className={s.cardSubtitle}>
                {role.questionsCount || "0"} Questions
              </p>
            </div>
          </div>

          <div>
            <CircleArrowOutUpRight className={s.cardIcon} />
          </div>
        </div>
      </article>
    </Link>
  );
}

const InterviewQuestions = () => {
  // State Hooks
  const [companies, setCompanies] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching Data via Promise.all
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [companiesResponse, rolesResponse] = await Promise.all([
          fetch(`${BACKEND_URL}/api/interview/companies`),
          fetch(`${BACKEND_URL}/api/interview/roles`),
        ]);

        const companiesData = await companiesResponse.json();
        const rolesData = await rolesResponse.json();

        if (companiesData.success) {
          setCompanies(companiesData.companies.slice(0, 8));
        }

        if (rolesData.success) {
          setRoles(rolesData.roles.slice(0, 8));
        }
      } catch (error) {
        console.error("Error fetching the data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={s.loadingContainer}>
        <div className={s.spinner} />
      </div>
    );
  }

  return (
    <div className={s.pageContainer}>
      <div className={s.innerContainer}>
        <div className={s.mainGrid}>
          {/* Section 1: Questions by Company */}
          <div>
            <section className={s.section}>
              <div className={s.sectionHeader}>
                <h2 className={s.sectionTitle}>Questions by company</h2>
                <Link to="/companies" className={s.viewAllLink}>
                  View all
                  <ChevronRight className={s.chevronIcon} />
                </Link>
              </div>

              <div className={s.companiesGrid}>
                {companies.map((company) => (
                  <CompanyCard key={company._id} company={company} />
                ))}
              </div>
            </section>
          </div>

          {/* Section 2: Questions by Role */}
          <div>
            <section className={s.section}>
              <div className={s.sectionHeader}>
                <h2 className={s.sectionTitle}>Interview questions by role</h2>
                <Link to="/roles" className={s.viewAllLink}>
                  View all roles
                  <ChevronRight className={s.chevronIcon} />
                </Link>
              </div>

              <div className={s.rolesGrid}>
                {roles.map((role) => (
                  <RoleCard key={role._id} role={role} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

    </div>
  );
};

export default InterviewQuestions;
