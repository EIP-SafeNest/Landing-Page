"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, Heart, AlertTriangle } from "lucide-react";

const stats = [
  {
    icon: TrendingDown,
    value: "20 000+",
    label: "décès à cause d'accidents domestiques chaque année en France",
    color: "orange",
  },
  {
    icon: Heart,
    value: "76%",
    label: "des aidants vivent avec de l'anxiété quotidienne",
    color: "teal",
  },
  {
    icon: AlertTriangle,
    value: "9/10",
    label: "des solutions existantes enregistrent des images",
    color: "yellow",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="problem"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-navy-50/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange text-sm font-semibold mb-6">
            Le constat
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-balance">
            Chaque année, des milliers d&apos;accidents domestiques{" "}
            <span className="text-orange">pourraient être évités.</span>
          </h2>
          <p className="mt-6 text-lg text-navy/70 leading-relaxed max-w-2xl mx-auto">
            Les chutes sont la première cause d&apos;accidents chez les seniors.
            Les proches vivent dans l&apos;inquiétude. Les solutions actuelles sont
            intrusives ou inefficaces.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 border border-navy/5 shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-500 hover:-translate-y-1">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    stat.color === "orange"
                      ? "bg-orange/10"
                      : stat.color === "teal"
                      ? "bg-teal/10"
                      : "bg-yellow/10"
                  }`}
                >
                  <stat.icon
                    className={`w-7 h-7 ${
                      stat.color === "orange"
                        ? "text-orange"
                        : stat.color === "teal"
                        ? "text-teal"
                        : "text-yellow-600"
                    }`}
                  />
                </div>
                <p
                  className={`text-4xl lg:text-5xl font-extrabold mb-3 ${
                    stat.color === "orange"
                      ? "text-orange"
                      : stat.color === "teal"
                      ? "text-teal"
                      : "text-yellow-600"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="text-navy/70 font-medium leading-snug">
                  {stat.label}
                </p>
                {/* Decorative gradient line at bottom */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    stat.color === "orange"
                      ? "bg-gradient-to-r from-orange/50 to-transparent"
                      : stat.color === "teal"
                      ? "bg-gradient-to-r from-teal/50 to-transparent"
                      : "bg-gradient-to-r from-yellow/50 to-transparent"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
