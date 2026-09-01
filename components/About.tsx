"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { STORY_DATA, IMPACT_METRICS } from "@/lib/constants";
import { AnimatedCounter } from "./AnimatedCounter";
import { Check, Quote } from "lucide-react";

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-surface relative overflow-hidden border-t-[0.5px] border-border-subtle"
      aria-label="About Ahmed Gad"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-secondary block mb-2">
            Executive Profile
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-primary tracking-tight leading-[0.95] mb-6">
            {STORY_DATA.headline}
          </h2>
          <motion.div
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="h-[2px] w-28 bg-secondary mb-6"
          />
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            {STORY_DATA.lead}
          </p>
        </motion.div>

        {/* Large Typography Statistics & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Key Career Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              Core Leadership Pillars
            </h3>

            <ul className="space-y-4">
              {STORY_DATA.highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, x: -10 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-start gap-3.5 text-sm sm:text-base text-on-surface-variant leading-relaxed font-normal"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Executive Quote Callout */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 p-6 bg-surface-card border-l-4 border-secondary shadow-sm relative rounded-sm"
            >
              <Quote className="w-8 h-8 text-secondary/30 absolute top-4 right-4" />
              <p className="font-serif text-lg sm:text-xl italic text-primary leading-snug">
                &ldquo;{STORY_DATA.quote}&rdquo;
              </p>
              <p className="text-[11px] uppercase tracking-widest text-secondary font-bold mt-2">
                — Ahmed Gad
              </p>
            </motion.div>
          </div>

          {/* Right Column: Key Numerical Metrics in Clean Editorial Grid */}
          <div className="lg:col-span-5 bg-primary-container text-surface p-6 sm:p-8 rounded-sm shadow-md border border-border-subtle/20">
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-secondary-container mb-6 pb-3 border-b border-white/10">
              Verified Executive Metrics
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {IMPACT_METRICS.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 15 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-3 border-b border-white/10"
                >
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-secondary-container tracking-tight mb-1">
                    <AnimatedCounter value={metric.value} duration={1.3} />
                  </div>
                  <div className="text-xs font-semibold text-surface uppercase tracking-wide">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
