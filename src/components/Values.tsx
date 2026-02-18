"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Lightbulb, Wrench, Heart } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Confidentialité absolue",
    description:
      "Aucune image n'est jamais stockée, transmise ou accessible. Vos données restent chez vous, point final.",
    color: "navy",
  },
  {
    icon: Lightbulb,
    title: "Innovation responsable",
    description:
      "Nous développons une IA éthique, transparente et conçue pour servir les personnes, pas les exploiter.",
    color: "teal",
  },
  {
    icon: Wrench,
    title: "Installation par SAV",
    description:
      "Un technicien certifié installe et configure SafeNest chez vous. Aucune compétence technique requise.",
    color: "orange",
  },
  {
    icon: Heart,
    title: "Sérénité pour les familles",
    description:
      "Offrez à vos proches une protection discrète et rassurante, pour vivre sereinement au quotidien.",
    color: "green",
  },
];

export default function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="values" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-teal-200 text-sm font-semibold mb-6">
            Nos valeurs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white text-balance">
            Pourquoi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-green-300">
              SafeNest
            </span>{" "}
            ?
          </h2>
          <p className="mt-6 text-lg text-white/50 leading-relaxed">
            Quatre piliers qui guident chacune de nos décisions, du
            développement à l&apos;installation.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group"
            >
              <div className="relative h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-7 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    value.color === "navy"
                      ? "bg-teal/20"
                      : value.color === "teal"
                      ? "bg-teal/20"
                      : value.color === "orange"
                      ? "bg-orange/20"
                      : "bg-green/20"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon
                    className={`w-6 h-6 ${
                      value.color === "navy"
                        ? "text-teal-300"
                        : value.color === "teal"
                        ? "text-teal-300"
                        : value.color === "orange"
                        ? "text-orange-300"
                        : "text-green-300"
                    }`}
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
