"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { HERO_DATA } from "@/lib/constants";
import { ArrowRight, Compass } from "lucide-react";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms (disabled if prefers-reduced-motion)
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 18]
  );
  const frameY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -10]
  );

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden flex items-center justify-center bg-background"
      aria-label="Executive Introduction"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* Main Executive Composition Container with Paper Texture & Subtle Border */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="journal-page-texture border-[0.5px] border-border-subtle p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-journal"
        >
          
          {/* Subtle Vintage Binding Marks */}
          <div className="absolute left-0 top-0 bottom-0 w-7 border-r-[0.5px] border-border-subtle hidden lg:flex flex-col justify-evenly items-center py-10">
            <div className="w-3.5 h-1.5 bg-surface-variant border border-outline-variant rounded-full"></div>
            <div className="w-3.5 h-1.5 bg-surface-variant border border-outline-variant rounded-full"></div>
            <div className="w-3.5 h-1.5 bg-surface-variant border border-outline-variant rounded-full"></div>
            <div className="w-3.5 h-1.5 bg-surface-variant border border-outline-variant rounded-full"></div>
            <div className="w-3.5 h-1.5 bg-surface-variant border border-outline-variant rounded-full"></div>
            <div className="w-3.5 h-1.5 bg-surface-variant border border-outline-variant rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center lg:pl-6">
            
            {/* =======================================================
                LEFT / MOBILE ORDER 2: POLAROID PHOTOGRAPH & VINTAGE FRAME
               ======================================================= */}
            <motion.div
              style={{ y: frameY }}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 30, rotate: -2 }
              }
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-6 relative flex justify-center order-2 lg:order-1 pt-4 lg:pt-0"
            >
              {/* Copper Watermark Behind Photo */}
              <div className="copper-watermark text-7xl sm:text-8xl -top-8 -left-4 sm:-left-6">
                01
              </div>

              {/* Floating Paper Tag at Top (Entrance at 0.5s) */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -top-4 -left-2 sm:-left-4 z-30 bg-surface-bright text-on-surface py-2 px-3.5 sm:px-4 shadow-paper-tag border-[0.5px] border-border-subtle max-w-[210px] sm:max-w-[240px]"
              >
                <p className="font-serif text-[11px] sm:text-xs leading-tight text-primary font-medium tracking-tight">
                  {HERO_DATA.floatingBadge}
                </p>
              </motion.div>

              {/* Polaroid Frame with Physical Hover Physics */}
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -4,
                        rotate: 0,
                        scale: 1.01,
                        boxShadow: "0 22px 50px rgba(29, 27, 23, 0.14)",
                      }
                }
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="polaroid-frame w-full max-w-[380px] sm:max-w-[420px] cursor-pointer"
              >
                {/* Masking Tape Top Strip */}
                <div className="tape-strip" aria-hidden="true" />
                
                {/* Paper Clip Right Corner */}
                <div className="paper-clip" aria-hidden="true" />

                {/* Portrait Photo Container with subtle Parallax (Image Entrance at 0.35s) */}
                <div className="relative w-full aspect-[4/5] bg-surface-variant mb-4 overflow-hidden border-[0.5px] border-border-subtle">
                  <motion.div
                    style={{ y: imageY }}
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative w-full h-[110%] -top-[5%]"
                  >
                    <Image
                      src="/images/ahmed.jpg"
                      alt="Ahmed Gad — Senior Sales & Business Development Director"
                      fill
                      priority
                      sizes="(max-width: 640px) 90vw, 420px"
                      className="object-cover object-top filter grayscale-[0.12] contrast-[1.04] transition-all duration-500"
                    />
                  </motion.div>
                </div>

                {/* Handwritten Copper Note */}
                <div className="text-center px-2">
                  <p className="handwritten-copper text-xl sm:text-2xl leading-tight transform -rotate-1">
                    {HERO_DATA.photoCaption}
                  </p>
                </div>
              </motion.div>

              {/* Bottom Experience Note Card */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: 2 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -bottom-5 -right-2 sm:-right-4 z-30 bg-surface-container-low text-on-surface p-3.5 sm:p-4 shadow-paper-tag border-[0.5px] border-border-subtle max-w-[170px] sm:max-w-[185px]"
              >
                <div className="font-serif text-2xl sm:text-3xl font-black text-secondary tracking-tight">
                  {HERO_DATA.experienceBadge.years}
                </div>
                <p className="text-[10px] sm:text-[11px] text-on-surface-variant leading-snug font-sans">
                  {HERO_DATA.experienceBadge.text}
                </p>
              </motion.div>

            </motion.div>

            {/* =======================================================
                RIGHT / MOBILE ORDER 1: EXECUTIVE EDITORIAL HEADLINE & BIO
               ======================================================= */}
            <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2 text-left">
              
              {/* Executive Eyebrow (0.5s) */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mb-3"
              >
                <div className="inline-flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-on-surface-variant">
                    {HERO_DATA.kicker}
                  </span>
                </div>
              </motion.div>

              {/* Handwritten Intro (0.65s) */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="mb-1"
              >
                <span className="handwritten-copper text-2xl sm:text-3xl inline-block transform -rotate-2">
                  {HERO_DATA.greeting}
                </span>
              </motion.div>

              {/* Large Headline (0.8s) */}
              <motion.h1
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-primary tracking-tight leading-[0.95] mb-4"
              >
                {HERO_DATA.name}
              </motion.h1>

              {/* Copper Editorial Separator Line (0.9s) */}
              <motion.div
                initial={shouldReduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
                className="h-[2px] w-28 bg-secondary mb-5"
              />

              {/* Professional Title (1.0s) */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="mb-3"
              >
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-secondary">
                  {HERO_DATA.title}
                </h2>
              </motion.div>

              {/* Supporting Specialties (1.1s) */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-serif text-sm sm:text-base text-primary/85 mb-5 font-medium"
              >
                {HERO_DATA.specialties.map((specialty, index) => (
                  <span key={specialty} className="inline-flex items-center">
                    <span>{specialty}</span>
                    {index < HERO_DATA.specialties.length - 1 && (
                      <span className="ml-2.5 text-secondary select-none text-xs font-sans">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </motion.div>

              {/* Refined Narrative Description (1.2s) */}
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-lg mb-8 font-normal"
              >
                {HERO_DATA.description}
              </motion.p>

              {/* Action Buttons (1.4s) */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
              >
                {/* Primary CTA */}
                <motion.a
                  href={HERO_DATA.primaryCta.href}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { scale: 1.02, y: -2 }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-primary-container text-on-primary text-xs uppercase tracking-[0.16em] font-semibold rounded-full hover:bg-secondary transition-colors duration-300 shadow-md shadow-primary-container/10"
                >
                  <span>{HERO_DATA.primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-250 group-hover:translate-x-1" />
                </motion.a>

                {/* Secondary CTA */}
                <motion.a
                  href={HERO_DATA.secondaryCta.href}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { scale: 1.02, y: -2 }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-surface text-primary border border-border-subtle text-xs uppercase tracking-[0.16em] font-medium rounded-full hover:border-secondary hover:text-secondary transition-all duration-300 shadow-sm"
                >
                  <Compass className="w-4 h-4 text-secondary transform transition-transform duration-300 group-hover:rotate-45" />
                  <span>{HERO_DATA.secondaryCta.label}</span>
                </motion.a>
              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
