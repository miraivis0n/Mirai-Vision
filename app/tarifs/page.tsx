"use client";

import { useMemo, useRef, useState } from "react";

type Offer = {
  id: string;
  badge: "À la carte" | "Abonnements";
  title: string;
  bullets: string[];
};

const A_LA_CARTE: Offer[] = [
  {
    id: "8s",
    badge: "À la carte",
    title: "Vidéo 8 secondes",
    bullets: [
      "Idéale pour formats très courts (TikTok, Reels, Shorts).",
      "Tournage + montage",
      "Sous-titres si besoin",
      "Export multi-formats",
    ],
  },
  {
    id: "16s",
    badge: "À la carte",
    title: "Vidéo 16 secondes",
    bullets: [
      "Format dynamique pour campagnes réseaux sociaux.",
      "Idéation & script léger",
      "Motion/étalonnage",
      "Export 9:16, 1:1, 16:9",
    ],
  },
  {
    id: "30s",
    badge: "À la carte",
    title: "Vidéo 30 secondes",
    bullets: [
      "Parfaite pour présenter un produit ou un service.",
      "Accompagnement créatif",
      "Tournage / montage complet",
      "Livraison rapide",
    ],
  },
];

const ABOS: Offer[] = [
  {
    id: "4mois",
    badge: "Abonnements",
    title: "4 vidéos / mois",
    bullets: [
      "Rythme mensuel pour entretenir votre présence.",
      "Calendrier éditorial",
      "Optimisations continues",
      "Rapide à déployer",
    ],
  },
  {
    id: "8mois",
    badge: "Abonnements",
    title: "8 vidéos / mois",
    bullets: [
      "Volume adapté aux marques actives sur plusieurs canaux.",
      "Batch tournage",
      "Variantes multi-formats",
      "Pilotage des performances",
    ],
  },
  {
    id: "12mois",
    badge: "Abonnements",
    title: "12 vidéos / mois",
    bullets: [
      "Flux soutenu et visibilité maximale.",
      "Process industrialisé",
      "Réunions hebdo",
      "Reporting simple",
    ],
  },
];

export default function TarifsPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Offer | null>(null);

  // pour un sujet d’email propre
  const mailSubject = useMemo(
    () =>
      selected
        ? encodeURIComponent(`[Devis] ${selected.title} – Mirai Vision`)
        : encodeURIComponent(`[Devis] Mirai Vision`),
    [selected]
  );

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const onAskQuote = (offer: Offer) => {
    setSelected(offer);
    setOpen(true);
  };

  const submitMailto = () => {
    const name = nameRef.current?.value?.trim() || "";
    const email = emailRef.current?.value?.trim() || "";
    const msg = msgRef.current?.value?.trim() || "";
    const lines = [
      `Offre: ${selected?.title || "—"}`,
      `Nom: ${name}`,
      `Email: ${email}`,
      "",
      msg || "Expliquez votre besoin ici…",
    ];
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:contact.miraivision@gmail.com?subject=${mailSubject}&body=${body}`;
  };

  return (
    <main className="relative min-h-screen bg-neutral-950 text-neutral-100">
      {/* Arrière-plan radial discret */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          // dégradé radial sombre, très léger
          background:
            "radial-gradient(1200px 600px at 50% 0%, rgba(255,255,255,0.05), rgba(0,0,0,0) 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold">Nos offres &amp; devis</h1>
          <p className="mt-2 max-w-3xl text-sm text-neutral-300">
            Nous réalisons des vidéos adaptées à vos besoins : 8s, 16s, 30s ou
            sur mesure. Plus besoin de payer en ligne —{" "}
            <span className="font-medium">demandez un devis</span>, on s’occupe
            du reste.
          </p>
        </header>

        {/* 3 cartes “à la carte” */}
        <SectionGrid title="">
          {A_LA_CARTE.map((offer) => (
            <OfferCard key={offer.id} offer={offer} onAsk={() => onAskQuote(offer)} />
          ))}
        </SectionGrid>

        {/* 3 cartes “abonnements” */}
        <SectionGrid title="">
          {ABOS.map((offer) => (
            <OfferCard key={offer.id} offer={offer} onAsk={() => onAskQuote(offer)} />
          ))}
        </SectionGrid>

        {/* Modal “Demander un devis” */}
        {open && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* backdrop */}
            <button
              aria-label="Fermer"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/60"
            />
            {/* panel */}
            <div className="relative z-10 w-full max-w-lg rounded-2xl bg-neutral-900 p-6 shadow-2xl ring-1 ring-white/10">
              <h2 className="text-lg font-semibold">
                Demander un devis {selected ? `– ${selected.title}` : ""}
              </h2>
              <p className="mt-1 text-sm text-neutral-300">
                Remplis ces infos, on te répond vite avec une proposition
                adaptée.
              </p>

              <div className="mt-5 space-y-4">
                <Input ref={nameRef} label="Votre nom" placeholder="Jane Doe" />
                <Input
                  ref={emailRef}
                  label="Votre email"
                  type="email"
                  placeholder="vous@exemple.com"
                />
                <Textarea
                  ref={msgRef}
                  label="Expliquez votre projet"
                  placeholder="Pitch, objectifs, formats souhaités, délais…"
                  rows={5}
                />
              </div>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-white/15 px-4 py-2 text-sm hover:bg-white/5"
                >
                  Annuler
                </button>
                <button
                  onClick={submitMailto}
                  className="rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-300"
                >
                  Envoyer la demande
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer simple */}
        <footer className="mt-16 border-t border-white/10 py-8 text-sm text-neutral-400">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
            <span>© {new Date().getFullYear()} Mirai Vision. Tous droits réservés.</span>
            <div className="flex gap-6">
              <a className="hover:underline" href="/mentions">
                Mentions légales
              </a>
              <a className="hover:underline" href="/confidentialite">
                Confidentialité
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* ---------- UI Components ---------- */

function SectionGrid({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      {title ? (
        <h2 className="mb-4 text-lg font-medium text-neutral-200">{title}</h2>
      ) : null}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </section>
  );
}

function OfferCard({
  offer,
  onAsk,
}: {
  offer: Offer;
  onAsk: () => void;
}) {
  return (
    <div className="group relative rounded-2xl bg-neutral-900/60 p-5 shadow-md ring-1 ring-white/10 transition hover:bg-neutral-900">
      {/* halo doux sous la carte */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
           style={{ background: "radial-gradient(400px 120px at 50% 110%, rgba(255,255,255,0.08), rgba(0,0,0,0))" }} />

      <span className="mb-3 inline-flex items-center rounded-full border border-white/15 px-2 py-0.5 text-[11px] font-medium text-neutral-300">
        {offer.badge}
      </span>

      <h3 className="text-lg font-semibold text-white">{offer.title}</h3>

      <ul className="mt-3 space-y-2 text-sm text-neutral-300">
        {offer.bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-neutral-500/70" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onAsk}
        className="mt-5 w-full rounded-lg bg-neutral-100 px-4 py-2 text-sm font-semibold text-black transition hover:bg-white"
      >
        Demander un devis
      </button>
    </div>
  );
}

/* Inputs */

const Input = ({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}, ref: React.Ref<HTMLInputElement>) => (
  <label className="block">
    <span className="mb-1 block text-xs text-neutral-300">{label}</span>
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md border border-white/15 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none placeholder:text-neutral-500 focus:border-white/30"
    />
  </label>
);
// @ts-expect-error forward ref inline (simple)
const Textarea = (
  {
    label,
    placeholder,
    rows = 4,
  }: { label: string; placeholder?: string; rows?: number },
  ref: React.Ref<HTMLTextAreaElement>
) => (
  <label className="block">
    <span className="mb-1 block text-xs text-neutral-300">{label}</span>
    <textarea
      ref={ref}
      rows={rows}
      placeholder={placeholder}
      className="w-full resize-y rounded-md border border-white/15 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none placeholder:text-neutral-500 focus:border-white/30"
    />
  </label>
);