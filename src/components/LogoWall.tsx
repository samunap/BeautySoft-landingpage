"use client";

import { stats } from "@/content/site";
import { useLanguage } from "@/lib/language-context";

export default function LogoWall() {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {t.logoWall.stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary-500">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Logos */}
        {/* <div className="mt-16 text-center">
          <p className="text-sm text-gray-600 mb-8">{t.logoWall.trustedBy}</p>
          <div className="flex justify-center items-center space-x-8 md:space-x-12 opacity-60">
            <div className="font-semibold text-lg text-gray-400">Fabio Curcio</div>
            <div className="font-semibold text-lg text-gray-400">Forbes</div>
            <div className="font-semibold text-lg text-gray-400">Fabrizio Vaccaro</div>
            <div className="font-semibold text-lg text-gray-400">Beauty Today</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
