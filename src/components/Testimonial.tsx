"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

export default function Testimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-teal-50/20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Card */}
          <div className="relative rounded-3xl bg-white border border-navy/5 shadow-xl shadow-navy/5 overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal via-green to-yellow" />

            <div className="p-8 sm:p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                {/* Avatar section */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Avatar placeholder with gradient */}
                    <motion.div
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl bg-gradient-to-br from-teal/20 via-green/20 to-yellow/20 flex items-center justify-center"
                    >
                      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-br from-teal/30 to-green/30 flex items-center justify-center">
                        <span className="text-4xl lg:text-5xl">👩‍🎓</span>
                      </div>
                    </motion.div>
                    {/* Floating quote icon */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-orange flex items-center justify-center shadow-lg shadow-orange/25">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Stars */}
                  <div className="flex items-center justify-center lg:justify-start gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow fill-yellow"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl font-semibold text-navy leading-snug mb-6">
                    &ldquo;Je peux enfin me concentrer sur mes études sans
                    m&apos;inquiéter pour ma grand-mère. SafeNest m&apos;envoie une
                    notification si quelque chose d&apos;anormal est détecté, et je
                    sais que sa vie privée est respectée.&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div>
                    <p className="font-bold text-navy">Camille D.</p>
                    <p className="text-sm text-navy/40">
                      Étudiante en médecine — Lyon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
