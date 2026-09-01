"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HIGHLIGHTS_DATA } from "@/lib/constants";
import { Plus, Minus, Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export const Highlights: React.FC = () => {
  // Single expanded highlight at a time
  const [expandedId, setExpandedId] = useState<string | null>("01");
  const shouldReduceMotion = useReducedMotion();

  const toggleHighlight = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="highlights"
      className="py-24 sm:py-32 bg-background relative overflow-hidden border-t-[0.5px] border-border-subtle"
      aria-label="Executive Career Highlights"
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
            Executive Dossier
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-black text-primary tracking-tight leading-[0.95] mb-4">
            Career Highlights
          </h2>
          <motion.div
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="h-[2px] w-24 bg-secondary mt-4 mb-6"
          />
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-lg leading-relaxed">
            Key leadership milestones and strategic achievements verified across high-value luxury developments and regional operations.
          </p>
        </motion.div>

        {/* Editorial Accordion Structure */}
        <div className="border-t-[0.5px] border-border-subtle">
          {HIGHLIGHTS_DATA.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 15 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`border-b-[0.5px] transition-colors duration-300 ${
                  isExpanded
                    ? "border-secondary/60 bg-surface-card/40"
                    : "border-border-subtle hover:bg-surface-card/20"
                }`}
              >
                {/* Collapsed Header Trigger Row */}
                <button
                  type="button"
                  onClick={() => toggleHighlight(item.id)}
                  aria-expanded={isExpanded}
                  className="w-full py-8 sm:py-10 px-3 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left cursor-pointer focus:outline-none min-h-[56px]"
                >
                  <div className="flex items-start md:items-center gap-6 sm:gap-10">
                    {/* Number */}
                    <span className="font-serif text-3xl sm:text-4xl font-black text-secondary select-none">
                      {item.id}
                    </span>

                    {/* Category & Title */}
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-secondary block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary group-hover:text-secondary transition-colors leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Toggle Indicator */}
                  <div className="flex items-center gap-3 self-end md:self-center pt-2 md:pt-0">
                    <span className="text-xs uppercase tracking-widest font-bold text-secondary hidden sm:inline-block">
                      {isExpanded ? "Close Dossier" : "Open Dossier"}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                        isExpanded
                          ? "bg-secondary text-surface border-secondary"
                          : "border-border-subtle text-primary bg-surface-bright"
                      }`}
                    >
                      {isExpanded ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Dossier Content Area */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="dossier-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-12 pb-10 pt-4 border-t border-border-subtle/50">
                        {/* Dossier Card Container */}
                        <div className="journal-page-texture p-6 sm:p-8 border-[0.5px] border-border-subtle shadow-sm rounded-sm">
                          
                          {/* Metadata Bar */}
                          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.14em] font-bold text-secondary pb-4 border-b border-border-subtle/60 mb-6">
                            <span className="inline-flex items-center gap-1.5">
                              <Briefcase className="w-3.5 h-3.5" />
                              <span>{item.company}</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <span>Role: {item.role}</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{item.period}</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 normal-case font-normal text-on-surface-variant">
                              <MapPin className="w-3.5 h-3.5 text-secondary" />
                              <span>{item.location}</span>
                            </span>
                          </div>

                          {/* Summary */}
                          <p className="text-sm sm:text-base text-primary font-serif leading-relaxed mb-6 font-normal">
                            {item.summary}
                          </p>

                          {/* Bullet Points */}
                          <div className="space-y-3">
                            <div className="text-[11px] uppercase tracking-widest font-bold text-secondary">
                              Key Verified Details
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {item.bullets.map((bullet) => (
                                <li
                                  key={bullet}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface-variant leading-relaxed font-normal p-3 bg-surface-bright/70 border border-border-subtle/40 rounded-sm"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Close Button inside dossier */}
                          <div className="mt-8 pt-4 border-t border-border-subtle/60 flex justify-end">
                            <button
                              type="button"
                              onClick={() => setExpandedId(null)}
                              className="text-xs uppercase tracking-widest font-bold text-secondary hover:text-primary transition-colors inline-flex items-center gap-1"
                            >
                              <span>Close Dossier</span>
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
