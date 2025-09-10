import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const packs = [
    {
      title: "Pack 8s",
      price: "150€ / vidéo",
      desc: "Vidéo de 8 secondes. 1 aller-retour de révision. 🎁 Offre de lancement : 1 vidéo offerte.",
      cta: "Payer maintenant",
    },
    {
      title: "Pack 16s",
      price: "250€ / vidéo",
      desc: "Vidéo de 16 secondes. 1-2 allers-retours de révision. 🎁 Offre de lancement : 1 vidéo offerte.",
      cta: "Payer maintenant",
    },
    {
      title: "Pack 30s",
      price: "490€ / vidéo",
      desc: "Vidéo de 30 secondes. Export multi-formats (1:1, 16:9). 2 allers-retours inclus. 🎁 Offre de lancement : 1 vidéo offerte.",
      cta: "Payer maintenant",
    },
  ];

  const subs = [
    {
      title: "Abonnement 6 vidéos / mois",
      price: "990€ / mois",
      desc: "6 vidéos par mois. Durée libre.",
      cta: "S’abonner",
    },
    {
      title: "Abonnement 15 vidéos / mois",
      price: "1990€ / mois",
      desc: "15 vidéos par mois. Durée libre.",
      cta: "S’abonner",
    },
  ];

  return (
    <main>
      {/* Header */}
      <header className="border-b py-4 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Mirai Vision Agency"
            width={40}
            height={40}
          />
          <span className="font-bold text-lg">Mirai Vision</span>
        </div>
        <nav className="flex gap-6">
          <Link href="#offers">Offres</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Studio créatif — vidéos sur mesure (8s, 16s, 30s, mensuel)
        </h1>
        <p className="mt-4 text-gray-600">
          Conception à livraison : idées, génération, montage, exports multi-formats.
          Projet pub &gt; 1 min → sur devis.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="#offers" className="px-6 py-3 bg-black text-white rounded-lg">
            Voir les offres
          </Link>
          <Link
            href="mailto:contact.miraivision@gmail.com"
            className="px-6 py-3 border rounded-lg"
          >
            Parler à un humain
          </Link>
        </div>
      </section>

      {/* Packs */}
      <section id="offers" className="py-16 bg-gray-50 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">Nos Packs</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {packs.map((p) => (
            <article key={p.title} className="border rounded-xl p-6 text-center shadow-sm bg-white">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-2xl font-bold mt-2">{p.price}</p>
              <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
              <button className="mt-6 px-4 py-2 bg-black text-white rounded-lg">
                {p.cta}
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Abonnements */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">Nos Abonnements</h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {subs.map((s) => (
            <article key={s.title} className="border rounded-xl p-6 text-center shadow-sm bg-white">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-2xl font-bold mt-2">{s.price}</p>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
              <button className="mt-6 px-4 py-2 bg-black text-white rounded-lg">
                {s.cta}
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-sm text-gray-700">
            Brief, questions, devis sur mesure.
          </p>
          <Link
            href="mailto:contact.miraivision@gmail.com"
            className="underline block mt-4"
          >
            contact.miraivision@gmail.com
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
          <p>© {new Date().getFullYear()} Mirai Vision. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}