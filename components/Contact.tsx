"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CONTACT_DATA } from "@/lib/constants";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="py-24 sm:py-36 bg-background relative overflow-hidden border-t-[0.5px] border-border-subtle"
      aria-label="Contact and Executive Advisory"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10 text-center">
        
        {/* Minimal Centered Composition */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="journal-page-texture p-8 sm:p-14 lg:p-16 border-[0.5px] border-border-subtle shadow-journal rounded-sm relative"
        >
          {/* Masking tape on top */}
          <div className="tape-strip" aria-hidden="true" />

          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-secondary block mb-3">
            {CONTACT_DATA.kicker}
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-primary tracking-tight leading-[0.95] mb-6">
            {CONTACT_DATA.headline}
          </h2>

          <motion.div
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0.5 }}
            className="h-[2px] w-24 bg-secondary mx-auto mb-8"
          />

          <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed mb-10 font-normal">
            {CONTACT_DATA.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={`mailto:${CONTACT_DATA.email}`}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { scale: 1.02, y: -2 }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-container text-on-primary rounded-full text-xs uppercase tracking-[0.16em] font-semibold hover:bg-secondary transition-colors duration-300 shadow-md shadow-primary-container/10 min-h-[48px]"
            >
              <Mail className="w-4 h-4" />
              <span>{CONTACT_DATA.buttonText}</span>
              <ArrowRight className="w-4 h-4 transform transition-transform duration-250 group-hover:translate-x-1" />
            </motion.a>

            <div className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface border border-border-subtle rounded-full text-xs text-on-surface-variant min-h-[48px]">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>Saudi Arabia & GCC Markets</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
