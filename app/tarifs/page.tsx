// app/tarifs/page.tsx
"use client";

import { useRef } from "react";

export default function TarifsPage() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-16">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Nos offres & devis</h1>
        <p className="text-lg text-gray-300 mb-12">
          Nous réalisons des vidéos adaptées à vos besoins : 8s, 16s, 30s ou sur
          mesure. Plus besoin de payer directement en ligne — demandez un devis
          personnalisé, on s’occupe du reste.
        </p>

        {/* Cartes des offres */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Vidéo 8 secondes",
              desc: "Idéale pour les formats très courts (TikTok, Reels, Shorts). Impact rapide.",
              features: ["Tournage + montage", "Sous-titres si besoin", "Export multi-formats"],
            },
            {
              title: "Vidéo 16 secondes",
              desc: "Format dynamique, parfait pour des campagnes réseaux sociaux.",
              features: ["Idéation & script léger", "Motion/design", "Export 9:16, 1:1, 16:9"],
            },
            {
              title: "Vidéo 30 secondes",
              desc: "Idéal pour présenter un produit ou un service de manière percutante.",
              features: ["Accompagnement créatif", "Tournage + montage complet", "Livraison rapide"],
            },
            {
              title: "4 vidéos / mois",
              desc: "Rythme mensuel pour entretenir votre présence avec des contenus réguliers.",
              features: ["Calendrier éditorial", "Optimisations continues", "Rapide à déployer"],
            },
            {
              title: "8 vidéos / mois",
              desc: "Volume adapté aux marques actives sur plusieurs canaux.",
              features: ["Batch tournage", "Variantes multi-formats", "Pilotage des performances"],
            },
            {
              title: "12 vidéos / mois",
              desc: "Idéal pour un flux soutenu et une visibilité maximale.",
              features: ["Process industrialisé", "Réunions hebdo", "Reporting simple"],
            },
          ].map((offer, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-400 mb-4">{offer.desc}</p>
              <ul className="text-gray-300 mb-6 list-disc list-inside">
                {offer.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <button
                onClick={() => {
                  const section = document.getElementById("devis-form");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-yellow-500 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400"
              >
                Demander un devis
              </button>
            </div>
          ))}
        </div>

        {/* Formulaire devis */}
        <section id="devis-form" className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Demander un devis</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const subject = `Demande de devis de ${nameRef.current?.value}`;
              const body = `Nom: ${nameRef.current?.value}\nEmail: ${emailRef.current?.value}\n\nProjet:\n${messageRef.current?.value}`;
              window.location.href = `mailto:contact.miraivision@gmail.com?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`;
            }}
            className="space-y-4"
          >
            <input
              ref={nameRef}
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white"
              required
            />
            <input
              ref={emailRef}
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white"
              required
            />
            <textarea
              ref={messageRef}
              placeholder="Expliquez votre projet"
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400"
            >
              Envoyer ma demande
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}