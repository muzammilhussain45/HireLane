import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { SquareArrowUp } from "lucide-react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AddJobs from "./pages/AddJobs";
import ListJob from "./pages/ListJob";
import CompanyPage from "./pages/CompanyPage";
import CompanyQuestion from "./pages/CompanyQuestion";
import ListCompanyQs from "./pages/ListCompanyQs";
import RoleQuestion from "./pages/RoleQuestion";
import ListRoleQs from "./pages/ListRoleQs";
import ApplicantsPage from "./pages/ApplicantsPage";

// Blocks admin routes unless a valid admin session exists
const RequireAuth = ({ children }) => {
  const location = useLocation();
  let authed = false;
  try {
    const token = localStorage.getItem("token");
    const rawUser = localStorage.getItem("user");
    const user = rawUser ? JSON.parse(rawUser) : null;
    authed = Boolean(token) && user?.role === "admin";
  } catch {
    authed = false;
  }
  if (!authed) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
};

const App = () => {
  const location = useLocation();
  const [showTopBtn, setShowTopBtn] = useState(false);

  /* Scroll to top on route change */
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname, location.hash]);

  /* Show button when scrolling */
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Scroll to top click */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen w-full overflow-x-clip antialiased">
      <div className="min-w-0">
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/addjobs"
            element={
              <RequireAuth>
                <AddJobs />
              </RequireAuth>
            }
          />
          <Route
            path="/list/jobs"
            element={
              <RequireAuth>
                <ListJob />
              </RequireAuth>
            }
          />
          <Route
            path="/companies"
            element={
              <RequireAuth>
                <CompanyPage />
              </RequireAuth>
            }
          />
          <Route
            path="/company-question"
            element={
              <RequireAuth>
                <CompanyQuestion />
              </RequireAuth>
            }
          />
          <Route
            path="/list/company-questions"
            element={
              <RequireAuth>
                <ListCompanyQs />
              </RequireAuth>
            }
          />
          <Route
            path="/role-question"
            element={
              <RequireAuth>
                <RoleQuestion />
              </RequireAuth>
            }
          />
          <Route
            path="/list/role-questions"
            element={
              <RequireAuth>
                <ListRoleQs />
              </RequireAuth>
            }
          />
          <Route
            path="/applicants"
            element={
              <RequireAuth>
                <ApplicantsPage />
              </RequireAuth>
            }
          />
        </Routes>
      </div>

      {/* Go To Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6
            p-3
            text-white
            rounded-full
            shadow-lg
            transition-all duration-300
            cursor-pointer
            z-50
            bg-blue-400
            hover:bg-blue-600
          "
        >
          <SquareArrowUp size={22} />
        </button>
      )}
    </div>
  );
};

export default App;