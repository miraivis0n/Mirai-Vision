// app/page.tsx
import { redirect } from "next/navigation";

export default function Index() {
  // Redirige automatiquement vers la vraie home
  redirect("/accueil");
}