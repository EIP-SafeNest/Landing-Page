"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Essentielle",
    price: "59,99",
    period: "/mois",
    description: "L'essentiel pour commencer à protéger vos proches.",
    features: [
      "Kit caméra SafeNest inclus",
      "Détection des chutes en temps réel",
      "Alertes instantanées sur mobile",
      "Traitement 100% local",
      "Support technique par email",
    ],
    cta: "Choisir cette offre",
    popular: false,
    gradient: "from-teal to-teal-600",
  },
  {
    name: "Premium",
    price: "15",
    period: "/mois",
    priceSuffix: "+ caméra",
    description: "Une protection complète et multi-risques pour toute sérénité.",
    features: [
      "Tout de l'offre Essentielle",
      "Détection de risques multiples",
      "Alertes avancées & personnalisables",
      "Recommandations préventives",
      "Installation par un technicien SAV",
      "Support prioritaire 7j/7",
    ],
    cta: "Choisir cette offre",
    popular: true,
    gradient: "from-orange to-yellow",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/20 to-white" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-sm font-semibold mb-6">
            Tarifs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-balance">
            Des offres{" "}
            <span className="gradient-text">simples et transparentes</span>
          </h2>
          <p className="mt-6 text-lg text-navy/50 leading-relaxed">
            Choisissez la formule adaptée à vos besoins. Sans engagement, sans
            surprise.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="relative"
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange to-yellow text-white text-xs font-bold shadow-lg shadow-orange/25">
                    <Sparkles className="w-3.5 h-3.5" />
                    Recommandé
                  </div>
                </div>
              )}

              <div
                className={`relative h-full rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 ${
                  plan.popular
                    ? "bg-navy text-white shadow-2xl shadow-navy/20 border-2 border-teal/30"
                    : "bg-white border border-navy/10 shadow-sm hover:shadow-xl hover:shadow-navy/5"
                }`}
              >
                {/* Plan name */}
                <h3
                  className={`text-lg font-bold mb-2 ${
                    plan.popular ? "text-white" : "text-navy"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.popular ? "text-white/50" : "text-navy/50"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span
                    className={`text-5xl font-extrabold ${
                      plan.popular ? "text-white" : "text-navy"
                    }`}
                  >
                    {plan.price}€
                  </span>
                  <span
                    className={`text-base font-medium ${
                      plan.popular ? "text-white/50" : "text-navy/40"
                    }`}
                  >
                    {plan.period}
                  </span>
                  {plan.priceSuffix && (
                    <span
                      className={`ml-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                        plan.popular
                          ? "bg-white/10 text-white/60"
                          : "bg-navy/5 text-navy/40"
                      }`}
                    >
                      {plan.priceSuffix}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular
                            ? "bg-teal/20"
                            : "bg-green/10"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.popular ? "text-teal-300" : "text-green"
                          }`}
                          strokeWidth={3}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-white/70" : "text-navy/60"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className={`group w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange to-yellow text-white shadow-lg shadow-orange/25 hover:shadow-xl hover:shadow-orange/30"
                      : "bg-navy text-white hover:bg-navy-600 hover:shadow-lg hover:shadow-navy/20"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-navy/40 mt-10"
        >
          Sans engagement · Annulation à tout moment · Satisfait ou remboursé 30
          jours
        </motion.p>
      </div>
    </section>
  );
}
