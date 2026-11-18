"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "work", "about", "stack", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0c]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/60"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#home");
          }}
          className="group flex items-center gap-2.5 font-mono text-sm tracking-widest font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Syed Mohammed Ehaab - Home"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 status-dot-pulse" />
          <span className="text-white group-hover:text-zinc-300 transition-colors tracking-[0.16em] uppercase">
            EHAAB<span className="text-zinc-400">.DEV</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] text-zinc-500 font-normal px-2 py-0.5 rounded border border-white/[0.06] bg-white/[0.02]">
            v2026
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1.5 p-1 rounded-full border border-white/[0.08] bg-[#111318]/70 backdrop-blur-md"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`relative px-4 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-[#090a0c] font-semibold bg-white"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Let's Talk */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#090a0c] bg-white hover:bg-zinc-200 rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-white/5"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white rounded-md border border-white/[0.08] bg-[#111318] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-[#090a0c]/98 backdrop-blur-2xl border-b border-white/[0.08] p-6 flex flex-col justify-between z-50">
          <div className="flex flex-col gap-3 pt-4">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase px-3">
              Navigation Menu
            </span>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded text-base font-mono tracking-wider transition-colors ${
                    isActive
                      ? "bg-white/[0.08] text-white border-l-2 border-white"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-zinc-500 font-mono">0{navLinks.indexOf(link) + 1}</span>
                </a>
              );
            })}
          </div>

          <div className="space-y-4 pt-6 border-t border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 status-dot-pulse" />
              <span>Mangalore, Karnataka, India</span>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-mono uppercase tracking-widest font-semibold text-[#090a0c] bg-white hover:bg-zinc-200 rounded-sm"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
