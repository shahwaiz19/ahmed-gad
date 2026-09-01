"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";
import { Menu, ArrowRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Subtle Scroll Progress Indicator */}
      {!shouldReduceMotion && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-secondary z-[70] origin-left pointer-events-none"
          style={{ scaleX }}
        />
      )}

      <motion.nav
        initial={shouldReduceMotion ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-surface/92 backdrop-blur-md border-b-[0.5px] border-border-subtle shadow-sm py-3.5"
            : "bg-surface/80 backdrop-blur-sm border-b-[0.5px] border-border-subtle/80 py-5"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <motion.a
            href="#home"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="group flex items-center gap-3.5 focus:outline-none focus:ring-1 focus:ring-secondary rounded p-1"
            aria-label="Ahmed Gad - Senior Director"
          >
            <span className="font-serif text-2xl sm:text-3xl font-black tracking-tighter text-primary group-hover:text-secondary transition-colors duration-300">
              AG
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.22em] font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                Ahmed Gad
              </span>
              <span className="text-[10px] uppercase tracking-[0.16em] text-on-surface-variant/80 font-medium hidden sm:inline-block">
                Senior Sales & Business Development Director
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] text-on-surface-variant hover:text-secondary font-medium transition-colors duration-250 relative py-1 group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { scale: 1.02, y: -1 }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="group hidden sm:inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary-container text-on-primary rounded-full text-xs uppercase tracking-[0.14em] font-medium hover:bg-secondary transition-colors duration-300 shadow-sm"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-250 group-hover:translate-x-1" />
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              type="button"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={isMobileMenuOpen}
              className="md:hidden p-2 rounded-md text-primary hover:text-secondary border border-border-subtle bg-surface-container-low transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
