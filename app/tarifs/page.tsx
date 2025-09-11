"use client";

import { FormEvent, useState } from "react";

type Offer = {
  id: string;
  group: "A la carte" | "Abonnements";
  title: string;
  description: string;
  bullets?: string[];
};

const OFFERS: Offer[] = [
  {
    id: "v8",
    group: "A la carte",
    title: "Vidéo 8 secondes",
    description:
      "Idéale pour les formats très courts (TikTok, Reels, Shorts). Impact rapide.",
    bullets: ["Tournage + montage", "Sous-titres si besoin", "Export multi-formats"]
  },
  {
    id: "v16",
    group: "A la carte",
    title: "Vidéo 16 secondes",
    description:
      "Format dynamique, parfait pour les campagnes réseaux sociaux.",
    bullets: ["Idéation & script léger", "Motion/étalonnage", "Export 9:16, 1:1, 16:9"]
  },
  {
    id: "v30",
    group: "A la carte",
    title: "Vidéo 30 secondes",
    description:
      "Idéal pour présenter un produit ou un service de manière impactante.",
    bullets: ["Accompagnement créatif", "Tournage / montage complet", "Livraison rapide"]
  },
  {
    id: "ab4",
    group: "Abonnements",
    title: "4 vidéos / mois",
    description:
      "Rythme mensuel pour entretenir votre présence avec des contenus réguliers.",
    bullets: ["Calendrier éditorial", "Optimisations continues", "Rapide à déployer"]
  },
  {
    id: "ab8",
    group: "Abonnements",
    title: "8 vidéos / mois",
    description:
      "Volume adapté aux marques actives sur plusieurs canaux.",
    bullets: ["Batch tournage", "Variantes multi-formats", "Pilotage des performances"]
  },
  {
    id: "ab12",
    group: "Abonnements",
    title: "12 vidéos / mois",
    description:
      "Idéal pour un flux soutenu et une visibilité maximale.",
    bullets: ["Process industrialisé", "Itérations hebdo", "Reporting simple"]
  }
];

export default function TarifsPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<string>("");

  const openForm = (offerTitle: string) => {
    setSelectedOffer(offerTitle);
    setShowForm(true);
    // Scroll vers le formulaire
    setTimeout(() => {
      document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const submitByMail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nom = String(fd.get("nom") || "");
    const email = String(fd.get("email") || "");
    const offre = String(fd.get("offre") || "");
    const projet = String(fd.get("projet") || "");

    const subject = encodeURIComponent(`Demande de devis – ${offre}`);
    const body = encodeURIComponent(
      `Nom : ${nom}\nEmail : ${email}\nOffre : ${offre}\n\nProjet :\n${projet}`
    );

    window.location.href = `mailto:contact.miraivision@gmail.com?subject=${subject}&body=${body}`;
  };

  const Card = ({ offer }: { offer: Offer }) => (
    <div className="group relative overflow-hidden rounded-2xl border bg-white/80 shadow-sm transition hover:shadow-md">
      <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-yellow-200/40 to-transparent blur-2xl pointer-events-none" aria-hidden />
      <div className="p-6">
        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {offer.group}
        </span>
        <h3 className="mt-3 text-lg font-semibold">{offer.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{offer.description}</p>
        {offer.bullets && (
          <ul className="mt-4 space-y-1 text-sm text-gray-700">
            {offer.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-500" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          onClick={() => openForm(offer.title)}
          className="mt-6 w-full rounded-xl bg-yellow-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Demander un devis
        </button>
      </div>
    </div>
  );

  const Hero = () => (
    <header className="mx-auto max-w-6xl px-4 pt-16 pb-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Nos offres & devis
      </h1>
      <p className="mt-3 max-w-3xl text-gray-600">
        Nous réalisons des vidéos adaptées à vos besoins : 8s, 16s, 30s ou sur
        mesure. Plus besoin de payer en ligne — vous demandez un <b>devis personnalisé</b>
        , on s’occupe du reste.
      </p>
    </header>
  );

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Décor “lever de soleil” en arrière-plan */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 80%, rgba(253,224,71,0.35) 0%, rgba(253,224,71,0.15) 40%, rgba(255,255,255,0) 70%)," + // soleil
            "conic-gradient(from 180deg at 50% 85%, rgba(253,224,71,0.18), rgba(255,255,255,0) 25%)", // quelques rayons
        }}
      />

      <Hero />

      <section className="mx-auto max-w-6xl px-4 pb-8">
        {/* Grille des 6 cartes */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERS.map((offer) => (
            <Card key={offer.id} offer={offer} />
          ))}
        </div>
      </section>

      {/* Formulaire de devis (affiché après clic) */}
      {showForm && (
        <section id="devis" className="mx-auto max-w-3xl px-4 pb-20">
          <div className="mt-10 rounded-2xl border bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-2xl font-bold">Demander un devis</h2>
            <p className="mt-2 text-sm text-gray-600">
              Remplissez ce formulaire — nous revenons vers vous rapidement avec
              une proposition adaptée.
            </p>

            <form onSubmit={submitByMail} className="mt-6 space-y-4">
              <div>
                <label htmlFor="offre" className="text-sm font-medium">
                  Offre choisie
                </label>
                <input
                  id="offre"
                  name="offre"
                  defaultValue={selectedOffer}
                  required
                  className="mt-1 w-full rounded-lg border px-3 py-2"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nom" className="text-sm font-medium">
                    Votre nom
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    autoComplete="name"
                    required
                    className="mt-1 w-full rounded-lg border px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Votre email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1 w-full rounded-lg border px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projet" className="text-sm font-medium">
                  Expliquez votre projet
                </label>
                <textarea
                  id="projet"
                  name="projet"
                  rows={5}
                  placeholder="Objectif, cible, style souhaité, deadline…"
                  required
                  className="mt-1 w-full rounded-lg border px-3 py-2"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Envoyer la demande
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-sm font-medium text-gray-600 underline-offset-2 hover:underline"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </main>
  );
}