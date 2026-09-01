"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { NAV_LINKS, CONTACT_DATA } from "@/lib/constants";
import { X, ArrowUpRight, Mail, MapPin } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: shouldReduceMotion
        ? "none"
        : "polygon(0 0, 100% 0, 100% 0, 0 0)",
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
    open: {
      opacity: 1,
      clipPath: shouldReduceMotion
        ? "none"
        : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-[600] bg-surface/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 md:hidden overflow-y-auto border-l-[0.5px] border-border-subtle"
        >
          {/* Header row */}
          <div className="flex items-center justify-between border-b-[0.5px] border-border-subtle pb-5">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl font-black text-primary tracking-tighter">
                AG
              </span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary">
                  Ahmed Gad
                </span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-on-surface-variant">
                  Senior Director
                </span>
              </div>
            </div>

            <motion.button
              whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
              onClick={onClose}
              aria-label="Close menu"
              className="p-3 rounded-full border border-border-subtle text-on-surface hover:border-secondary hover:text-secondary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Navigation Links */}
          <nav className="py-8 flex flex-col gap-3">
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.35,
                  delay: 0.04 + index * 0.05,
                  ease: "easeOut",
                }}
                className="group flex items-center justify-between py-3 px-2 border-b-[0.5px] border-border-subtle/50 min-h-[48px]"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif font-bold text-sm text-secondary">
                    0{index + 1}
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl text-primary group-hover:text-secondary transition-colors duration-200">
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-on-surface-variant/40 group-hover:text-secondary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
              </motion.a>
            ))}
          </nav>

          {/* Footer inside mobile menu */}
          <div className="pt-6 border-t-[0.5px] border-border-subtle flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs text-on-surface-variant">
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              <span>Saudi Arabia & GCC Markets</span>
            </div>

            <motion.a
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              href={`mailto:${CONTACT_DATA.email}`}
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-primary-container text-on-primary text-xs uppercase tracking-widest font-semibold hover:bg-secondary transition-colors shadow-sm min-h-[44px]"
            >
              <Mail className="w-4 h-4" />
              <span>Let&apos;s Connect</span>
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
