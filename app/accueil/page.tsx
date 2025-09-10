// app/accueil/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mirai Vision — Studio vidéo",
  description:
    "Vidéos courtes 8s, 16s, 30s et abonnements mensuels. De l’idée à la livraison, exports multi-formats pour réseaux sociaux.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Mirai Vision"
              width={36}
              height={36}
              priority
              className="rounded"
            />
            <span className="font-semibold tracking-tight">Mirai Vision</span>
          </Link>

          <nav className="mt-3 flex items-center gap-6 text-sm sm:mt-0">
            <Link href="/tarifs" className="hover:opacity-80">
              Offres
            </Link>
            <Link href="#contact" className="hover:opacity-80">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Studio créatif, vidéos qui donnent envie d’agir
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-gray-600">
          De l’idée à la livraison. Création rapide et impactante de vidéos pour
          réseaux sociaux.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/tarifs"
            className="inline-flex items-center justify-center rounded-md border border-gray-900 bg-gray-900 px-4 py-2 text-white hover:opacity-90"
          >
            Voir nos offres
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50"
          >
            Contactez-nous
          </Link>
        </div>
      </section>

      {/* À propos */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold sm:text-3xl">À propos</h2>
        <div className="mt-4 grid gap-6 text-gray-700 sm:grid-cols-2">
          <p>
            Mirai Vision est un studio vidéo spécialisé dans les formats courts
            (8s, 16s, 30s) et les abonnements mensuels. Nous clarifions votre
            objectif, trouvons l’angle, écrivons le script, tournons/animons,
            montons, puis déclinons en multi-formats adaptés à vos canaux
            (9:16, 1:1, 16:9).
          </p>
          <p>
            Nos priorités : vitesse d’exécution, cohérence de marque et
            résultats mesurables. Process simple, livraisons rapides et
            itérations guidées par la performance.
          </p>
        </div>
      </section>

      {/* Exemples de vidéos */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold sm:text-3xl">Exemples de vidéos</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
            <video className="h-full w-full" controls preload="metadata" poster="/logo.png">
              <source src="/video1.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo HTML5.
            </video>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
            <video className="h-full w-full" controls preload="metadata" poster="/logo.png">
              <source src="/video2.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo HTML5.
            </video>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl border-t px-4 py-10">
        <h2 className="text-2xl font-semibold sm:text-3xl">Contact</h2>
        <p className="mt-2 text-gray-600">Brief, questions, devis sur mesure.</p>
        <p className="mt-4">
          <a
            className="underline underline-offset-4 hover:opacity-80"
            href="mailto:contact.miraivision@gmail.com"
          >
            contact.miraivision@gmail.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-gray-600 sm:flex-row">
          <span>© {new Date().getFullYear()} Mirai Vision. Tous droits réservés.</span>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:underline">
              Mentions légales
            </Link>
            <Link href="#" className="hover:underline">
              Confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
