"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EXPERTISE_DATA } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export const Expertise: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="expertise"
      className="py-24 sm:py-32 bg-background relative overflow-hidden border-t-[0.5px] border-border-subtle"
      aria-label="Core Executive Expertise"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-secondary block mb-2">
              Capabilities & Focus
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-black text-primary tracking-tight">
              Core Expertise
            </h2>
            <motion.div
              initial={shouldReduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
              className="h-[2px] w-24 bg-secondary mt-4"
            />
          </div>

          <p className="text-xs sm:text-sm text-on-surface-variant max-w-md font-normal leading-relaxed">
            Specialized leadership competencies refined over 13+ years across luxury real estate developments, high-stakes investor relations, and regional market expansion.
          </p>
        </motion.div>

        {/* Editorial Numbered List Structure (Not Generic Cards) */}
        <div className="border-t-[0.5px] border-border-subtle">
          {EXPERTISE_DATA.map((item, index) => (
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
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group py-8 sm:py-10 border-b-[0.5px] border-border-subtle transition-all duration-300 hover:bg-surface-card/40 px-3 sm:px-6 rounded-sm cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center">
                
                {/* Number */}
                <div className="md:col-span-2 flex items-center gap-3">
                  <span className="font-serif text-2xl sm:text-3xl font-black text-secondary">
                    {item.id}
                  </span>
                  <div className="h-px w-8 bg-secondary/30 hidden sm:block" />
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary group-hover:text-secondary transition-colors duration-200 transform group-hover:translate-x-1">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Micro Action Icon */}
                <div className="md:col-span-1 flex justify-end">
                  <div className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center text-on-surface-variant group-hover:text-secondary group-hover:border-secondary transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
