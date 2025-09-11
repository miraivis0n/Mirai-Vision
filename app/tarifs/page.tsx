// app/tarifs/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos offres & devis – Mirai Vision",
  description:
    "De la courte vidéo à l’abonnement mensuel. Décrivez votre besoin et recevez un devis personnalisé.",
};

/* ---- Arrière-plan lever de soleil, discret ---- */
function SunriseBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* ciel chaud vers blanc */}
      <div
        className="
          absolute inset-0
          [background:
            radial-gradient(circle_at_50%_120%,_#FFD08A_0%,_#FFE8C8_40%,_transparent_62%),
            linear-gradient(to_bottom,_#FFF7ED,_#FFFFFF_45%,_#FFFFFF)
          ]
        "
      />
      {/* rayons doux en bas */}
      <div
        className="
          absolute inset-x-0 bottom-[-8%] h-[55%]
          [mask-image:radial-gradient(ellipse_at_50%_120%,black_40%,transparent_72%)]
          bg-[conic-gradient(from_180deg_at_50%_100%,rgba(255,186,73,0.22)_0deg,transparent_18deg,rgba(255,186,73,0.22)_36deg,transparent_54deg,rgba(255,186,73,0.22)_72deg,transparent_90deg,rgba(255,186,73,0.22)_108deg,transparent_126deg,rgba(255,186,73,0.22)_144deg,transparent_162deg,rgba(255,186,73,0.22)_180deg)]
          blur-[1px]
        "
      />
    </div>
  );
}

/* ---- Cartes d’offres ---- */
type Card = {
  title: string;
  lines: string[];
  note?: string;
  planKey: string;
};

const singleShots: Card[] = [
  {
    title: "Vidéo 8 secondes",
    lines: [
      "Idéale pour TikTok, Reels, Shorts.",
      "Conception → livraison, exports multi-formats.",
      "1 aller-retour de révision inclus.",
    ],
    note: "Tarification sur devis (pas de paiement en ligne).",
    planKey: "video-8s",
  },
  {
    title: "Vidéo 16 secondes",
    lines: [
      "Format dynamique pour campagnes sociales.",
      "Idéal pour annonces et UGC courts.",
      "1–2 allers-retours de révision inclus.",
    ],
    note: "Tarification sur devis (pas de paiement en ligne).",
    planKey: "video-16s",
  },
  {
    title: "Vidéo 30 secondes",
    lines: [
      "Parfait pour présenter un produit/service.",
      "Exports 9:16, 1:1, 16:9 fournis.",
      "2 allers-retours de révision inclus.",
    ],
    note: "Tarification sur devis (pas de paiement en ligne).",
    planKey: "video-30s",
  },
];

const subscriptions: Card[] = [
  {
    title: "Abonnement 6 vidéos / mois",
    lines: [
      "Idéal pour un rythme social soutenu.",
      "Brief mensuel, idées, génération, montage.",
      "Multi-formats et suivi simple.",
    ],
    note: "Engagement flexible — devis personnalisé.",
    planKey: "abo-6",
  },
  {
    title: "Abonnement 15 vidéos / mois",
    lines: [
      "Volume élevé pour marques et agences.",
      "Process agile, calendrier éditorial, batch tournage.",
      "Options motion/étalonnage sur demande.",
    ],
    note: "Engagement flexible — devis personnalisé.",
    planKey: "abo-15",
  },
  {
    title: "Sur-mesure (UGC, 10s, 30s, mensuel)",
    lines: [
      "Du concept à la livraison : idées, script, tournage, montage.",
      "Exports multi-formats adaptés à vos canaux.",
      "Mesures de résultats, process clair.",
    ],
    note: "Projet publicitaire > 1 min → sur devis.",
    planKey: "sur-mesure",
  },
];

/* ---- Page ---- */
export default function TarifsPage() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-white text-gray-900">
      <SunriseBackground />

      {/* Header simple */}
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between gap-3">
          <Link href="/accueil" className="flex items-center gap-3 hover:opacity-80">
            <img src="/logo.png" alt="Mirai Vision" width={28} height={28} className="rounded-sm" />
            <span className="font-semibold tracking-tight">Mirai Vision</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm">
            <Link href="/accueil#offres" className="hover:underline">
              Accueil
            </Link>
            <a href="#devis" className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50">
              Demander un devis
            </a>
          </nav>
        </div>
      </header>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-semibold sm:text-4xl">Nos offres & devis</h1>
        <p className="mt-2 text-gray-600">
          Nous réalisons des vidéos adaptées à vos besoins : 8s, 16s, 30s ou sur mesure. Plus de paiement en ligne — vous pouvez désormais
          demander un <strong>devis personnalisé</strong>.
        </p>
      </section>

      {/* Offres par vidéo */}
      <section id="offres" className="mx-auto max-w-6xl px-4 pb-3">
        <h2 className="text-xl font-semibold mb-4">Vidéos à l’unité</h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {singleShots.map((c) => (
            <article key={c.planKey} className="rounded-2xl border bg-white/80 backdrop-blur px-5 py-6 shadow-sm">
              <h3 className="text-lg font-semibold">{c.title}</h3>

              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {c.lines.map((l, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>

              {c.note && <p className="mt-3 text-xs text-gray-500">{c.note}</p>}

              <button
                data-plan={c.planKey}
                onClick={handleAskDevis}
                className="mt-5 w-full rounded-lg border bg-black px-4 py-2 text-white hover:opacity-90"
              >
                Demander un devis
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Abonnements */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Abonnements</h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subscriptions.map((c) => (
            <article key={c.planKey} className="rounded-2xl border bg-white/80 backdrop-blur px-5 py-6 shadow-sm">
              <h3 className="text-lg font-semibold">{c.title}</h3>

              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {c.lines.map((l, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>

              {c.note && <p className="mt-3 text-xs text-gray-500">{c.note}</p>}

              <button
                data-plan={c.planKey}
                onClick={handleAskDevis}
                className="mt-5 w-full rounded-lg border bg-black px-4 py-2 text-white hover:opacity-90"
              >
                Demander un devis
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Formulaire Devis */}
      <section id="devis" className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="text-xl font-semibold">Demander un devis</h2>
        <p className="mt-2 text-gray-600">
          Remplissez ce formulaire — nous vous répondons rapidement avec une proposition adaptée à vos besoins.
        </p>

        <form onSubmit={sendMailto} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Type d’offre</label>
            <input
              id="plan"
              name="plan"
              type="text"
              placeholder="Ex. Vidéo 16 secondes, Abonnement 6 vidéos, Sur-mesure…"
              className="mt-1 w-full rounded-md border px-3 py-2"
              required
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Votre nom</label>
              <input name="name" type="text" className="mt-1 w-full rounded-md border px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Votre email</label>
              <input name="email" type="email" className="mt-1 w-full rounded-md border px-3 py-2" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Expliquez votre projet</label>
            <textarea
              name="message"
              rows={6}
              className="mt-1 w-full rounded-md border px-3 py-2"
              placeholder="Objectif, durée souhaitée, style, références, délais…"
              required
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="rounded-lg bg-black px-4 py-2 text-white hover:opacity-90"
              title="Envoi par email"
            >
              Envoyer la demande
            </button>
            <a href="mailto:contact.miraivision@gmail.com" className="text-sm underline">
              ou écrivez-nous directement
            </a>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm text-gray-600">© {new Date().getFullYear()} Mirai Vision. Tous droits réservés.</span>
          <div className="flex gap-6 text-sm">
            <a href="/mentions-legales" className="hover:underline">
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
}

/* ===== Helpers (client) =====
   - Pré-remplit le champ “plan” et scrolle au formulaire
   - Envoie un mailto propre au submit
*/
function handleAskDevis(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault();
  const plan = (e.currentTarget.getAttribute("data-plan") || "").trim();
  const input = document.getElementById("plan") as HTMLInputElement | null;

  // Définit un libellé lisible pour chaque plan
  const labels: Record<string, string> = {
    "video-8s": "Vidéo 8 secondes",
    "video-16s": "Vidéo 16 secondes",
    "video-30s": "Vidéo 30 secondes",
    "abo-6": "Abonnement 6 vidéos / mois",
    "abo-15": "Abonnement 15 vidéos / mois",
    "sur-mesure": "Offre sur-mesure",
  };

  if (input) {
    input.value = labels[plan] || plan || "Offre (précisez)";
    input.focus();
  }

  // scroll vers la section devis
  const section = document.getElementById("devis");
  section?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function sendMailto(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  const plan = (form.elements.namedItem("plan") as HTMLInputElement).value;
  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

  const subject = encodeURIComponent(`Devis – ${plan}`);
  const body = encodeURIComponent(
    `Nom: ${name}\nEmail: ${email}\n\nProjet:\n${message}\n`
  );

  window.location.href = `mailto:contact.miraivision@gmail.com?subject=${subject}&body=${body}`;
}