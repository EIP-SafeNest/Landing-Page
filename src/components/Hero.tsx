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
  // Animation state: 0 = standing, 1 = falling, 2 = fallen, 3 = detected, 4 = notification sent
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Animation cycle: 12 seconds total
    const cycle = () => {
      // Phase 0: Standing (0-3s)
      setAnimationPhase(0);
      
      // Phase 1: Falling (3-4s)
      setTimeout(() => setAnimationPhase(1), 3000);
      
      // Phase 2: Fallen on ground (4-5s)
      setTimeout(() => setAnimationPhase(2), 4000);
      
      // Phase 3: Camera detects - red border (5-6s)
      setTimeout(() => setAnimationPhase(3), 5000);
      
      // Phase 4: Alert notification sent (6-10s)
      setTimeout(() => setAnimationPhase(4), 6000);
      
      // Reset cycle (10s)
      setTimeout(() => setAnimationPhase(0), 10000);
    };

    cycle();
    const interval = setInterval(cycle, 10000);
    return () => clearInterval(interval);
  }, []);

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
                    {/* Person silhouette with fall animation */}
                    <motion.div
                      animate={{
                        rotate: animationPhase >= 1 ? 90 : 0,
                        x: animationPhase >= 1 ? 20 : 0,
                        y: animationPhase >= 1 ? 30 : 0,
                      }}
                      transition={{ 
                        duration: animationPhase === 1 ? 0.8 : 0.5,
                        ease: animationPhase === 1 ? "easeIn" : "easeOut"
                      }}
                      className="absolute bottom-8 left-1/2 -translate-x-1/2"
                      style={{ transformOrigin: "bottom center" }}
                    >
                      <div className="w-8 h-8 bg-navy/20 rounded-full mx-auto" />
                      <div className="w-12 h-16 bg-navy/15 rounded-xl mt-1" />
                    </motion.div>
                    {/* AI detection overlay - changes color based on detection */}
                    <motion.div
                      animate={{ 
                        opacity: animationPhase >= 3 ? 1 : animationPhase === 0 ? [0, 0.5, 0] : 0,
                        borderColor: animationPhase >= 3 ? "#ef4444" : "#3b7255",
                        scale: animationPhase >= 3 ? [1, 1.05, 1] : 1,
                      }}
                      transition={{
                        duration: animationPhase >= 3 ? 0.3 : 3,
                        repeat: animationPhase === 0 ? Infinity : animationPhase >= 3 ? Infinity : 0,
                        repeatDelay: animationPhase === 0 ? 2 : 0.5,
                      }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-28 border-2 rounded-xl"
                      style={{ 
                        transform: animationPhase >= 2 ? "translateX(-30%) translateY(10px)" : "translateX(-50%)",
                      }}
                    />
                    {/* Alert flash when fall detected */}
                    {animationPhase >= 3 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="absolute inset-0 bg-red-500/20 rounded-2xl"
                      />
                    )}
                    {/* Status badge - changes based on detection */}
                    <div className={`absolute top-4 right-4 flex items-center gap-2 backdrop-blur-sm rounded-full px-3 py-1.5 transition-all duration-300 ${
                      animationPhase >= 3 ? "bg-red-50/95" : "bg-white/90"
                    }`}>
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          animationPhase >= 3 ? "bg-red-500" : "bg-green"
                        }`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${
                          animationPhase >= 3 ? "bg-red-500" : "bg-green"
                        }`}></span>
                      </span>
                      <span className={`text-xs font-medium ${
                        animationPhase >= 3 ? "text-red-600" : "text-navy/70"
                      }`}>
                        {animationPhase >= 3 ? "⚠️ Chute détectée !" : "Surveillance active"}
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
                    <motion.div 
                      animate={{ 
                        backgroundColor: animationPhase >= 3 ? "#ef4444" : "#3b7255" 
                      }}
                      className="w-2 h-2 rounded-full"
                    />
                    <span className={`text-xs font-medium transition-colors duration-300 ${
                      animationPhase >= 3 ? "text-red-600" : "text-navy/70"
                    }`}>
                      {animationPhase >= 3 ? "Salon — ALERTE CHUTE" : "Salon — Aucun risque détecté"}
                    </span>
                  </div>
                  <span className="text-xs text-navy/60">
                    Traitement local uniquement
                  </span>
                </div>
              </motion.div>

              {/* Floating phone notification - changes based on alert */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: animationPhase === 4 ? [1, 1.05, 1] : 1,
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: animationPhase === 4 ? 0 : 1.2,
                  scale: { duration: 0.3, repeat: animationPhase === 4 ? 3 : 0 }
                }}
                className="absolute -bottom-6 -left-6 z-20"
              >
                <motion.div
                  animate={{ 
                    y: animationPhase === 4 ? 0 : [0, -5, 0],
                    x: animationPhase === 4 ? [0, -3, 3, -3, 3, 0] : 0,
                  }}
                  transition={{
                    duration: animationPhase === 4 ? 0.5 : 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: animationPhase === 4 ? 0 : 1,
                  }}
                  className={`rounded-2xl shadow-xl p-4 border w-56 transition-all duration-300 ${
                    animationPhase >= 4 
                      ? "bg-red-50 border-red-200 shadow-red-500/20" 
                      : "bg-white border-navy/5 shadow-navy/10"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      animationPhase >= 4 
                        ? "bg-gradient-to-br from-red-500 to-red-600" 
                        : "bg-gradient-to-br from-teal to-green"
                    }`}>
                      {animationPhase >= 4 ? (
                        <AlertTriangle className="w-4 h-4 text-white" />
                      ) : (
                        <Smartphone className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div>
                      <p className={`text-xs font-semibold ${
                        animationPhase >= 4 ? "text-red-600" : "text-navy"
                      }`}>
                        SafeNest
                      </p>
                      <p className={`text-[10px] ${
                        animationPhase >= 4 ? "text-red-500" : "text-navy/60"
                      }`}>
                        {animationPhase >= 4 ? "🔴 URGENT" : "À l'instant"}
                      </p>
                    </div>
                  </div>
                  <div className={`rounded-xl p-2.5 transition-all duration-300 ${
                    animationPhase >= 4 ? "bg-red-100" : "bg-green/10"
                  }`}>
                    <div className="flex items-center gap-2">
                      {animationPhase >= 4 ? (
                        <AlertTriangle className="w-3 h-3 text-red-600" />
                      ) : (
                        <Bell className="w-3 h-3 text-green" />
                      )}
                      <p className={`text-[11px] font-medium ${
                        animationPhase >= 4 ? "text-red-700" : "text-navy/70"
                      }`}>
                        {animationPhase >= 4 
                          ? "⚠️ Chute détectée — Salon" 
                          : "Tout va bien — Activité normale détectée"}
                      </p>
                    </div>
                  </div>
                  {animationPhase >= 4 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 flex gap-2"
                    >
                      <button className="flex-1 text-[10px] font-semibold bg-red-600 text-white rounded-lg py-1.5">
                        Appeler
                      </button>
                      <button className="flex-1 text-[10px] font-semibold bg-white text-red-600 border border-red-200 rounded-lg py-1.5">
                        Voir caméra
                      </button>
                    </motion.div>
                  )}
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
