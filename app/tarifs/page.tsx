// app/tarifs/page.tsx
"use client";

import Link from "next/link";
import { useRef, useState } from "react";

type Offer = {
  id: string;
  title: string;
  price: string;
  description: string;
  details: string[];
  group: "video" | "abo";
};

const OFFERS: Offer[] = [
  {
    id: "video-8s",
    title: "Vidéo 8 secondes",
    price: "À partir de 150€",
    description:
      "Format ultra-court et percutant pour TikTok, Reels, Shorts.",
    details: ["Script léger", "Montage rapide", "Export 9:16"],
    group: "video",
  },
  {
    id: "video-16s",
    title: "Vidéo 16 secondes",
    price: "À partir de 250€",
    description:
      "Format dynamique pour vos campagnes social media.",
    details: ["1–2 allers-retours", "Habillage simple", "Export multi-formats"],
    group: "video",
  },
  {
    id: "video-30s",
    title: "Vidéo 30 secondes",
    price: "À partir de 400€",
    description:
      "Idéal pour présenter un produit ou un service.",
    details: ["2 allers-retours", "Sous-titres possibles", "Export 1:1 • 16:9 • 9:16"],
    group: "video",
  },
  {
    id: "abo-6",
    title: "Abonnement 6 vidéos / mois",
    price: "Sur devis",
    description:
      "Rythme léger mais constant pour rester visible.",
    details: ["Calendrier éditorial", "Templates de marque", "Optimisation contenus"],
    group: "abo",
  },
  {
    id: "abo-15",
    title: "Abonnement 15 vidéos / mois",
    price: "Sur devis",
    description:
      "Production soutenue pour accélérer votre acquisition.",
    details: ["Priorité prod", "Variations par canal", "Reporting mensuel"],
    group: "abo",
  },
  {
    id: "abo-custom",
    title: "Abonnement sur mesure",
    price: "Sur devis",
    description:
      "Mensuel custom : volume, formats, tournage, motion…",
    details: ["Cadrage objectif", "Roadmap contenu", "Pilotage & mesure"],
    group: "abo",
  },
];

export default function TarifsPage() {
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  const handleAskQuote = (offerId: string) => {
    setSelectedOffer(offerId);
    // scroll doux vers le formulaire
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const offerLabel =
    OFFERS.find((o) => o.id === selectedOffer)?.title ?? "—";

  // Soumission: on construit un mailto avec sujet + corps
  const onSubmit = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const nom = (data.get("Nom") as string) || "";
    const email = (data.get("Email") as string) || "";
    const message = (data.get("Message") as string) || "";
    const offre = offerLabel;

    const subject = encodeURIComponent(`Demande de devis — ${offre}`);
    const body = encodeURIComponent(
      `Offre souhaitée : ${offre}\nNom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`
    );

    window.location.href = `mailto:contact.miraivision@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            Mirai Vision
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/accueil" className="hover:opacity-80">
              Accueil
            </Link>
            <Link href="/tarifs" className="hover:opacity-80 font-medium">
              Tarifs
            </Link>
            <a
              href="#devis"
              className="rounded-md border px-3 py-1.5 hover:bg-gray-50"
              onClick={(e) => {
                e.preventDefault();
                formRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Demander un devis
            </a>
          </nav>
        </div>
      </header>

      {/* Intro + ce qu'on fait (garde l’esprit de l’ancienne page) */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Nos offres & devis</h1>
        <p className="text-lg text-gray-700">
          De l’idée à la livraison : cadrage du besoin, scripting, tournage ou
          montage, motion/étalonnage, puis exports multi-formats adaptés à vos
          canaux (9:16, 1:1, 16:9). Livraison rapide, process simple, mesures
          de résultats. Sélectionnez une offre ci-dessous et demandez votre
          devis en 1 clic.
        </p>
      </section>

      {/* Offres à la vidéo */}
      <section className="mx-auto max-w-6xl px-6 py-4">
        <h2 className="text-2xl font-semibold mb-6">À la vidéo</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERS.filter((o) => o.group === "video").map((o) => (
            <article
              key={o.id}
              className="rounded-xl border p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{o.title}</h3>
              <p className="text-gray-600 mt-2">{o.description}</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-700 list-disc pl-5">
                {o.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <div className="mt-4 text-sm font-medium">{o.price}</div>
              <button
                className="mt-6 w-full rounded-md bg-black text-white py-2.5 hover:bg-gray-800"
                onClick={() => handleAskQuote(o.id)}
              >
                Demander un devis
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Abonnements */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl font-semibold mb-6">Abonnements mensuels</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERS.filter((o) => o.group === "abo").map((o) => (
            <article
              key={o.id}
              className="rounded-xl border p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{o.title}</h3>
              <p className="text-gray-600 mt-2">{o.description}</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-700 list-disc pl-5">
                {o.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <div className="mt-4 text-sm font-medium">{o.price}</div>
              <button
                className="mt-6 w-full rounded-md bg-black text-white py-2.5 hover:bg-gray-800"
                onClick={() => handleAskQuote(o.id)}
              >
                Demander un devis
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Formulaire devis */}
      <section
        id="devis"
        ref={formRef}
        className="mx-auto max-w-6xl px-6 py-14"
      >
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Demander un devis</h2>
          <p className="text-gray-700 mb-6">
            Offre sélectionnée :{" "}
            <span className="font-medium">{offerLabel}</span>
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(e.currentTarget);
            }}
            className="grid gap-4"
          >
            <input
              type="text"
              name="Nom"
              placeholder="Votre nom"
              required
              className="border p-3 rounded-lg"
            />
            <input
              type="email"
              name="Email"
              placeholder="Votre email"
              required
              className="border p-3 rounded-lg"
            />
            <textarea
              name="Message"
              placeholder="Expliquez votre projet (objectifs, formats, délais, budget indicatif)…"
              rows={5}
              required
              className="border p-3 rounded-lg"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Envoyer ma demande par email
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            L’envoi ouvre votre application email avec le récapitulatif prêt à être envoyé à{" "}
            <a
              href="mailto:contact.miraivision@gmail.com"
              className="underline"
            >
              contact.miraivision@gmail.com
            </a>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="mx-auto max-w-6xl px-6 py-6 flex justify-between text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Mirai Vision. Tous droits réservés.</span>
          <div className="flex gap-4">
            <Link href="/mentions">Mentions légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}