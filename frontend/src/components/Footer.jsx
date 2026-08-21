import React from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo.svg";

const linkGroups = [
  {
    title: "Explore",
    links: [
      ["Find jobs", "/jobs"],
      ["Companies", "/companies"],
      ["Career paths", "/roles"],
      ["Saved jobs", "/saved"],
    ],
  },
  {
    title: "For talent",
    links: [
      ["Create a profile", "/signup"],
      ["How HireLane works", "/"],
      ["Career guidance", "/roles"],
      ["Contact us", "/contact"],
    ],
  },
];

const Footer = () => (
  <footer className="bg-[#e8f2f9] px-5 pb-7 pt-16 text-[#071522] sm:px-8 lg:px-10 lg:pt-20">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 border-b border-[#071522]/10 pb-12 lg:grid-cols-[1.15fr_1fr_1fr_1.2fr] lg:gap-8 lg:pb-16">
        <div className="max-w-sm">
          <a href="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-[#071522]/10">
              <img src={logo} alt="" className="h-full w-full object-contain" />
            </span>
            <span>
              <span className="block font-sans text-2xl font-bold tracking-[-0.06em] text-[#071522]">HireLane</span>
              <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#486274]">Career, considered</span>
            </span>
          </a>
          <p className="mt-6 text-sm leading-7 text-[#486274]">
            A more thoughtful place to find the work, teams, and direction that make your next move count.
          </p>
          <div className="mt-7 flex items-center gap-2">
            {["in", "x", "ig"].map((network) => (
              <a key={network} href="#" aria-label={`HireLane on ${network}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#071522]/15 text-xs font-bold text-[#486274] transition hover:border-[#126db3] hover:bg-[#126db3] hover:text-white">
                {network}
              </a>
            ))}
          </div>
        </div>

        {linkGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#126db3]">{group.title}</h2>
            <ul className="mt-5 space-y-3">
              {group.links.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="group inline-flex items-center gap-2 text-sm font-medium text-[#486274] transition hover:text-[#071522]">
                    {label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#126db3]">Stay connected</h2>
          <div className="mt-5 space-y-4 text-sm text-[#486274]">
            <a href="mailto:support@hirelane.com" className="flex items-start gap-3 transition hover:text-[#126db3]">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#126db3]" />
              support@hirelane.com
            </a>
            <a href="tel:+15550000000" className="flex items-start gap-3 transition hover:text-[#126db3]">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#126db3]" />
              +1 (555) 000-0000
            </a>
            <span className="flex items-start gap-3 leading-6 text-[#486274]">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#126db3]" />
              New York, NY · Working everywhere
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 py-6 text-xs text-[#708694] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} HireLane. Built for better career moves.</p>
        <div className="flex gap-5">
          <a href="#" className="transition hover:text-[#126db3]">Privacy</a>
          <a href="#" className="transition hover:text-[#126db3]">Terms</a>
          <a href="/contact" className="transition hover:text-[#126db3]">Support</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
