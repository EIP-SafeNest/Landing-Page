"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Wind, Brain, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Détection de plaques de cuisson oubliées",
    description:
      "L'IA identifie les plaques de cuisson restées allumées trop longtemps et vous alerte avant tout danger.",
    tag: "Bientôt",
    color: "orange",
  },
  {
    icon: Wind,
    title: "Détection d'étouffement",
    description:
      "Grâce à l'analyse sonore et visuelle, SafeNest peut détecter les signes d'étouffement et déclencher une alerte d'urgence.",
    tag: "En développement",
    color: "teal",
  },
  {
    icon: Brain,
    title: "Recommandations préventives personnalisées",
    description:
      "Des conseils adaptés basés sur les habitudes détectées pour prévenir les risques avant qu'ils ne surviennent.",
    tag: "Roadmap",
    color: "green",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-navy-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green/10 text-green-700 text-sm font-semibold mb-6">
            Évolutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-balance">
            Une protection qui{" "}
            <span className="text-green-700">évolue</span>
          </h2>
          <p className="mt-6 text-lg text-navy/50 leading-relaxed">
            SafeNest s&apos;améliore en continu pour couvrir toujours plus de
            risques domestiques, sans jamais compromettre votre vie privée.
          </p>
        </motion.div>

        {/* Feature cards - horizontal layout */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group"
            >
              <div className="relative h-full rounded-3xl bg-white border border-navy/5 p-8 hover:shadow-xl hover:shadow-navy/5 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                {/* Tag */}
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-6 ${
                    feature.color === "orange"
                      ? "bg-orange/10 text-orange"
                      : feature.color === "teal"
                      ? "bg-teal/10 text-teal"
                      : "bg-green/10 text-green-700"
                  }`}
                >
                  {feature.tag}
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 ${
                    feature.color === "orange"
                      ? "bg-orange/10"
                      : feature.color === "teal"
                      ? "bg-teal/10"
                      : "bg-green/10"
                  }`}
                >
                  <feature.icon
                    className={`w-7 h-7 ${
                      feature.color === "orange"
                        ? "text-orange"
                        : feature.color === "teal"
                        ? "text-teal"
                        : "text-green"
                    }`}
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="text-lg font-bold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-navy/50 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Learn more link */}
                <div className="flex items-center gap-1 text-sm font-semibold text-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Background decoration */}
                <div
                  className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                    feature.color === "orange"
                      ? "bg-orange"
                      : feature.color === "teal"
                      ? "bg-teal"
                      : "bg-green"
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
