import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Bookmark,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  LogOut,
  Menu,
  MessageCircle,
  UserRound,
  X,
} from "lucide-react";
import logo from "../assets/logo.png";

const STORAGE_KEY = "hirelane_user";

const navigation = [
  { label: "Find Jobs", path: "/jobs", icon: BriefcaseBusiness },
  { label: "Companies", path: "/companies", icon: Building2 },
  { label: "Roles", path: "/roles", icon: UserRound },
  { label: "Saved", path: "/saved", icon: Bookmark },
  { label: "Contact", path: "/contact", icon: MessageCircle },
];

const getInitials = (name = "") => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "HL";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const userMenuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onStorage = (event) => {
      if (event.key !== STORAGE_KEY) return;
      try {
        setUser(event.newValue ? JSON.parse(event.newValue) : null);
      } catch {
        setUser(null);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const goTo = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const signOut = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
    setUserMenuOpen(false);
    navigate("/");
  };

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  const headerSurface = isScrolled
    ? "border-[#071522]/8 bg-[#e8f2f9]/95 py-3 shadow-[0_10px_28px_rgba(4,38,64,0.10)] backdrop-blur-xl"
    : "border-transparent bg-[#e8f2f9] py-4";

  return (
    <header className={`sticky top-0 z-[70] border-b transition-all duration-300 ${headerSurface}`}>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={() => goTo("/")}
          className="group flex min-w-0 items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-[#126db3] focus:ring-offset-2 focus:ring-offset-[#e8f2f9]"
          aria-label="HireLane home"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white p-1 shadow-sm ring-1 ring-[#071522]/10 transition group-hover:-rotate-3 group-hover:ring-[#126db3]/40">
            <img src={logo} alt="" className="h-full w-full rounded-xl object-cover" />
          </span>
          <span className="min-w-0">
            <span className="block font-sans text-xl font-semibold tracking-[-0.06em] text-[#071522] sm:text-2xl">HireLane</span>
            <span className="mt-0.5 hidden text-[10px] font-bold uppercase tracking-[0.16em] text-[#486274] sm:block">Career, considered</span>
          </span>
        </button>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigation.map(({ label, path }) => (
            <button
              key={path}
              type="button"
              onClick={() => goTo(path)}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold transition ${
                isActive(path)
                  ? "text-[#126db3]"
                  : "text-[#071522]/75 hover:bg-white/55 hover:text-[#071522]"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <div ref={userMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setUserMenuOpen((value) => !value)}
                className="inline-flex items-center gap-2 rounded-full border border-[#071522]/14 bg-white/35 px-2 py-1.5 text-sm font-semibold text-[#071522] shadow-sm transition hover:border-[#126db3]/35"
                aria-expanded={userMenuOpen}
                aria-haspopup="menu"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c8f45b] text-xs font-bold text-[#0c2a28]">
                  {getInitials(user.name)}
                </span>
                <span className="max-w-24 truncate">{user.name || "My account"}</span>
                <ChevronDown className={`h-4 w-4 text-[#486274] transition ${userMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {userMenuOpen && (
                <div role="menu" className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-[#0c2a28]/10 bg-white p-2 shadow-[0_20px_45px_rgba(12,42,40,0.16)]">
                  <button type="button" role="menuitem" onClick={() => goTo("/viewprofile")} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-[#36524f] transition hover:bg-[#f2f5eb] hover:text-[#0c2a28]">
                    <UserRound className="h-4 w-4" />
                    View profile
                  </button>
                  <button type="button" role="menuitem" onClick={() => goTo("/saved")} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-[#36524f] transition hover:bg-[#f2f5eb] hover:text-[#0c2a28]">
                    <Bookmark className="h-4 w-4" />
                    Saved jobs
                  </button>
                  <div className="my-2 border-t border-[#0c2a28]/8" />
                  <button type="button" role="menuitem" onClick={signOut} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-[#c05228] transition hover:bg-[#fff1eb]">
                    <LogOut className="h-4 w-4" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button type="button" onClick={() => goTo("/login")} className="rounded-full px-3 py-2 text-sm font-bold text-[#071522]/75 transition hover:text-[#071522]">
                Sign in
              </button>
              <button type="button" onClick={() => goTo("/signup")} className="inline-flex items-center gap-2 rounded-full bg-[#126db3] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#07508b] active:scale-[0.98]">
                Join HireLane
                <ArrowRightIcon />
              </button>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#071522]/12 bg-white/60 text-[#071522] shadow-sm transition hover:bg-white lg:hidden"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#071522]/10 bg-[#e8f2f9] px-5 py-4 shadow-[0_16px_28px_rgba(4,38,64,0.10)] lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-2" aria-label="Mobile navigation">
            {navigation.map(({ label, path, icon: Icon }) => (
              <button
                key={path}
                type="button"
                onClick={() => goTo(path)}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-sm font-bold transition ${
                  isActive(path) ? "bg-[#126db3] text-white" : "bg-white/55 text-[#071522]/75"
                }`}
              >
                {React.createElement(Icon, { className: "h-5 w-5" })}
                {label}
              </button>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              {user ? (
                <>
                  <button type="button" onClick={() => goTo("/viewprofile")} className="rounded-2xl bg-[#126db3] px-4 py-3 text-sm font-bold text-white">My profile</button>
                  <button type="button" onClick={signOut} className="rounded-2xl border border-[#0c2a28]/12 bg-white px-4 py-3 text-sm font-bold text-[#c05228]">Sign out</button>
                </>
              ) : (
                <>
                  <button type="button" onClick={() => goTo("/login")} className="rounded-2xl border border-[#071522]/14 bg-white/50 px-4 py-3 text-sm font-bold text-[#071522]">Sign in</button>
                  <button type="button" onClick={() => goTo("/signup")} className="rounded-2xl bg-[#126db3] px-4 py-3 text-sm font-bold text-white">Join now</button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const ArrowRightIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4">
    <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Navbar;
