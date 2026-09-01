"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { NAV_LINKS, SITE_METADATA } from "@/lib/constants";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="w-full bg-surface-container-low border-t-[0.5px] border-border-subtle relative pt-14 pb-16">
      
      {/* Folder Tab Graphic */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-48 sm:w-56 h-8 bg-surface-container-low border-t-[0.5px] border-l-[0.5px] border-r-[0.5px] border-border-subtle rounded-t-lg flex items-center justify-center shadow-sm">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">
          Executive Archive
        </span>
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between"
      >
        {/* Left Column: Brand & Role */}
        <div className="md:col-span-5">
          <a href="#home" className="inline-block mb-2 group">
            <span className="font-serif text-2xl font-black tracking-tight text-primary group-hover:text-secondary transition-colors duration-250">
              Ahmed Gad
            </span>
          </a>
          <p className="text-xs text-on-surface-variant leading-relaxed max-w-sm font-normal">
            Senior Sales & Business Development Director. Luxury Real Estate · Investor Relations · Strategic Growth across Saudi Arabia & GCC.
          </p>
        </div>

        {/* Right Column: Navigation Links */}
        <div className="md:col-span-7 flex flex-wrap items-center md:justify-end gap-x-6 gap-y-3 text-xs uppercase tracking-[0.14em] text-on-surface-variant font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-secondary transition-colors duration-200 py-1 relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mt-12 pt-6 border-t-[0.5px] border-border-subtle/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant/80">
        <div>
          © {currentYear} {SITE_METADATA.author}. All Rights Reserved.
        </div>
        <div className="text-[11px] tracking-wider uppercase font-medium">
          Saudi Arabia & GCC Markets
        </div>
      </div>

    </footer>
  );
};
