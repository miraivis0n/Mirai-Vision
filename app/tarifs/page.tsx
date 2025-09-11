// app/tarifs/page.tsx
import Link from "next/link";

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            Mirai Vision
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/accueil" className="hover:opacity-80">
              Accueil
            </Link>
            <Link href="/tarifs" className="hover:opacity-80 font-medium">
              Tarifs
            </Link>
            <Link href="/contact" className="hover:opacity-80">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Section Tarifs */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Nos offres & devis</h1>
        <p className="text-lg text-gray-700 mb-10">
          Nous réalisons des vidéos adaptées à vos besoins : 8s, 16s, 30s ou
          sur mesure. Plus besoin de payer directement en ligne — vous pouvez
          désormais demander un <span className="font-semibold">devis personnalisé</span>.
        </p>

        {/* Exemples de tarifs */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Vidéo 8 secondes</h3>
            <p className="text-gray-600 mb-4">
              Idéale pour les formats publicitaires très courts (TikTok, Reels,
              Shorts).
            </p>
            <p className="font-medium">À partir de 150€</p>
          </div>
          <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Vidéo 16 secondes</h3>
            <p className="text-gray-600 mb-4">
              Format dynamique, parfait pour des campagnes réseaux sociaux.
            </p>
            <p className="font-medium">À partir de 250€</p>
          </div>
          <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Vidéo 30 secondes</h3>
            <p className="text-gray-600 mb-4">
              Idéal pour présenter un produit ou un service de manière impactante.
            </p>
            <p className="font-medium">À partir de 400€</p>
          </div>
        </div>

        {/* Formulaire devis */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Demander un devis</h2>
          <p className="text-gray-700 mb-6">
            Remplissez ce formulaire et nous vous contacterons rapidement avec une proposition adaptée à vos besoins.
          </p>
          <form
            action="mailto:contact.miraivision@gmail.com"
            method="POST"
            encType="text/plain"
            className="grid gap-4"
          >
            <input
              type="text"
              name="Nom"
              placeholder="Votre nom"
              required
              className="border p-3 rounded-lg"
            />
            <input
              type="email"
              name="Email"
              placeholder="Votre email"
              required
              className="border p-3 rounded-lg"
            />
            <textarea
              name="Message"
              placeholder="Expliquez votre projet..."
              rows={5}
              required
              className="border p-3 rounded-lg"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="mx-auto max-w-6xl px-6 py-6 flex justify-between text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Mirai Vision. Tous droits réservés.</span>
          <div className="flex gap-4">
            <Link href="/mentions">Mentions légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}