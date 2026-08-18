import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Briefcase,
  List,
  Building,
  HelpCircle,
  UserCheck,
  ChevronDown,
  User,
  LogOut,
  LogIn,
  Menu,
  X,
} from "lucide-react";
import { navbarStyles as s } from "../assets/dummyStyles";
import logoFallback from "../assets/logo.png";


const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", Icon: Home },
  { key: "jobs", label: "Jobs", Icon: Briefcase },
  { key: "listJob", label: "List Job", Icon: List },
  { key: "company", label: "Companies", Icon: Building },
  {
    key: "companyQuestions",
    label: "Company Questions",
    Icon: Building,
    dropdown: [{ key: "listCompanyQ", label: "List Company Questions" }],
  },
  {
    key: "roleQuestions",
    label: "Role Questions",
    Icon: UserCheck,
    dropdown: [{ key: "listRoleQ", label: "List Role Questions" }],
  },
];

const ROUTES = {
  dashboard: "/",
  company: "/companies",
  jobs: "/addjobs",
  listJob: "/list/jobs",
  companyQuestions: "/company-question",
  listCompanyQ: "/list/company-questions",
  roleQuestions: "/role-question",
  listRoleQ: "/list/role-questions",
  login: "/login",
};

const Navbar = ({ logoSrc, brandName = "HireLane", onNavigate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });

  const pathToKey = (pathname) => {
    const found = Object.entries(ROUTES).find(([, path]) => {
      if (path === "/") return pathname === "/";
      return (
        pathname === path ||
        pathname.startsWith(path + "/") ||
        pathname.startsWith(path)
      );
    });
    return found ? found[0] : "dashboard";
  };

  const active = pathToKey(location.pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navContainerRef = useRef(null);
  const itemRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const [openDropdownKey, setOpenDropdownKey] = useState(null);
  const navCloseTimeoutRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Desktop nav (>=1280px) always uses dropdown mode: 6 items fit inside the
  // max-w-7xl navbar container, while the 8-item flat mode never does.
  const isDesktop = windowWidth >= 1280;

  // when click outisde it will collapse the dropdown menu
  useEffect(() => {
    if (!isDesktop) return;
    const handleDocClick = (e) => {
      const container = navContainerRef.current;
      if (!container) return;
      if (!container.contains(e.target)) {
        setOpenDropdownKey(null);
      }
    };
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, [isDesktop]);

  // Measure and update indicator position – useLayoutEffect prevents flicker
  const updateIndicator = useCallback(() => {
    const container = navContainerRef.current;
    const activeEl = itemRefs.current[active];
    if (!container || !activeEl) {
      setIndicatorStyle({ left: 0, width: 0 });
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    setIndicatorStyle({
      left: activeRect.left - containerRect.left,
      width: activeRect.width,
    });
  }, [active]);

  useLayoutEffect(() => {
    updateIndicator();
    let rafId = null;
    const handleResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateIndicator);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [updateIndicator]);

  const handleNavigate = (key) => {
    const path = ROUTES[key] ?? "/";
    onNavigate?.(key);
    navigate(path);
    setMobileMenuOpen(false);
    setOpenDropdownKey(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
    setMobileMenuOpen(false);
  };

  const logoToUse = logoSrc || logoFallback;

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const userMenuContainerRef = useRef(null);

  const openUserMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setUserMenuOpen(true);
  };
  const startCloseTimer = (delay = 250) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setUserMenuOpen(false);
      closeTimeoutRef.current = null;
    }, delay);
  };

  const openNavDropdown = (key) => {
    if (navCloseTimeoutRef.current) {
      clearTimeout(navCloseTimeoutRef.current);
      navCloseTimeoutRef.current = null;
    }
    setOpenDropdownKey(key);
  };
  const closeNavDropdownDelayed = (delay = 200) => {
    if (navCloseTimeoutRef.current) clearTimeout(navCloseTimeoutRef.current);
    navCloseTimeoutRef.current = setTimeout(() => {
      setOpenDropdownKey(null);
      navCloseTimeoutRef.current = null;
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      if (navCloseTimeoutRef.current) clearTimeout(navCloseTimeoutRef.current);
    };
  }, []);

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div className={s.navContainer}>
          {/* ---------------- LOGO ---------------- */}
          <div className={s.navContent}>
            <div
              className={s.logoContainer}
              onClick={() => handleNavigate("dashboard")}
            >
              <div className={s.logoWrapper}>
                {logoToUse ? (
                  <img src={logoToUse} alt="logo" className={s.logoImage} />
                ) : (
                  <span className={s.logoFallback}>{brandName[0]}</span>
                )}
              </div>
              <div className={s.logoTextContainer}>
                <span className={s.logoBrandName}>{brandName}</span>
                <span className={s.logoSubtitle}>Find your dream job</span>
              </div>
            </div>

            {/* ---------------- DESKTOP NAV ---------------- */}
            <div className={s.desktopNav}>
              <div ref={navContainerRef} className={s.navIndicatorContainer}>
                {active && indicatorStyle.width > 0 && (
                  <div
                    className={s.activeIndicator}
                    style={{
                      left: indicatorStyle.left,
                      width: indicatorStyle.width,
                      boxShadow: "0 0px 8px rgba(156,180,252,0.5)",
                    }}
                  />
                )}

                <ul className={s.navList}>
                  {NAV_ITEMS.map((item) => {
                    const Icon = item.Icon;
                    const isActiveParent =
                      active === item.key ||
                      (item.dropdown &&
                        isDesktop &&
                        item.dropdown.some((sub) => active === sub.key));

                    return (
                      <React.Fragment key={item.key}>
                        <li
                          className={s.navItem}
                          onMouseEnter={() =>
                            item.dropdown &&
                            isDesktop &&
                            openNavDropdown(item.key)
                          }
                          onMouseLeave={() =>
                            item.dropdown &&
                            isDesktop &&
                            closeNavDropdownDelayed(200)
                          }
                        >
                          <div
                            ref={(el) => {
                              itemRefs.current[item.key] = el;
                              if (item.dropdown && el && isDesktop) {
                                item.dropdown.forEach((sub) => {
                                  itemRefs.current[sub.key] = el;
                                });
                              }
                            }}
                            className={s.navItemWrapper}
                          >
                            <button
                              onClick={() => handleNavigate(item.key)}
                              className={`${s.navButton} ${isActiveParent ? s.navButtonActive : s.navButtonInactive}`}
                            >
                              <Icon className={s.navButtonIcon} />
                              <span className={s.navButtonText}>
                                {item.label}
                              </span>
                              {item.dropdown && isDesktop && (
                                <ChevronDown className={s.navDropdownIcon} />
                              )}
                            </button>
                          </div>

                          {item.dropdown && isDesktop && (
                            <div
                              className={`${s.dropdownPanel} ${openDropdownKey === item.key ? s.dropdownVisible : s.dropdownHidden}`}
                              onMouseEnter={() => openNavDropdown(item.key)}
                              onMouseLeave={() => closeNavDropdownDelayed(200)}
                            >
                              <div className={s.dropdownCaret} />
                              <div
                                className={`${s.dropdownContainer} ${openDropdownKey === item.key ? "animate-border" : "bg-transparent"}`}
                                style={{
                                  background:
                                    openDropdownKey === item.key
                                      ? undefined
                                      : "transparent",
                                }}
                              >
                                <div className={s.dropdownInner}>
                                  {item.dropdown.map((sub) => {
                                    const isActiveSub = active === sub.key;
                                    return (
                                      <button
                                        key={sub.key}
                                        onClick={() => handleNavigate(sub.key)}
                                        className={`${s.dropdownItem} ${isActiveSub ? s.dropdownItemActive : s.dropdownItemInactive}`}
                                      >
                                        <span className={s.dropdownItemDot} />
                                        <span>{sub.label}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          )}
                        </li>
                      </React.Fragment>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* ---------------- RIGHT ACTIONS ---------------- */}
            <div className={s.rightActions}>
              <div className={s.desktopAuth}>
                {user ? (
                  <div
                    ref={userMenuContainerRef}
                    className={s.userMenuContainer}
                    onMouseEnter={openUserMenu}
                    onMouseLeave={() => startCloseTimer(250)}
                  >
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) {
                          clearTimeout(closeTimeoutRef.current);
                          closeTimeoutRef.current = null;
                        }
                        setUserMenuOpen((s) => !s);
                      }}
                      className={s.userMenuButton}
                    >
                      <User className={s.userIcon} />
                      <span className={s.userName}>{user.name}</span>
                      <ChevronDown className={s.userDropdownIcon} />
                    </button>

                    <div
                      className={`${s.userDropdown} ${userMenuOpen ? s.userDropdownVisible : s.userDropdownHidden}`}
                    >
                      <div
                        className={`${s.dropdownContent} ${userMenuOpen ? "animate-border" : "bg-transparent"}`}
                        style={{
                          background: userMenuOpen ? undefined : "transparent",
                        }}
                      >
                        <div className={s.userDropdownInner}>
                          <button
                            onClick={handleLogout}
                            className={s.logoutButton}
                          >
                            <LogOut className={s.logoutIcon} />
                            <span>Logout</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigate("login")}
                    className={s.loginButton}
                  >
                    <span className={s.loginButtonOverlay} />
                    <span className={s.loginButtonContent}>
                      <LogIn className={s.loginIcon} />
                      <span>Login</span>
                    </span>
                  </button>
                )}
              </div>

              {/* mobile toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={s.mobileMenuButton}
              >
                {mobileMenuOpen ? (
                  <X className={s.mobileMenuIcon} />
                ) : (
                  <Menu className={s.mobileMenuIcon} />
                )}
              </button>
            </div>
          </div>

          {/* ---------------- MOBILE MENU ---------------- */}
          {mobileMenuOpen && (
            <div className={s.mobileMenu}>
              <div className={s.mobileMenuContent}>
                {NAV_ITEMS.map((item) => {
                  const Icon = item.Icon;
                  const isActiveParent = active === item.key;
                  return (
                    <div key={item.key} className={s.mobileNavItem}>
                      <button
                        onClick={() => handleNavigate(item.key)}
                        className={`${s.mobileNavButton} ${isActiveParent ? s.mobileNavButtonActive : s.mobileNavButtonInactive}`}
                      >
                        <Icon className={s.mobileNavIcon} />
                        <span className={s.mobileNavText}>{item.label}</span>
                      </button>

                      {item.dropdown && (
                        <div className={s.mobileDropdown}>
                          {item.dropdown.map((sub) => {
                            const isActiveSub = active === sub.key;
                            return (
                              <button
                                key={sub.key}
                                onClick={() => handleNavigate(sub.key)}
                                className={`${s.mobileDropdownItem} ${isActiveSub ? s.mobileDropdownItemActive : s.mobileDropdownItemInactive}`}
                              >
                                {sub.label}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Mobile user  */}

                {user ? (
                  <>
                    <div className={s.mobileUserInfo}>
                      <span className={s.mobileUserInfoContent}>
                        <User className={s.userIcon} />
                        <span className={s.userName}>{user.name}</span>
                      </span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className={s.mobileLogoutButton}
                    >
                      <LogOut className={s.mobileNavIcon} />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <div className={s.mobileLoginContainer}>
                    <button
                      onClick={() => handleNavigate("login")}
                      className={s.mobileLoginButton}
                    >
                      <LogIn className={s.mobileNavIcon} />
                      <span>Login</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

      </nav>
        <style>{s.animations}</style>
    </header>
  );
};

export default Navbar;
