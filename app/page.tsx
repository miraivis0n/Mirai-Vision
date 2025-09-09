import Image from "next/image";

export default function Home() {
  const plans = [
    {
      name: "Pack 8s",
      price: "150€ / vidéo",
      desc: "Vidéo de 8 secondes optimisée social. 1 aller-retour de révision. 🎁 Offre de lancement : 1 vidéo offerte.",
      link: "https://buy.stripe.com/test_00waEXa4s2WI2hSbJlfjG00",
    },
    {
      name: "Pack 16s",
      price: "250€ / vidéo",
      desc: "Vidéo de 16 secondes optimisée social. 1–2 allers-retours. 🎁 Offre de lancement : 1 vidéo offerte.",
      link: "https://buy.stripe.com/test_cNibJ1ccAapa6y8cNpfjG01",
    },
    {
      name: "Pack 30s",
      price: "490€ / vidéo",
      desc: "Vidéo de 30 secondes optimisée social. Export multi-formats (9:16, 16:9). 2 allers-retours. 🎁 Offre de lancement : 1 vidéo offerte.",
      link: "https://buy.stripe.com/test_6oU8wP4K868U6y84gTfjG02",
    },
  ];

  const subscriptions = [
    {
      name: "Abonnement 2 vidéos / mois",
      price: "390€ / mois",
      desc: "2 vidéos par mois, durée libre. Optimisées social. 🎁 Lancement : -35% le 1er mois.",
      link: "https://buy.stripe.com/test_5kQ4gz4K840MaOofZBfjG03",
    },
    {
      name: "Abonnement 6 vidéos / mois",
      price: "990€ / mois",
      desc: "6 vidéos par mois, durée libre. Optimisées social. 🎁 Lancement : -35% le 1er mois.",
      link: "https://buy.stripe.com/test_6oU6oHekIcxig8I14HfjG04",
    },
    {
      name: "Abonnement 15 vidéos / mois",
      price: "1990€ / mois",
      desc: "15 vidéos par mois, durée libre. Optimisées social. 🎁 Lancement : -35% le 1er mois.",
      link: "https://buy.stripe.com/test_6oUdR95Oc0OA9Kk3cPfjG05",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Mirai Vision Agency"
            width={50}
            height={50}
          />
          <span className="font-bold text-lg">Mirai Vision</span>
        </div>
        <nav className="space-x-6">
          <a href="#pricing" className="hover:opacity-70">
            Offres
          </a>
          <a href="#contact" className="hover:opacity-70">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Studio créatif — vidéos sur mesure (8s, 16s, 30s, mensuel)
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Conception à livraison : idées, génération, montage, exports
          multi-formats. Projet pub {">"} 1 min → sur devis.
        </p>
        <div className="space-x-4">
          <a
            href="#pricing"
            className="bg-black text-white px-6 py-3 rounded-md"
          >
            Voir les offres
          </a>
          <a
            href="#contact"
            className="border border-black px-6 py-3 rounded-md"
          >
            Parler à un humain
          </a>
        </div>
      </section>

      {/* Packs */}
      <section id="pricing" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Packs</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border rounded-xl p-6 flex flex-col justify-between bg-white shadow-sm"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-700 mb-4">{plan.desc}</p>
                <p className="text-2xl font-bold mb-6">{plan.price}</p>
              </div>
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-center py-3 rounded-md hover:bg-gray-800"
              >
                Payer maintenant
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Abonnements */}
      <section id="subscriptions" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Abonnements</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subscriptions.map((sub) => (
            <div
              key={sub.name}
              className="border rounded-xl p-6 flex flex-col justify-between bg-white shadow-sm"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{sub.name}</h3>
                <p className="text-gray-700 mb-4">{sub.desc}</p>
                <p className="text-2xl font-bold mb-6">{sub.price}</p>
              </div>
              <a
                href={sub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-center py-3 rounded-md hover:bg-gray-800"
              >
                S’abonner
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-600 mb-4">Brief, questions, devis sur mesure.</p>
        <p>
          📧{" "}
          <a
            href="mailto:contact.miraivision@gmail.com"
            className="underline text-blue-600"
          >
            contact.miraivision@gmail.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} Mirai Vision. Tous droits réservés.
      </footer>
    </main>
  );
}