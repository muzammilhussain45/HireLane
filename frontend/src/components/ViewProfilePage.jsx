import React, { useState, useEffect } from "react";
import { viewProfilePageStyles as s } from "../assets/dummyStyles";
import {
  X,
  User,
  Mail,
  Phone,
  FileText,
  Trash2,
  Upload,
  Edit3,
  Save,
  Loader2,
} from "lucide-react";

import BACKEND_URL from "../config";

// Toast Notification Sub-component

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={s.toast.container}>
      <div
        className={`${s.toast.card} ${
          type === "success" ? s.toast.cardSuccess : s.toast.cardError
        }`}
      >
        <div
          className={`${s.toast.indicator} ${
            type === "success"
              ? s.toast.indicatorSuccess
              : s.toast.indicatorError
          }`}
        />
        <span className={s.toast.message}>{message}</span>
        <button onClick={onClose} className={s.toast.closeButton}>
          <X className={s.toast.closeIcon} />
        </button>
      </div>
    </div>
  );
};

const ViewProfilePage = () => {
  // State Hooks
  /* 
    [10:14:15 --> 10:15:08]
    ...here we have to define some multiple used state hooks... const isEditing, setProfile, originalProfile, toast, isSaving...
  */
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });
  const [originalProfile, setOriginalProfile] = useState(null);
  const [toast, setToast] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  // Fetch User Profile Effect
  /* 
    [10:15:08 --> 10:17:24]
    ...then to fetch the user profile for that just create a use effect hook... fetch profile is equals to an async function... get item HireLane_user... fetch method backend url slash api slash user slash profile...
  */
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("hirelane_user"));
        const response = await fetch(`${BACKEND_URL}/api/user/profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await response.json();

        setProfile({
          name: data.user?.name || "",
          email: data.user?.email || "",
          phone: data.user?.phone || "",
          resume: data.user?.resume || null,
        });

        setOriginalProfile(data.user || null);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  // Form Change Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    const raw = e.target.value;
    const digits = raw.replace(/\D/g, "").slice(0, 10);
    setProfile((prev) => ({
      ...prev,
      phone: digits,
    }));
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setProfile((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleDeleteResume = () => {
    setProfile((prev) => ({
      ...prev,
      resume: null,
    }));
  };

  // Form Validation & Save Profile Handlers
  const validate = () => {
    if (!profile.name.trim()) return "Name is required";
    if (!profile.email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(profile.email)) return "Email is invalid";
    if (!profile.phone) return "Phone is required";
    if (!/^\d{10}$/.test(profile.phone))
      return "Phone must be exactly 10 digits";

    return null;
  };

  const handleSave = async () => {
    const error = validate();
    if (error) {
      setToast({ message: error, type: "error" });
      return;
    }

    try {
      setIsSaving(true);
      const user = JSON.parse(localStorage.getItem("hirelane_user"));
      const formData = new FormData();
      formData.append("name", profile.name);
      formData.append("email", profile.email);
      formData.append("phone", profile.phone);

      if (profile.resume instanceof File) {
        formData.append("resume", profile.resume);
      }
      const res = await fetch(`${BACKEND_URL}/api/user/profile`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        body: formData,
      });
      const data = await res.json();
      setProfile({
        name: data.user.name,
        email: data.user.email,
        phone: data.user.phone,
        resume: data.user.resume,
      });
      setOriginalProfile(data.user);
      setIsEditing(false);
      setToast({ message: "profile updated!", type: "success" });
    } catch (err) {
      setToast({ message: "Update failed", type: "error" });
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setProfile(originalProfile);
    setIsEditing(false);
  };

  const getFileName = (resume) => {
    if (!resume) return "";
    if (resume instanceof File) return resume.name;
    if (typeof resume === "string") {
      return (
        resume.split("/").pop().split("-").slice(1).join("-") ||
        resume.split("/").pop()
      );
    }
    return "Resume";
  };

  const handleViewResume = () => {
    if (!profile.resume) return;

    if (profile.resume instanceof File) {
      const url = URL.createObjectURL(profile.resume);
      window.open(url, "_blank");
    } else if (typeof profile.resume === "string") {
      const fullUrl = `${BACKEND_URL}/api/user/resume/${originalProfile._id}`;

      const link = document.createElement("a");
      link.href = fullUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  // Extract Initials Helper
  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        {/* Header Section */}
        <div className={s.header}>
          <h1 className={s.headerTitle}>My Profile</h1>

          {!isEditing ? (
            <button onClick={() => setIsEditing(true)} className={s.editButton}>
              <Edit3 className={s.editIcon} />
              <span>Edit Profile</span>
            </button>
          ) : (
            <div className={s.actionButton}>
              <button onClick={handleCancel} className={s.cancelButton}>
                <X className={s.cancelIcon} />
                <span>Cancel</span>
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className={`${s.saveButton} ${
                  isSaving ? s.saveButtonDisabled : ""
                }`}
              >
                {isSaving ? (
                  <>
                    <Loader2 className={s.savingSpinner} />
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Save className={s.saveIcon} />
                    <span>Save changes</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Profile Card Section */}
        <div className={s.profileCard}>
          {/* Avatar Header */}
          <div className={s.avatarSection}>
            <div className={s.avatar}>{getInitials(profile.name)}</div>
            <div className={s.avatarInfo}>
              <h2 className={s.avatarName}>{profile.name || "Your Name"}</h2>
              <p className={s.avatarEmail}>
                <Mail className={s.avatarEmailIcon} />
                <span>{profile.email || "example@email.com"}</span>
              </p>
            </div>
          </div>

          {/* Form Grid */}
          <div className={s.formGrid}>
            {/* Full Name */}
            <div className={s.fieldGroup}>
              <label className={s.fieldLabel}>
                <User className={s.fieldIcon} />
                <span>Full Name</span>
                <span className={s.requiredStar}>*</span>
              </label>
              {isEditing ? (
                <input 
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={s.input}
                />
              ) : (
                <p className={s.displayText}>{profile.name}</p>
              )}
            </div>
            {/* Email */}
            <div className={s.fieldGroup}>
              <label className={s.fieldLabel}>
                <Mail className={s.fieldIcon} />
                <span>Email Address</span>
                <span className={s.requiredStar}>*</span>
              </label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className={s.input}
                />
              ) : (
                <p className={s.displayText}>{profile.email}</p>
              )}
            </div>
            {/* Phone */}
            <div className={s.fieldGroup}>
              <label className={s.fieldLabel}>
                <Phone className={s.fieldIcon} />
                <span>Phone</span>
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handlePhoneChange}
                  placeholder="1234567890"
                  maxLength={10}
                  className={s.input}
                />
              ) : (
                <p className={s.displayText}>
                  {profile.phone || "Not provided"}
                </p>
              )}
            </div>
            {/* Resume Upload / View */}
                {/* Resume */}
            <div className={s.resumeSection}>
              <label className={s.fieldLabel}>
                <FileText className={s.fieldIcon} />
                Resume (PDF or Word)
              </label>
              {isEditing ? (
                <div className={s.resumeUploadWrapper}>
                  <div className={s.resumeUploadRow}>
                    <label className={s.resumeUploadLabel}>
                      <div className={s.resumeUploadBox}>
                        <Upload className={s.resumeUploadIcon} />
                        <span className={s.resumeFileName}>
                          {profile.resume
                            ? getFileName(profile.resume)
                            : "Choose file..."}
                        </span>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={handleResumeUpload}
                      />
                    </label>
                    {profile.resume && (
                      <button
                        onClick={handleDeleteResume}
                        className={s.resumeDeleteButton}
                        title="Delete resume"
                      >
                        <Trash2 className={s.resumeDeleteIcon} />
                      </button>
                    )}
                  </div>
                  {profile.resume && (
                    <p className={s.resumeSuccessText}>
                      File uploaded: {profile.resume.name || "Uploaded Resume"}
                    </p>
                  )}
                </div>
              ) : (
                <div>
                  {profile.resume ? (
                    <button
                      onClick={handleViewResume}
                      className={s.resumeViewButton}
                    >
                      <FileText className={s.resumeViewIcon} />
                      View Resume{" "}
                      {profile.resume ? `(${getFileName(profile.resume)})` : ""}
                    </button>
                  ) : (
                    <p className={s.noResumeText}>No resume uploaded</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <style>{s.globalStyles}</style>
    </div>
  );
};

export default ViewProfilePage;
