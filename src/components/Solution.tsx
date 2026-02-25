"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lock, Bell } from "lucide-react";

const solutions = [
  {
    icon: Search,
    title: "Détection automatique des chutes",
    description:
      "Notre IA analyse en temps réel les mouvements et détecte immédiatement toute chute ou situation anormale, sans intervention humaine.",
    gradient: "from-teal to-green",
    bg: "bg-teal/5",
    delay: 0,
  },
  {
    icon: Lock,
    title: "Traitement 100% local",
    description:
      "Aucune image n'est enregistrée ni transmise. Tout le traitement se fait directement sur l'appareil, pour une confidentialité absolue.",
    gradient: "from-navy to-teal",
    bg: "bg-navy/5",
    delay: 0.15,
  },
  {
    icon: Bell,
    title: "Alertes instantanées aux proches",
    description:
      "En cas de détection de risque, vos proches sont immédiatement alertés via l'application mobile, avec des informations claires et précises.",
    gradient: "from-orange to-yellow",
    bg: "bg-orange/5",
    delay: 0.3,
  },
];

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="solution"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background deco */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-6">
            La solution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-balance">
            Une surveillance{" "}
            <span className="gradient-text">intelligente et privée</span>
          </h2>
          <p className="mt-6 text-lg text-navy/70 leading-relaxed">
            SafeNest combine vision par ordinateur et traitement embarqué pour
            offrir une protection efficace sans compromis sur la vie privée.
          </p>
        </motion.div>

        {/* Solution cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + sol.delay }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 lg:p-10 border border-navy/5 shadow-sm hover:shadow-2xl hover:shadow-navy/8 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 ${sol.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sol.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    <sol.icon className="w-8 h-8 text-white" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-4">
                    {sol.title}
                  </h3>
                  <p className="text-navy/70 leading-relaxed">
                    {sol.description}
                  </p>
                </div>

                {/* Decorative number */}
                <div className="absolute top-6 right-6 text-7xl font-black text-navy/[0.03] select-none">
                  0{i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
