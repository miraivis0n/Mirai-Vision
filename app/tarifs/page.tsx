// app/tarifs/page.tsx
import React from "react";

export default function TarifsPage() {
  return (
    <main className="relative min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* --- Fond décor soleil --- */}
      <div className="absolute inset-0 -z-10">
        {/* Halo du soleil */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-white opacity-20 blur-3xl" />

        {/* Rayons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 left-1/2 w-[2px] h-[600px] bg-white opacity-15"
            style={{
              transform: `rotate(${i * 30}deg) translateX(-50%)`,
              transformOrigin: "bottom center",
            }}
          />
        ))}

        {/* Horizon */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/80 to-transparent" />

        {/* Vignettage */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      {/* --- Contenu --- */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">Nos offres & devis</h1>
        <p className="text-gray-300 mb-12">
          Nous réalisons des vidéos adaptées à vos besoins : 8s, 16s, 30s ou sur mesure.
          Plus besoin de payer directement en ligne — demandez un devis personnalisé, 
          on s’occupe du reste.
        </p>

        {/* Grille des offres */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Carte 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Vidéo 8 secondes</h3>
            <p className="text-gray-300 mb-4">
              Idéale pour les formats très courts (TikTok, Reels, Shorts).
            </p>
            <ul className="text-gray-400 text-sm space-y-1 mb-6 list-disc list-inside">
              <li>Tournage + montage</li>
              <li>Sous-titres si besoin</li>
              <li>Export multi-formats</li>
            </ul>
            <a
              href="mailto:contact.miraivision@gmail.com?subject=Demande de devis - Vidéo 8s"
              className="block text-center bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition"
            >
              Demander un devis
            </a>
          </div>

          {/* Carte 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Vidéo 16 secondes</h3>
            <p className="text-gray-300 mb-4">
              Format dynamique, parfait pour des campagnes réseaux sociaux.
            </p>
            <ul className="text-gray-400 text-sm space-y-1 mb-6 list-disc list-inside">
              <li>Idéation & script léger</li>
              <li>Motion/étalonnage</li>
              <li>Export 9:16, 1:1, 16:9</li>
            </ul>
            <a
              href="mailto:contact.miraivision@gmail.com?subject=Demande de devis - Vidéo 16s"
              className="block text-center bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition"
            >
              Demander un devis
            </a>
          </div>

          {/* Carte 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Vidéo 30 secondes</h3>
            <p className="text-gray-300 mb-4">
              Idéal pour présenter un produit ou un service de manière impactante.
            </p>
            <ul className="text-gray-400 text-sm space-y-1 mb-6 list-disc list-inside">
              <li>Accompagnement créatif</li>
              <li>Tournage / montage complet</li>
              <li>Livraison rapide</li>
            </ul>
            <a
              href="mailto:contact.miraivision@gmail.com?subject=Demande de devis - Vidéo 30s"
              className="block text-center bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition"
            >
              Demander un devis
            </a>
          </div>

          {/* Carte 4 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">4 vidéos / mois</h3>
            <p className="text-gray-300 mb-4">
              Rythme mensuel pour entretenir votre présence avec des contenus réguliers.
            </p>
            <ul className="text-gray-400 text-sm space-y-1 mb-6 list-disc list-inside">
              <li>Calendrier éditorial</li>
              <li>Optimisations continues</li>
              <li>Rapide à déployer</li>
            </ul>
            <a
              href="mailto:contact.miraivision@gmail.com?subject=Demande de devis - Abonnement 4 vidéos/mois"
              className="block text-center bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition"
            >
              Demander un devis
            </a>
          </div>

          {/* Carte 5 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">8 vidéos / mois</h3>
            <p className="text-gray-300 mb-4">
              Volume adapté aux marques actives sur plusieurs canaux.
            </p>
            <ul className="text-gray-400 text-sm space-y-1 mb-6 list-disc list-inside">
              <li>Batch tournage</li>
              <li>Variantes multi-formats</li>
              <li>Pilotage des performances</li>
            </ul>
            <a
              href="mailto:contact.miraivision@gmail.com?subject=Demande de devis - Abonnement 8 vidéos/mois"
              className="block text-center bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition"
            >
              Demander un devis
            </a>
          </div>

          {/* Carte 6 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">12 vidéos / mois</h3>
            <p className="text-gray-300 mb-4">
              Idéal pour un flux soutenu et une visibilité maximale.
            </p>
            <ul className="text-gray-400 text-sm space-y-1 mb-6 list-disc list-inside">
              <li>Process industrialisé</li>
              <li>Réunions hebdo</li>
              <li>Reporting simple</li>
            </ul>
            <a
              href="mailto:contact.miraivision@gmail.com?subject=Demande de devis - Abonnement 12 vidéos/mois"
              className="block text-center bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}