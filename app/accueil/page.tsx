// app/accueil/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

// SEO de la page
export const metadata: Metadata = {
  title: "Mirai Vision — Studio vidéo",
  description:
    "Vidéos courtes (8s, 16s, 30s) et abonnements mensuels. De l’idée à la livraison : conception, tournage/édition, exports multi-formats.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            {/* Remplace /logo.png par ton logo si besoin (dans /public) */}
            <Image
              src="/logo.png"
              alt="Mirai Vision"
              width={36}
              height={36}
              priority
              className="h-9 w-9"
            />
            <span className="font-semibold tracking-tight">Mirai Vision</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm">
            <Link href="/tarifs" className="hover:opacity-80">
              Offres
            </Link>
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
              Studio créatif, vidéos qui donnent envie d’agir
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              De l’idée à la livraison. Création rapide et impactante de vidéos
              pour réseaux sociaux.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/tarifs"
                className="rounded-md bg-black px-5 py-3 text-white hover:opacity-90"
              >
                Voir nos offres
              </Link>
              <a
                href="#contact"
                className="rounded-md border px-5 py-3 hover:bg-gray-50"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold sm:text-3xl">À propos</h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Mirai Vision est un studio créatif spécialisé dans la production de
          vidéos courtes et impactantes. Notre mission&nbsp;: aider les marques,
          entreprises et créateurs à communiquer efficacement grâce à des
          contenus visuels engageants, pensés pour la performance sociale.
        </p>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Nous intervenons à chaque étape&nbsp;: cadrage du besoin, scripting,
          tournage ou montage, motion/étalonnage, puis exports multi-formats
          adaptés à vos canaux (9:16, 1:1, 16:9). Livraison rapide, process
          simple, mesures de résultats.
        </p>
      </section>

      {/* Exemples vidéos (2 vidéos) */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold sm:text-3xl">Exemples de vidéos</h2>

        {/* Remplace les sources /videos/*.mp4 par tes fichiers dans /public/videos */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
            <video
              className="h-full w-full"
              controls
              preload="metadata"
              poster="/videos/poster1.jpg" // optionnel
            >
              <source src="/videos/exemple1.mp4#t=0.1" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo HTML5.
            </video>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
            <video
              className="h-full w-full"
              controls
              preload="metadata"
              poster="/videos/poster2.jpg" // optionnel
            >
              <source src="/videos/exemple2.mp4#t=0.1" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo HTML5.
            </video>
          </div>
        </div>

        {/* Alternative si tu préfères des iframes YouTube :
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="aspect-video overflow-hidden rounded-lg">
                <iframe className="h-full w-full" src="https://www.youtube.com/embed/ID1" allowFullScreen />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <iframe className="h-full w-full" src="https://www.youtube.com/embed/ID2" allowFullScreen />
              </div>
            </div>
        */}
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold sm:text-3xl">Contact</h2>
        <p className="mt-2 text-gray-600">
          Brief, questions, devis sur mesure.
        </p>

        <div className="mt-6">
          <a
            className="underline underline-offset-4 hover:opacity-80"
            href="mailto:contact.miraivision@gmail.com"
          >
            contact.miraivision@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-gray-600 sm:flex-row">
          <span>© {new Date().getFullYear()} Mirai Vision. Tous droits réservés.</span>
          <div className="flex items-center gap-6">
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
