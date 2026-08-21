import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import demoVideo from "../assets/bannervideo.mp4";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Globe2,
  MapPin,
  Palette,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const featuredJobs = [
  {
    title: "Senior UX Designer",
    company: "Northstar Studio",
    location: "New York · Hybrid",
    salary: "$120k – $145k",
    icon: Palette,
    accent: "bg-[#f5dcc8] text-[#b8572a]",
  },
  {
    title: "Frontend Developer",
    company: "Arc & Co.",
    location: "Remote · North America",
    salary: "$105k – $135k",
    icon: Code2,
    accent: "bg-[#d8e9e5] text-[#17756f]",
  },
  {
    title: "Data Scientist",
    company: "Fieldwork AI",
    location: "Austin · Hybrid",
    salary: "$130k – $160k",
    icon: BarChart3,
    accent: "bg-[#e5e4bc] text-[#617018]",
  },
];

const popularSearches = ["Designer", "Writer", "Team leader", "Full stack", "Web developer", "Senior", "Financial analyst", "Software"];

const reasons = [
  {
    number: "01",
    icon: Sparkles,
    title: "More signal, less scrolling",
    copy: "Search a focused mix of thoughtful roles instead of sorting through endless noise.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Teams worth knowing",
    copy: "See the context behind every opportunity and decide where your work belongs next.",
  },
  {
    number: "03",
    icon: Globe2,
    title: "Work that fits your life",
    copy: "Use remote, hybrid, location, and role signals to find a better everyday fit.",
  },
];

const HeroJobIcon = ({ Icon, accent }) => (
  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${accent}`} aria-hidden="true">
    {React.createElement(Icon, { className: "h-6 w-6", strokeWidth: 1.9 })}
  </span>
);

const Banner = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const videoRef = useRef(null);
  const closeButtonRef = useRef(null);

  const closeVideo = () => setShowVideo(false);

  useEffect(() => {
    if (!showVideo) return;

    const previousOverflow = document.body.style.overflow;
    const video = videoRef.current;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => closeButtonRef.current?.focus(), 80);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
  }, [showVideo]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeVideo();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/jobs");
  };

  return (
    <main className="overflow-hidden bg-[#f7f5f0] text-[#0b1c2c]">
      <section className="relative isolate overflow-hidden bg-[#e8f2f9]">
        <div
          className="absolute inset-y-0 right-0 hidden w-[48%] bg-[#062d4c] lg:block"
          style={{ clipPath: "polygon(34% 0, 100% 0, 100% 100%, 0 100%)" }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute left-[-8%] top-24 h-64 w-64 rounded-full bg-white/40 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-10%] left-[34%] h-64 w-64 rounded-full bg-[#bdd8eb]/65 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 lg:grid-cols-[1.03fr_0.97fr] lg:gap-4 lg:px-10 lg:pb-20 lg:pt-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1771b7]">
              <span className="h-2 w-2 rounded-full bg-[#1771b7]" />
              The smarter job search
            </div>
            <h1 className="max-w-2xl font-sans text-[clamp(3.3rem,6.6vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.075em] text-[#071522]">
              Find the perfect
              <br />
              <span className="text-[#07508b]">move for you.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#486274] sm:text-lg sm:leading-8">
              Search your next career opportunity through 1,200+ thoughtfully selected roles.
            </p>

            <form onSubmit={handleSearch} className="mt-8 flex max-w-2xl flex-col gap-2 rounded-[1.5rem] bg-white p-2 shadow-[0_20px_45px_rgba(4,38,64,0.12)] sm:flex-row sm:items-center sm:rounded-full">
              <label className="flex min-w-0 flex-1 items-center gap-3 rounded-full px-4 py-3 sm:py-2.5">
                <Search className="h-5 w-5 shrink-0 text-[#1771b7]" />
                <input
                  value={keyword}
                  onChange={(event) => setKeyword(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-[#071522] outline-none placeholder:text-[#7f929e]"
                  placeholder="Job title or keyword"
                  aria-label="Search by job title or keyword"
                />
              </label>
              <span className="hidden h-7 w-px bg-[#071522]/12 sm:block" aria-hidden="true" />
              <label className="flex min-w-0 flex-1 items-center gap-3 rounded-full px-4 py-3 sm:py-2.5">
                <MapPin className="h-5 w-5 shrink-0 text-[#1771b7]" />
                <input
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-[#071522] outline-none placeholder:text-[#7f929e]"
                  placeholder="All locations"
                  aria-label="Search by location"
                />
              </label>
              <button type="submit" className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#126db3] px-5 text-sm font-bold text-white shadow-sm transition hover:bg-[#07508b] focus:outline-none focus:ring-2 focus:ring-[#126db3] focus:ring-offset-2 active:scale-[0.98] sm:w-12 sm:px-0" aria-label="Search jobs">
                <Search className="h-5 w-5" />
                <span className="sm:hidden">Search jobs</span>
              </button>
            </form>

            <div className="mt-6 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#36566a]">Popular searches</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {popularSearches.map((search) => (
                  <button
                    key={search}
                    type="button"
                    onClick={() => {
                      setKeyword(search);
                      navigate("/jobs");
                    }}
                    className="rounded-full border border-[#126db3]/12 bg-white/60 px-3.5 py-2 text-xs font-semibold text-[#486274] transition hover:border-[#126db3]/30 hover:bg-white hover:text-[#07508b]"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button type="button" onClick={() => navigate("/jobs")} className="inline-flex items-center gap-2 text-sm font-bold text-[#071522] transition hover:text-[#126db3]">
                Browse all jobs
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => setShowVideo(true)} className="inline-flex items-center gap-2 text-sm font-bold text-[#071522] transition hover:text-[#126db3]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071522] text-white"><Play className="ml-0.5 h-3.5 w-3.5 fill-current" /></span>
                Watch how it works
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:mr-0">
            <div className="absolute right-[-4%] top-[8%] h-[78%] w-[92%] rotate-[6deg] rounded-[2rem] bg-[#f7fbfe] shadow-[0_22px_45px_rgba(4,38,64,0.16)]" aria-hidden="true" />
            <div className="absolute right-[2%] top-[4%] h-[82%] w-[94%] rotate-[2.5deg] rounded-[2rem] bg-[#1778c9] shadow-[0_24px_48px_rgba(4,38,64,0.24)]" aria-hidden="true" />
            <div className="relative z-10 mx-auto w-[92%] rounded-[2rem] border border-[#071522]/10 bg-white p-5 shadow-[0_28px_55px_rgba(2,25,42,0.28)] sm:p-7 lg:ml-0">
              <div className="mb-6 flex items-center justify-between border-b border-[#071522]/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#126db3] text-white">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#071522] sm:text-base">Featured opportunities</p>
                    <p className="mt-1 text-xs text-[#81919b]">A fresh edit for your next move</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#e8f2f9] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#126db3]">Today</span>
              </div>

              <div className="space-y-3">
                {featuredJobs.map((job) => (
                  <button key={job.title} type="button" onClick={() => navigate("/jobs")} className="group flex w-full items-center gap-3 rounded-2xl border border-[#071522]/8 bg-[#f7f5f0] p-3 text-left transition hover:-translate-y-0.5 hover:bg-[#eef4e9] sm:gap-4 sm:p-4">
                    <HeroJobIcon Icon={job.icon} accent={job.accent} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-[#071522] sm:text-base">{job.title}</p>
                      <p className="mt-1 truncate text-xs text-[#486274]">{job.company} · {job.location}</p>
                    </div>
                    <div className="hidden text-right sm:block">
                      <p className="text-sm font-bold text-[#126db3]">{job.salary}</p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#81919b]">estimated</p>
                    </div>
                    <ChevronRight className="h-5 w-5 shrink-0 text-[#8da1ad] transition group-hover:translate-x-1 group-hover:text-[#126db3]" />
                  </button>
                ))}
              </div>

              <button type="button" onClick={() => navigate("/jobs")} className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#071522] py-3.5 text-sm font-bold text-white transition hover:bg-[#07508b]">
                View all opportunities
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="absolute -left-4 bottom-[4%] z-20 rounded-2xl bg-[#c8f45b] px-4 py-3 text-[#071522] shadow-[0_18px_35px_rgba(4,38,64,0.18)] sm:-left-7">
              <p className="text-2xl font-bold tracking-[-0.06em]">1,200+</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em]">new roles weekly</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e8f2f9] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#126db3]">Why HireLane</p>
              <h2 className="mt-4 max-w-lg font-sans text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#071522] sm:text-5xl">More clarity for the move ahead.</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#486274]">The right opportunity is about more than a title. It is about fit, energy, and the direction you want to take next.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {reasons.map(({ number, icon: Icon, title, copy }) => (
                <article key={number} className="rounded-[1.5rem] border border-[#071522]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(4,38,64,0.1)]">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#126db3] text-white">{React.createElement(Icon, { className: "h-5 w-5" })}</span>
                    <span className="text-xs font-bold text-[#8da1ad]">{number}</span>
                  </div>
                  <h3 className="mt-8 text-lg font-bold text-[#071522]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#486274]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showVideo && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-transparent p-4 sm:p-8" role="dialog" aria-modal="true" aria-label="HireLane demo video" onClick={closeVideo}>
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" aria-hidden="true" />
          <div className="relative z-10 w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button ref={closeButtonRef} type="button" aria-label="Close demo video" onClick={closeVideo} className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#071522] shadow-lg transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#126db3]">
              <X className="h-5 w-5" />
            </button>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/40 bg-[#062d4c] shadow-[0_30px_80px_rgba(4,38,64,0.35)]">
              <div className="relative aspect-video w-full">
                <video ref={videoRef} src={demoVideo} controls autoPlay muted playsInline className="absolute inset-0 h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Banner;
