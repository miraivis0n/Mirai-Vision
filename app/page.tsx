/* app/page.tsx */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // PAIEMENT — liens Stripe (test) que tu m'as donnés
  const STRIPE = {
    pack8:  "https://buy.stripe.com/test_00waEXa4s2WI2hSbJlfjG00",
    pack16: "https://buy.stripe.com/test_cNibJ1ccAapa6y8cNpfjG01",
    pack30: "https://buy.stripe.com/test_6oU8wP4K868U6y84gTfjG02",
    sub2:   "https://buy.stripe.com/test_5kQ4gz4K840MaOofZBfjG03",
    sub6:   "https://buy.stripe.com/test_6oU6oHekIcxig8I14HfjG04",
    sub15:  "https://buy.stripe.com/test_6oUdR95Oc0OA9Kk3cPfjG05",
  };

  const packs = [
    {
      title: "Pack 8s",
      price: "150€ / vidéo",
      bullets: [
        "Vidéo de 8 secondes.",
        "1 aller-retour de révision.",
        "🎁 Offre de lancement : 1 vidéo offerte."
      ],
      url: STRIPE.pack8,
    },
    {
      title: "Pack 16s",
      price: "250€ / vidéo",
      bullets: [
        "Vidéo de 16 secondes.",
        "1–2 allers-retours de révision.",
        "🎁 Offre de lancement : 1 vidéo offerte."
      ],
      url: STRIPE.pack16,
    },
    {
      title: "Pack 30s",
      price: "490€ / vidéo",
      bullets: [
        "Vidéo de 30 secondes.",
        "Export multi-formats (1:1, 9:16, 16:9) si demandé.",
        "2 allers-retours inclus.",
        "🎁 Offre de lancement : 1 vidéo offerte."
      ],
      url: STRIPE.pack30,
    },
  ];

  // Abonnements — “durée libre” (pas de durée imposée par vidéo)
  const subs = [
    {
      title: "Abonnement 2 vidéos / mois",
      price: "390€ / mois",
      bullets: [
        "2 vidéos par mois.",
        "Durée libre.",
      ],
      url: STRIPE.sub2,
    },
    {
      title: "Abonnement 6 vidéos / mois",
      price: "990€ / mois",
      bullets: [
        "6 vidéos par mois.",
        "Durée libre.",
      ],
      url: STRIPE.sub6,
    },
    {
      title: "Abonnement 15 vidéos / mois",
      price: "1990€ / mois",
      bullets: [
        "15 vidéos par mois.",
        "Durée libre.",
      ],
      url: STRIPE.sub15,
      badge: "Populaire",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Mirai Vision Agency"
              width={36}
              height={36}
              priority
            />
            <span className="font-semibold tracking-tight">Mirai Vision</span>
          </Link>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#pricing" className="hover:opacity-80">Offres</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4">
        <div className="mx-auto max-w-6xl py-14 sm:py-18">
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
            Studio créatif — vidéos sur mesure (8s, 16s, 30s, mensuel)
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            Conception à livraison : idées, génération, montage, exports multi-formats.
            Projet pub &gt; 1 min → sur devis.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#pricing"
              className="rounded-xl bg-black px-4 py-2 text-white shadow-sm ring-1 ring-black/10 hover:opacity-90"
            >
              Voir les offres
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-gray-300 px-4 py-2 hover:bg-gray-50"
            >
              Parler à un humain
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-gray-50 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Nos Packs</h2>

          {/* Packs grid */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {packs.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <h3 className="text-center text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-center text-2xl font-bold">{p.price}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block rounded-xl bg-black px-4 py-2 text-center text-white hover:opacity-90"
                >
                  Payer maintenant
                </a>

                <p className="mt-2 text-center text-[13px] text-gray-500">
                  Paiement sécurisé Stripe. Facture PDF automatique.
                </p>
              </article>
            ))}
          </div>

          {/* Abonnements */}
          <h2 className="mt-12 text-center text-2xl font-semibold sm:text-3xl">
            Nos Abonnements
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subs.map((s) => (
              <article
                key={s.title}
                className="relative rounded-2xl border bg-white p-6 shadow-sm"
              >
                {s.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-black px-2 py-0.5 text-[11px] font-medium text-white">
                    {s.badge}
                  </span>
                )}

                <h3 className="text-center text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-center text-2xl font-bold">{s.price}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block rounded-xl bg-black px-4 py-2 text-center text-white hover:opacity-90"
                >
                  S’abonner
                </a>

                <p className="mt-2 text-center text-[13px] text-gray-500">
                  Paiement sécurisé Stripe. Facture PDF automatique.
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-gray-600">
            Besoin d’un spot &gt; 1 min ou d’un pack personnalisé ? →{" "}
            <a href="#contact" className="underline">Contactez-nous.</a>
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Contact</h2>
          <p className="mt-2 text-gray-600">Brief, questions, devis sur mesure.</p>

          <div className="mt-4">
            <a
              href="mailto:contact.miraivision@gmail.com"
              className="underline"
            >
              contact.miraivision@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Mirai Vision. Tous droits réservés.
          </p>
          <div className="flex gap-5 text-sm">
            <a className="hover:underline" href="#">Mentions légales</a>
            <a className="hover:underline" href="#">Confidentialité</a>
          </div>
        </div>
      </footer>
    </main>
  );
}