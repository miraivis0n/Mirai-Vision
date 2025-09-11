// app/tarifs/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type Pack = {
  id: string;
  title: string;
  price: string;
  desc: string[];
};

const packs: Pack[] = [
  {
    id: "pack-8s",
    title: "Pack 8s",
    price: "150€ / vidéo",
    desc: [
      "Vidéo courte (≈ 8 secondes) optimisée social",
      "1 aller-retour de révision",
      "Offre de lancement : 1 vidéo offerte",
    ],
  },
  {
    id: "pack-16s",
    title: "Pack 16s",
    price: "250€ / vidéo",
    desc: [
      "Vidéo (≈ 16 secondes) optimisée social",
      "1–2 allers-retours de révision",
      "Offre de lancement : 1 vidéo offerte",
    ],
  },
  {
    id: "pack-30s",
    title: "Pack 30s",
    price: "490€ / vidéo",
    desc: [
      "Vidéo (≈ 30 secondes) multi-formats (1:1, 9:16, 16:9)",
      "2 allers-retours inclus",
      "Offre de lancement : 1 vidéo offerte",
    ],
  },
];

export default function TarifsPage() {
  const search = useSearchParams();
  const selectedFromQuery = search.get("pack") ?? "";

  const options = useMemo(
    () => [
      { value: "", label: "Je ne sais pas encore" },
      ...packs.map((p) => ({ value: p.title, label: p.title })),
      { value: "abonnement-6", label: "Abonnement 6 vidéos / mois" },
      { value: "abonnement-15", label: "Abonnement 15 vidéos / mois" },
      { value: "autre", label: "Autre demande" },
    ],
    []
  );

  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [pack, setPack] = useState(options[0].value);
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [message, setMessage] = useState("");

  // Pré-sélection via ?pack=Pack%2016s etc.
  useEffect(() => {
    if (!selectedFromQuery) return;
    const match = options.find(
      (o) => o.label.toLowerCase() === decodeURIComponent(selectedFromQuery).toLowerCase()
    );
    if (match) setPack(match.value);
  }, [selectedFromQuery, options]);

  const handleDevisSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Nom: ${nom || "-"}`,
      `Email: ${email || "-"}`,
      `Pack: ${pack || "-"}`,
      `Budget: ${budget || "-"}`,
      `Deadline: ${deadline || "-"}`,
      "",
      "Message:",
      message || "-",
    ];

    const subject = encodeURIComponent("Demande de devis — Mirai Vision");
    const body = encodeURIComponent(lines.join("\n"));

    // Ouvre le client mail de l’utilisateur
    window.location.href = `mailto:contact.miraivision@gmail.com?subject=${subject}&body=${body}`;
  };

  const goToDevis = (title: string) => {
    // Définit la query pour pré-remplir le select, puis scroll
    const url = new URL(window.location.href);
    url.searchParams.set("pack", title);
    window.history.replaceState(null, "", url.toString());
    setPack(title);
    document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header compact */}
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-3">
          <Link href="/accueil" className="flex items-center gap-3 hover:opacity-80">
            <img src="/logo.png" alt="Mirai Vision" width={36} height={36} className="h-9 w-9" />
            <span className="font-semibold tracking-tight">Mirai Vision</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/accueil#offres" className="hover:opacity-80">
              Offres
            </Link>
            <a href="#devis" className="hover:opacity-80">
              Demander un devis
            </a>
            <a
              href="mailto:contact.miraivision@gmail.com"
              className="rounded-full border px-3 py-1.5 hover:bg-gray-50"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Titre page */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold sm:text-4xl">Tarifs & Devis</h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Voici nos packs types pour les vidéos sociales. Les besoins variant d’un client à l’autre,
          la commande se fait **sur devis** : dites-nous ce que vous voulez produire, on ajuste le
          contenu et le budget ensemble.
        </p>
      </section>

      {/* Packs (sans paiement) */}
      <section id="offres" className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">Nos Packs</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packs.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-xl font-bold">{p.price}</p>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.desc.map((d, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gray-900" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => goToDevis(p.title)}
                className="mt-6 w-full rounded-lg bg-black px-4 py-2.5 text-white hover:bg-gray-800"
              >
                Demander un devis
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Abonnements, si tu veux conserver l’info */}
      <section className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">Abonnements mensuels</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">6 vidéos / mois</h3>
            <p className="mt-1 text-xl font-bold">990€ / mois</p>
            <p className="mt-3 text-sm text-gray-700">Durée libre, brief mensuel, reporting.</p>
            <button
              onClick={() => goToDevis("Abonnement 6 vidéos / mois")}
              className="mt-6 w-full rounded-lg bg-black px-4 py-2.5 text-white hover:bg-gray-800"
            >
              Demander un devis
            </button>
          </article>

          <article className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">15 vidéos / mois</h3>
            <p className="mt-1 text-xl font-bold">1990€ / mois</p>
            <p className="mt-3 text-sm text-gray-700">Volume, itérations rapides, multi-formats.</p>
            <button
              onClick={() => goToDevis("Abonnement 15 vidéos / mois")}
              className="mt-6 w-full rounded-lg bg-black px-4 py-2.5 text-white hover:bg-gray-800"
            >
              Demander un devis
            </button>
          </article>
        </div>
      </section>

      {/* Formulaire de devis */}
      <section id="devis" className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="text-2xl font-semibold sm:text-3xl">Demande de devis</h2>
        <p className="mt-2 text-gray-600">
          Remplis ce formulaire : ton application mail s’ouvrira avec un message pré-rempli à
          <a className="underline ml-1" href="mailto:contact.miraivision@gmail.com">
            contact.miraivision@gmail.com
          </a>
          .
        </p>

        <form onSubmit={handleDevisSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Nom</label>
              <input
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2"
                placeholder="Ton nom"
                autoComplete="name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email *</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2"
                placeholder="ton@email.com"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Pack souhaité</label>
              <select
                value={pack}
                onChange={(e) => setPack(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 bg-white"
              >
                {options.map((o) => (
                  <option key={o.value || "none"} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Budget (approx.)</label>
              <input
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2"
                placeholder="ex: 1 500€"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Deadline</label>
              <input
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2"
                placeholder="ex: fin du mois"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Détails du projet</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded-md border px-3 py-2"
              rows={6}
              placeholder="Contexte, objectifs, références, livrables attendus…"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-black px-4 py-2.5 text-white hover:bg-gray-800"
          >
            Envoyer la demande de devis
          </button>

          <p className="text-xs text-gray-500">
            Si rien ne s’ouvre, écris-nous directement à{" "}
            <a className="underline" href="mailto:contact.miraivision@gmail.com">
              contact.miraivision@gmail.com
            </a>
            .
          </p>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-600 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Mirai Vision. Tous droits réservés.</span>
          <div className="flex gap-6">
            <a href="/mentions" className="hover:underline">
              Mentions légales
            </a>
            <a href="/confidentialite" className="hover:underline">
              Confidentialité
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}}