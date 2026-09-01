"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { EXPERIENCE_DATA } from "@/lib/constants";
import { Briefcase, MapPin, Plus, Minus } from "lucide-react";

export const Experience: React.FC = () => {
  // Only one experience expanded at a time (first one open by default, or null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineScaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 bg-surface relative overflow-hidden border-t-[0.5px] border-border-subtle"
      aria-label="Executive Career Journey"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header with Reveal */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-secondary block mb-2">
            Career Chronicle
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-black text-primary tracking-tight">
            Experience & Leadership
          </h2>
          <motion.div
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="h-[2px] w-24 bg-secondary mt-4"
          />
        </motion.div>

        {/* Timeline Structure with Single-Expand Accordions */}
        <div
          ref={containerRef}
          className="relative ml-4 sm:ml-36 pl-8 sm:pl-12 space-y-8 sm:space-y-10"
        >
          {/* Background Timeline Static Hairline */}
          <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-border-subtle/50" />

          {/* Animated Progressive Timeline Line */}
          {!shouldReduceMotion && (
            <motion.div
              style={{ scaleY: lineScaleY, originY: 0 }}
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary"
            />
          )}

          {EXPERIENCE_DATA.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={item.company + item.role + item.period}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 20, x: -12 }
                }
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.05, 0.25),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative group"
              >
                {/* Animated Timeline Indicator Dot */}
                <div
                  className={`absolute -left-[40px] sm:-left-[56px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isExpanded
                      ? "bg-secondary border-secondary scale-110 shadow-sm"
                      : "bg-surface border-border-subtle group-hover:border-secondary"
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isExpanded ? "bg-surface" : "bg-transparent"
                    }`}
                  />
                </div>

                {/* Date Badge - Left on Desktop */}
                <div className="sm:absolute sm:-left-48 sm:top-5 sm:w-36 sm:text-right mb-2 sm:mb-0">
                  <span className="font-serif text-sm font-bold text-secondary tracking-tight block">
                    {item.period}
                  </span>
                  {item.employmentType && (
                    <span className="text-[10px] uppercase tracking-wider text-on-surface-variant/70 font-medium block mt-0.5">
                      {item.employmentType}
                    </span>
                  )}
                </div>

                {/* Interactive Expandable Item Container */}
                <div
                  onClick={() => toggleExpand(index)}
                  className={`journal-page-texture border-[0.5px] transition-all duration-300 rounded-sm cursor-pointer ${
                    isExpanded
                      ? "border-secondary/60 shadow-md bg-surface-bright"
                      : "border-border-subtle hover:border-secondary/40 shadow-sm"
                  }`}
                >
                  {/* Collapsed Header / Always Visible Top Bar */}
                  <div className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      {/* Company & Location Badges */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.14em] font-bold text-secondary">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>{item.company}</span>
                        </span>
                        {item.location && (
                          <span className="inline-flex items-center gap-1 text-[11px] text-on-surface-variant font-normal normal-case tracking-normal">
                            <MapPin className="w-3 h-3 text-secondary" />
                            <span>{item.location}</span>
                          </span>
                        )}
                      </div>

                      {/* Job Title */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-200">
                        {item.role}
                      </h3>
                    </div>

                    {/* Expand / Collapse Button */}
                    <div className="flex items-center gap-2 self-start sm:self-center flex-shrink-0 pt-2 sm:pt-0">
                      <span className="text-[11px] uppercase tracking-widest font-bold text-secondary hidden sm:inline-block">
                        {isExpanded ? "Collapse" : "View Details"}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                          isExpanded
                            ? "bg-secondary text-surface border-secondary"
                            : "border-border-subtle text-on-surface-variant group-hover:border-secondary group-hover:text-secondary"
                        }`}
                      >
                        {isExpanded ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content Area with Smooth Animation */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.45,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-border-subtle/50">
                          {/* Description if present */}
                          {item.description && (
                            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-normal mb-4">
                              {item.description}
                            </p>
                          )}

                          {/* Verified Bullet Points */}
                          {item.bullets && item.bullets.length > 0 && (
                            <ul className="space-y-2.5">
                              {item.bullets.map((bullet) => (
                                <li
                                  key={bullet}
                                  className="flex items-start gap-3 text-xs sm:text-sm text-on-surface-variant leading-relaxed font-normal"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
