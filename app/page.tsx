/* app/page.tsx — Mirai Vision (revue & optimisée) */
import Image from "next/image";

export default function Home() {
  const oneOff = [
    {
      title: "Pack 8s",
      price: "150€ / vidéo",
      bullets: ["1 vidéo de 8s", "1 aller-retour de révision", "🎁 Lancement : 1 vidéo offerte"],
      link: "https://buy.stripe.com/test_00waEXa4s2WI2hSbJlfjG00",
      cta: "Payer maintenant",
    },
    {
      title: "Pack 16s",
      price: "250€ / vidéo",
      bullets: ["1 vidéo de 16s", "1–2 allers-retours", "🎁 Lancement : 1 vidéo offerte"],
      link: "https://buy.stripe.com/test_cNibJ1ccAapa6y8cNpfjG01",
      cta: "Payer maintenant",
    },
    {
      title: "Pack 30s",
      price: "490€ / vidéo",
      bullets: ["1 vidéo de 30s", "Exports 9:16 / 16:9 si besoin", "2 allers-retours", "🎁 Lancement : 1 vidéo offerte"],
      link: "https://buy.stripe.com/test_6oU8wP4K868U6y84gTfjG02",
      cta: "Payer maintenant",
    },
  ];

  const subs = [
    {
      title: "Abonnement 2 vidéos / mois",
      price: "390€ / mois",
      badge: "Populaire",
      bullets: ["2 vidéos par mois", "Durée libre", "Brief simple & planning mensuel", "🎁 −35% le 1er mois"],
      link: "https://buy.stripe.com/test_5kQ4gz4K840MaOofZBfjG03",
      cta: "S’abonner",
    },
    {
      title: "Abonnement 6 vidéos / mois",
      price: "990€ / mois",
      badge: "Populaire",
      bullets: ["6 vidéos par mois", "Durée libre", "Idéal promos & A/B tests", "🎁 −35% le 1er mois"],
      link: "https://buy.stripe.com/test_6oU6oHekIcxig8I14HfjG04",
      cta: "S’abonner",
    },
    {
      title: "Abonnement 15 vidéos / mois",
      price: "1 990€ / mois",
      badge: "Populaire",
      bullets: ["15 vidéos par mois", "Durée libre", "Calendrier éditorial soutenu", "🎁 −35% le 1er mois"],
      link: "https://buy.stripe.com/test_6oUdR95Oc0OA9Kk3cPfjG05",
      cta: "S’abonner",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="/" aria-label="Accueil Mirai Vision" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Mirai Vision" width={44} height={44} priority className="h-11 w-11" />
            <span className="sr-only">Mirai Vision</span>
          </a>
          <nav className="text-sm" aria-label="Navigation principale">
            <a href="#pricing" className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-black/40 rounded px-1">
              Packs
            </a>
            <span className="mx-3 text-gray-400">•</span>
            <a href="#subs" className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-black/40 rounded px-1">
              Abonnements
            </a>
            <span className="mx-3 text-gray-400">•</span>
            <a href="#contact" className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-black/40 rounded px-1">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-14">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Studio créatif — vidéos sur mesure (8s, 16s, 30s, mensuel)
        </h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          De l’idée au livrable : conception, génération, montage et exports multi-formats.
          Projet pub &gt; 1 min → <strong>sur devis</strong>.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#pricing" className="rounded-xl bg-black px-5 py-2 text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/40">
            Voir les packs
          </a>
          <a href="#subs" className="rounded-xl border px-5 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/20">
            Voir les abonnements
          </a>
        </div>
      </section>

      {/* Packs ponctuels */}
      <section id="pricing" aria-labelledby="packs-title" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="packs-title" className="text-center text-2xl sm:text-3xl font-semibold">Packs ponctuels</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Achat unique. 🎁 Lancement : 1 vidéo offerte sur chaque pack.</p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {oneOff.map((p) => (
              <article
                key={p.title}
                className="w-full max-w-sm mx-auto rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                aria-label={p.title}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-2xl font-bold">{p.price}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700 break-words">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-800 flex-none" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.cta} — ${p.title} (Stripe)`}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-3 text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/30"
                  >
                    {p.cta}
                  </a>
                  <p className="mt-2 text-center text-xs text-gray-500">Paiement sécurisé Stripe. Facture PDF automatique.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Abonnements mensuels */}
      <section id="subs" aria-labelledby="subs-title" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="subs-title" className="text-center text-2xl sm:text-3xl font-semibold">Abonnements mensuels</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Vidéos récurrentes, <strong>durée libre</strong>. 🎁 −35% le 1er mois.</p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subs.map((p) => (
              <article
                key={p.title}
                className="w-full max-w-sm mx-auto rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                aria-label={p.title}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <span className="rounded-full bg-black/90 px-2.5 py-0.5 text-xs text-white">{p.badge}</span>
                  </div>
                  <p className="mt-2 text-2xl font-bold">{p.price}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700 break-words">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-800 flex-none" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.cta} — ${p.title} (Stripe)`}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-3 text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/30"
                  >
                    {p.cta}
                  </a>
                  <p className="mt-2 text-center text-xs text-gray-500">Paiement sécurisé Stripe. Facture & reçus automatiques.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-sm text-gray-700">Brief, questions, devis sur mesure.</p>
          <div className="mt-2 text-sm">
            📧{" "}
            <a className="underline" href="mailto:contact.miraivision@gmail.com">
              contact.miraivision@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-4 text-sm text-gray-600">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <p>© {new Date().getFullYear()} Mirai Vision. Tous droits réservés.</p>
            <div className="flex gap-4">
              <a href="#">Mentions légales</a>
              <a href="#">Confidentialité</a>
              <a href="#">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}