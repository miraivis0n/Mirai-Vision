// app/tarifs/page.tsx
"use client";

import { useRef } from "react";

export default function TarifsPage() {
  // Refs pour le formulaire mailto
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const nom = nameRef.current?.value.trim() ?? "";
    const email = emailRef.current?.value.trim() ?? "";
    const message = messageRef.current?.value.trim() ?? "";

    const subject = `Demande de devis${nom ? ` — ${nom}` : ""}`;
    const body = `Nom: ${nom}\nEmail: ${email}\n\nProjet:\n${message}`;
    window.location.href = `mailto:contact.miraivision@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const offers = [
    {
      tag: "À la carte",
      title: "Vidéo 8 secondes",
      desc:
        "Idéale pour les formats très courts (TikTok, Reels, Shorts). Impact rapide.",
      features: ["Tournage + montage", "Sous-titres si besoin", "Export multi-formats"],
    },
    {
      tag: "À la carte",
      title: "Vidéo 16 secondes",
      desc: "Format dynamique, parfait pour des campagnes réseaux sociaux.",
      features: ["Idéation & script léger", "Motion/design", "Export 9:16, 1:1, 16:9"],
    },
    {
      tag: "À la carte",
      title: "Vidéo 30 secondes",
      desc: "Idéal pour présenter un produit ou un service de manière percutante.",
      features: ["Accompagnement créatif", "Tournage + montage complet", "Livraison rapide"],
    },
    {
      tag: "Abonnements",
      title: "4 vidéos / mois",
      desc:
        "Rythme mensuel pour entretenir votre présence avec des contenus réguliers.",
      features: ["Calendrier éditorial", "Optimisations continues", "Rapide à déployer"],
    },
    {
      tag: "Abonnements",
      title: "8 vidéos / mois",
      desc: "Volume adapté aux marques actives sur plusieurs canaux.",
      features: ["Batch tournage", "Variantes multi-formats", "Pilotage des performances"],
    },
    {
      tag: "Abonnements",
      title: "12 vidéos / mois",
      desc: "Flux soutenu et visibilité maximale.",
      features: ["Process industrialisé", "Réunions hebdo", "Reporting simple"],
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <section className="max-w-6xl mx-auto px-6 py-14">
        {/* En-tête */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Nos offres & devis</h1>
        <p className="mt-3 text-neutral-600">
          Nous réalisons des vidéos adaptées à vos besoins : 8s, 16s, 30s ou sur mesure.
          Pas de paiement en ligne — demandez un devis personnalisé, on s’occupe du reste.
        </p>

        {/* Grille des 6 cartes — style clair comme avant */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((o, i) => (
            <article
              key={i}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <span className="inline-block text-xs font-semibold tracking-wide text-neutral-500">
                {o.tag}
              </span>
              <h3 className="mt-2 text-xl font-semibold">{o.title}</h3>
              <p className="mt-2 text-neutral-600">{o.desc}</p>

              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {o.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() =>
                  document.getElementById("devis-form")?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-6 w-full rounded-full bg-neutral-900 px-4 py-2 font-semibold text-white hover:bg-black transition"
              >
                Demander un devis
              </button>
            </article>
          ))}
        </div>

        {/* Formulaire mailto (clair aussi) */}
        <section
          id="devis-form"
          className="mt-14 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold tracking-tight">Demander un devis</h2>
          <p className="mt-2 text-neutral-600">
            Remplissez ce formulaire — nous revenons rapidement vers vous avec une proposition
            adaptée à vos besoins.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-neutral-700">
                Votre nom
              </label>
              <input
                id="name"
                ref={nameRef}
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-neutral-700">
                Votre email
              </label>
              <input
                id="email"
                ref={emailRef}
                type="email"
                required
                placeholder="jane@exemple.com"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-neutral-700">
                Expliquez votre projet
              </label>
              <textarea
                id="message"
                ref={messageRef}
                required
                rows={5}
                placeholder="Contexte, objectifs, formats souhaités, délais…"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-neutral-900 px-4 py-2 font-semibold text-white hover:bg-black transition"
            >
              Envoyer ma demande
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}
