// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mirai Vision — Studio vidéo",
  description:
    "Vidéos courtes 8s, 16s, 30s et abonnements mensuels. De l'idée à la livraison. Commande et paiement en ligne.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
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
            <a href="#offers" className="hover:opacity-80">
              Offres
            </a>
            <a href="#contact" className="hover:opacity-80">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Studio créatif — vidéos qui donnent envie d’agir
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Vidéos courtes et efficaces (8s, 16s, 30s) + abonnements mensuels. De l’idée à la
              livraison : conception, montage, exports multi-formats. Projet pub &gt; 1 min →
              <span className="font-semibold"> sur devis</span>.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#offers"
                className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 font-medium text-white hover:opacity-90"
              >
                Voir les offres
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-medium hover:bg-gray-50"
              >
                Parler à un humain
              </a>
            </div>
          </div>

          {/* Vidéo 1 (locale /public/video1.mp4) */}
          <div className="overflow-hidden rounded-2xl border">
            <div className="aspect-video">
              <video
                className="h-full w-full"
                controls
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src="/video1.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo HTML5.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* À propos + Vidéo 2 */}
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-semibold sm:text-3xl">À propos</h2>
            <p className="mt-4 text-gray-600">
              Mirai Vision est un studio orienté performance. Nous créons des formats courts qui
              captent l’attention et poussent à l’action : <strong>8s</strong>,{" "}
              <strong>16s</strong>, <strong>30s</strong>, ainsi que des abonnements pour alimenter
              vos réseaux en continu.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Brief simple, conseil angle & script.</li>
              <li>• Montage soigné, habillage, sous-titres si besoin.</li>
              <li>• Exports multi-formats, 1 à 2 allers-retours selon le pack.</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a
                href="#offers"
                className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 font-medium text-white hover:opacity-90"
              >
                Découvrir les packs
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-medium hover:bg-gray-100"
              >
                Nous écrire
              </a>
            </div>
          </div>

          {/* Vidéo 2 (locale /public/video2.mp4) */}
          <div className="order-1 overflow-hidden rounded-2xl border lg:order-2">
            <div className="aspect-video">
              <video
                className="h-full w-full"
                controls
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src="/video2.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo HTML5.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold sm:text-3xl">Comment ça se passe ?</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">1) Brief</h3>
            <p className="mt-2 text-gray-600">Objectif, message, cible. On valide l’angle.</p>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">2) Production & montage</h3>
            <p className="mt-2 text-gray-600">Tournage si besoin, montage, habillage, audio.</p>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">3) Livraison</h3>
            <p className="mt-2 text-gray-600">
              Exports finaux. Allers-retours inclus selon le pack choisi.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="offers" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border p-8 sm:flex-row sm:p-10">
          <div>
            <h3 className="text-xl font-semibold">Prêt à lancer vos contenus ?</h3>
            <p className="mt-2 text-gray-600">
              Choisissez un pack ou un abonnement. Paiement sécurisé, facture automatique.
            </p>
          </div>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 font-medium text-white hover:opacity-90"
          >
            Nous contacter
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold sm:text-3xl">Contact</h2>
          <p className="mt-2 text-gray-600">Brief, questions, devis sur mesure.</p>
          <div className="mt-6">
            <a
              href="mailto:contactmiraivision@gmail.com"
              className="underline underline-offset-4 hover:opacity-80"
            >
              contactmiraivision@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-gray-600 sm:flex-row">
          <span>© {new Date().getFullYear()} Mirai Vision. Tous droits réservés.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:underline">
              Mentions légales
            </a>
            <a href="#" className="hover:underline">
              Confidentialité
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
