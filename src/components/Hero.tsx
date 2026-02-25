"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronDown,
  Smartphone,
  Bell,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal/10 to-green/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-orange/8 to-yellow/8 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 20, -15, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-green/5 to-teal/5 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium border border-teal/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
                </span>
                Protection IA — 100% locale & confidentielle
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-balance"
            >
              Protégez vos proches,{" "}
              <span className="gradient-text">en toute confidentialité.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-lg sm:text-xl text-navy/70 leading-relaxed max-w-lg"
            >
              SafeNest détecte automatiquement les chutes et les risques
              domestiques grâce à l&apos;IA,{" "}
              <strong className="text-navy/80">
                sans enregistrer ni transmettre d&apos;images.
              </strong>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#solution"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-navy text-white font-semibold text-base hover:bg-navy-600 transition-all duration-300 hover:shadow-xl hover:shadow-navy/20 hover:-translate-y-0.5"
              >
                Découvrir la solution
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-navy/15 text-navy font-semibold text-base hover:border-teal hover:text-teal transition-all duration-300 hover:-translate-y-0.5"
              >
                Demander une installation
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-sm text-navy/50">
                <ShieldCheck className="w-4 h-4 text-green" />
                <span>RGPD compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy/50">
                <ShieldCheck className="w-4 h-4 text-green" />
                <span>Made in France</span>
              </div>
            </motion.div>
          </div>

          {/* Right — Mockup illustration */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative"
          >
            {/* Main card — living room camera view */}
            <div className="relative">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-white rounded-3xl shadow-2xl shadow-navy/10 p-6 border border-navy/5"
              >
                {/* Camera view mockup */}
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-navy-50 to-teal-50 relative overflow-hidden">
                  {/* Room elements */}
                  <div className="absolute inset-0 p-6">
                    {/* Floor */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy/5 to-transparent" />
                    {/* Sofa */}
                    <div className="absolute bottom-8 left-8 w-32 h-16 bg-teal/20 rounded-xl" />
                    <div className="absolute bottom-20 left-10 w-28 h-6 bg-teal/15 rounded-lg" />
                    {/* Table */}
                    <div className="absolute bottom-8 right-12 w-20 h-12 bg-navy/10 rounded-lg" />
                    {/* Plant */}
                    <div className="absolute bottom-8 right-4 w-6 h-16 flex flex-col items-center">
                      <div className="w-10 h-10 bg-green/30 rounded-full" />
                      <div className="w-2 h-8 bg-green/20 rounded-full" />
                    </div>
                    {/* Person silhouette */}
                    <motion.div
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                      <div className="w-8 h-8 bg-navy/20 rounded-full mx-auto" />
                      <div className="w-12 h-16 bg-navy/15 rounded-xl mt-1" />
                    </motion.div>
                    {/* AI detection overlay */}
                    <motion.div
                      animate={{ opacity: [0, 0.8, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-28 border-2 border-green rounded-xl"
                    />
                    {/* Status badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
                      </span>
                      <span className="text-xs font-medium text-navy/70">
                        Surveillance active
                      </span>
                    </div>
                    {/* Camera icon */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-navy/80 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 border-2 border-white rounded-full" />
                    </div>
                  </div>
                </div>
                {/* Bottom status bar */}
                <div className="flex items-center justify-between mt-4 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green" />
                    <span className="text-xs text-navy/70 font-medium">
                      Salon — Aucun risque détecté
                    </span>
                  </div>
                  <span className="text-xs text-navy/60">
                    Traitement local uniquement
                  </span>
                </div>
              </motion.div>

              {/* Floating phone notification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-6 -left-6 z-20"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="bg-white rounded-2xl shadow-xl shadow-navy/10 p-4 border border-navy/5 w-56"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal to-green flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-navy">
                        SafeNest
                      </p>
                      <p className="text-[10px] text-navy/60">À l&apos;instant</p>
                    </div>
                  </div>
                  <div className="bg-green/10 rounded-xl p-2.5">
                    <div className="flex items-center gap-2">
                      <Bell className="w-3 h-3 text-green" />
                      <p className="text-[11px] text-navy/70 font-medium">
                        Tout va bien — Activité normale détectée
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating privacy badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute -top-4 -right-4 z-20"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-white rounded-2xl shadow-lg shadow-navy/10 p-3 border border-navy/5"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-teal" />
                    <div>
                      <p className="text-[10px] font-bold text-navy">
                        100% Local
                      </p>
                      <p className="text-[9px] text-navy/60">
                        Aucune donnée transmise
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-navy/30 font-medium">
              Découvrir
            </span>
            <ChevronDown className="w-4 h-4 text-navy/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
