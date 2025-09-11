// app/tarifs/page.tsx
"use client";

import { useRef } from "react";

/* ========= DECORS DISCRETS (noir & blanc) ========= */
type DecorVariant = "dots" | "stripes" | "grid" | "noise";

function BackgroundDecor({ variant = "dots" }: { variant?: DecorVariant }) {
  if (variant === "dots") {
    // grille de points + vignette
    return (
      <>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            backgroundColor: "#0a0a0a",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1000px 600px at 50% 120%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(800px 500px at -10% -10%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(900px 520px at 110% -10%, rgba(255,255,255,0.06), transparent 55%)",
          }}
        />
      </>
    );
  }

  if (variant === "stripes") {
    // fines bandes diagonales
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.10) 0 2px, transparent 2px 10px)",
          backgroundColor: "#0a0a0a",
        }}
      />
    );
  }

  if (variant === "grid") {
    // quadrillage discret
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px, 28px 28px",
          backgroundColor: "#0a0a0a",
        }}
      />
    );
  }

  // noise (grain fin)
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] mix-blend-screen"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90' viewBox='0 0 90 90'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundColor: "#0a0a0a",
      }}
    />
  );
}
/* ================================================== */

export default function TarifsPage() {
  // Refs typées pour le mailto
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const nom = nameRef.current?.value?.trim() ?? "";
    const email = emailRef.current?.value?.trim() ?? "";
    const message = messageRef.current?.value?.trim() ?? "";

    const subject = `Demande de devis${nom ? ` — ${nom}` : ""}`;
    const body = `Nom: ${nom}\nEmail: ${email}\n\nProjet:\n${message}`;
    const href = `mailto:contact.miraivision@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  // Cartes (sans prix)
  const offers = [
    {
      badge: "À la carte",
      title: "Vidéo 8 secondes",
      desc:
        "Idéale pour les formats très courts (TikTok, Reels, Shorts). Impact rapide.",
      features: ["Tournage + montage", "Sous-titres si besoin", "Export multi-formats"],
    },
    {
      badge: "À la carte",
      title: "Vidéo 16 secondes",
      desc: "Format dynamique, parfait pour des campagnes réseaux sociaux.",
      features: ["Idéation & script léger", "Motion/design", "Export 9:16, 1:1, 16:9"],
    },
    {
      badge: "À la carte",
      title: "Vidéo 30 secondes",
      desc: "Idéal pour présenter un produit ou un service de manière percutante.",
      features: ["Accompagnement créatif", "Tournage + montage complet", "Livraison rapide"],
    },
    {
      badge: "Abonnements",
      title: "4 vidéos / mois",
      desc:
        "Rythme mensuel pour entretenir votre présence avec des contenus réguliers.",
      features: ["Calendrier éditorial", "Optimisations continues", "Rapide à déployer"],
    },
    {
      badge: "Abonnements",
      title: "8 vidéos / mois",
      desc: "Volume adapté aux marques actives sur plusieurs canaux.",
      features: ["Batch tournage", "Variantes multi-formats", "Pilotage des performances"],
    },
    {
      badge: "Abonnements",
      title: "12 vidéos / mois",
      desc: "Idéal pour un flux soutenu et une visibilité maximale.",
      features: ["Process industrialisé", "Réunions hebdo", "Reporting simple"],
    },
  ];

  return (
    <main className="relative min-h-screen bg-neutral-950 text-neutral-100">
      {/* Choisis ici le décor : "dots" | "stripes" | "grid" | "noise" */}
      <BackgroundDecor variant="dots" />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Nos offres & devis</h1>
        <p className="mt-4 text-neutral-300">
          Nous réalisons des vidéos adaptées à vos besoins : 8s, 16s, 30s ou sur mesure.
          Plus besoin de payer directement en ligne — demandez un devis personnalisé,
          on s’occupe du reste.
        </p>

        {/* Grille des 6 cartes */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <article
              key={i}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-[2px]"
            >
              <span className="inline-block text-xs font-semibold tracking-wide text-neutral-400">
                {offer.badge}
              </span>
              <h3 className="mt-2 text-xl font-semibold">{offer.title}</h3>
              <p className="mt-2 text-neutral-300">{offer.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                {offer.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-500/70" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                aria-label={`Demander un devis pour : ${offer.title}`}
                onClick={() =>
                  document.getElementById("devis-form")?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-6 w-full rounded-lg border border-neutral-700 bg-neutral-100 text-neutral-900 py-2 font-semibold hover:bg-white transition"
              >
                Demander un devis
              </button>
            </article>
          ))}
        </div>

        {/* Formulaire mailto */}
        <section
          id="devis-form"
          className="mt-14 rounded-2xl border border-neutral-800 bg-neutral-900/80 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-[2px]"
        >
          <h2 className="text-2xl font-bold tracking-tight">Demander un devis</h2>
          <p className="mt-2 text-neutral-300">
            Remplissez ce formulaire — nous revenons rapidement vers vous avec une proposition
            adaptée à vos besoins.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-neutral-300">
                Votre nom
              </label>
              <input
                id="name"
                ref={nameRef}
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400/40"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-neutral-300">
                Votre email
              </label>
              <input
                id="email"
                ref={emailRef}
                type="email"
                required
                placeholder="jane@exemple.com"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400/40"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-neutral-300">
                Expliquez votre projet
              </label>
              <textarea
                id="message"
                ref={messageRef}
                required
                rows={5}
                placeholder="Contexte, objectifs, formats souhaités, délais…"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400/40"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-100 text-neutral-900 py-2 font-semibold hover:bg-white transition"
            >
              Envoyer ma demande
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}