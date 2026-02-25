"use client";

import { Shield, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  Produit: ["Fonctionnalités", "Tarifs", "FAQ", "Roadmap"],
  Entreprise: ["À propos", "Blog", "Carrières", "Presse"],
  Légal: [
    "Mentions légales",
    "Politique de confidentialité",
    "CGV",
    "Cookies",
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-navy text-white">
      {/* CTA Band */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-green/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            Prêt à protéger vos proches ?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Rejoignez les familles qui font confiance à SafeNest pour veiller
            sur leurs aînés, en toute sérénité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-orange to-yellow text-white font-bold hover:shadow-xl hover:shadow-orange/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Commencer maintenant
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal to-green flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold">
                  Safe<span className="text-teal-300">Nest</span>
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
                Protection intelligente du domicile par IA embarquée.
                Confidentialité garantie, sérénité assurée.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Mail className="w-4 h-4" />
                  <span>contact@safenest.fr</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Phone className="w-4 h-4" />
                  <span>01 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <MapPin className="w-4 h-4" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-white mb-4">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 SafeNest. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/30">
              Fait avec ❤️ en France
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
