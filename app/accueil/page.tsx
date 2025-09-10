// app/accueil/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mirai Vision – Studio vidéo",
  description:
    "Vidéos courtes 8s, 16s, 30s et abonnements mensuels. De l’idée à la livraison.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto max-w-6xl flex items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Mirai Vision"
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
            <span className="font-semibold tracking-tight">Mirai Vision</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm">
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
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Studio créatif, vidéos qui donnent envie d’agir
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              De l’idée à la livraison. Création rapide et impactante de vidéos
              pour réseaux sociaux.
            </p>
            <div className="mt-10 flex gap-6">
              <Link
                href="/tarifs"
                className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
              >
                Voir nos offres
              </Link>
              <Link
                href="#contact"
                className="rounded-md border px-4 py-2 hover:bg-gray-100"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold sm:text-3xl">Contact</h2>
          <p className="mt-2 text-gray-600">
            Brief, questions, devis sur mesure.
          </p>
          <div className="mt-6">
            <Link
              href="mailto:contactmiraivision@gmail.com"
              className="underline underline-offset-4 hover:opacity-80"
            >
              contactmiraivision@gmail.com
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-gray-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Mirai Vision. Tous droits réservés.
          </span>
          <div className="flex items-center gap-3">
            <Link href="/mentions-legales" className="hover:underline">
              Mentions Légales
            </Link>
            <Link href="/confidentialite" className="hover:underline">
              Confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
