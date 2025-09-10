import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Liens Stripe (test)
  const links = {
    pack8: "https://buy.stripe.com/test_00waEXa4s2WI2hSbJlfjG00",
    pack16: "https://buy.stripe.com/test_cNibJ1ccAapa6y8cNpfjG01",
    pack30: "https://buy.stripe.com/test_6oU8wP4K868U6y84gTfjG02",
    sub2: "https://buy.stripe.com/test_5kQ4gz4K840MaOofZBfjG03",
    sub6: "https://buy.stripe.com/test_6oU6oHekIcxig8I14HfjG04",
    sub15: "https://buy.stripe.com/test_6oUdR95Oc0OA9Kk3cPfjG05",
  };

  const packs = [
    {
      name: "Pack 8s",
      price: "150€ / vidéo",
      points: [
        "Vidéo de 8 secondes.",
        "1 aller-retour de révision.",
        "🎁 Offre de lancement : 1 vidéo offerte.",
      ],
      link: links.pack8,
    },
    {
      name: "Pack 16s",
      price: "250€ / vidéo",
      points: [
        "Vidéo de 16 secondes.",
        "1–2 aller-retours de révision.",
        "🎁 Offre de lancement : 1 vidéo offerte.",
      ],
      link: links.pack16,
    },
    {
      name: "Pack 30s",
      price: "490€ / vidéo",
      points: [
        "Vidéo de 30 secondes. Export multi-formats (1:1, 9:16, 16:9) si demandé.",
        "2 aller-retours inclus.",
        "🎁 Offre de lancement : 1 vidéo offerte.",
      ],
      link: links.pack30,
    },
  ];

  const subs = [
    {
      badge: "Populaire",
      name: "Abonnement 2 vidéos / mois",
      price: "390€ / mois",
      points: [
        "2 vidéos par mois.",
        "Durée libre.",
        "🎁 Lancement : −35% le 1er mois.",
      ],
      link: links.sub2,
    },
    {
      badge: "Populaire",
      name: "Abonnement 6 vidéos / mois",
      price: "990€ / mois",
      points: [
        "6 vidéos par mois.",
        "Durée libre.",
        "🎁 Lancement : −35% le 1er mois.",
      ],
      link: links.sub6,
    },
    {
      badge: "Populaire",
      name: "Abonnement 15 vidéos / mois",
      price: "1 990€ / mois",
      points: [
        "15 vidéos par mois.",
        "Durée libre.",
        "🎁 Lancement : −35% le 1er mois.",
      ],
      link: links.sub15,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Mirai Vision Agency"
              width={36}
              height={36}
              priority
              className="rounded"
            />
            <span className="font-semibold tracking-tight">Mirai Vision</span>
          </Link>

          <nav className="hidden gap-6 text-sm sm:flex">
            <Link href="#pricing" className="hover:opacity-80">
              Offres
            </Link>
            <Link href="#contact" className="hover:opacity-80">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:pt-16">
        <h1 className="font-bold leading-tight tracking-tight text-3xl sm:text-5xl">
          Studio créatif — vidéos sur mesure (8s, 16s, 30s, mensuel)
        </h1>

        <p className="mt-4 max-w-3xl text-base text-gray-700 dark:text-neutral-300">
          Conception à livraison : idées, génération, montage, exports multi-formats.
          Projet pub &gt; 1 min → sur devis.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="#pricing"
            className="rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90 dark:bg-white dark:text-black"
          >
            Voir les offres
          </Link>
          <Link
            href="#contact"
            className="rounded-xl border border-gray-300 px-5 py-3 transition hover:bg-gray-50 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            Parler à un humain
          </Link>
        </div>
      </section>

      {/* Packs */}
      <section
        id="pricing"
        className="border-y bg-gray-50 py-14 dark:border-neutral-900 dark:bg-neutral-950"
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-900 dark:text-neutral-100">
            Nos Packs
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packs.map((p) => (
              <article
                key={p.name}
                className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-2xl font-bold">{p.price}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-neutral-300">
                  {p.points.map((t, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-neutral-500" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-3 text-white transition hover:opacity-90 dark:bg-white dark:text-black"
                >
                  Payer maintenant
                </Link>

                <p className="mt-3 text-center text-xs text-gray-500 dark:text-neutral-400">
                  Paiement sécurisé Stripe. Facture PDF automatique.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Abonnements */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold">Nos Abonnements</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subs.map((p) => (
              <article
                key={p.name}
                className="relative rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
              >
                <span className="absolute right-4 top-4 rounded-full border px-2 py-0.5 text-xs text-gray-600 dark:border-neutral-700 dark:text-neutral-300">
                  {p.badge}
                </span>

                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-2xl font-bold">{p.price}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-neutral-300">
                  {p.points.map((t, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-neutral-500" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-3 text-white transition hover:opacity-90 dark:bg-white dark:text-black"
                >
                  S’abonner
                </Link>

                <p className="mt-3 text-center text-xs text-gray-500 dark:text-neutral-400">
                  Paiement sécurisé Stripe. Facture PDF automatique.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t py-14 dark:border-neutral-900">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-center text-sm text-gray-700 dark:text-neutral-300">
            Brief, questions, devis sur mesure.
          </p>

          <div className="mt-4 text-center">
            <Link
              href="mailto:contact.miraivision@gmail.com"
              className="underline decoration-2 underline-offset-4 hover:opacity-80"
            >
              contact.miraivision@gmail.com
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-sm text-gray-600 dark:border-neutral-900 dark:text-neutral-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Mirai Vision. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:opacity-80">
              Mentions légales
            </Link>
            <Link href="#" className="hover:opacity-80">
              Confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}}