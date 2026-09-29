import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/lib/i18n";
import { SmoothScroll } from "@/components/dar/SmoothScroll";
import { Cursor } from "@/components/dar/Cursor";
import { Loader } from "@/components/dar/Loader";
import { Nav } from "@/components/dar/Nav";
import { Hero } from "@/components/dar/Hero";
import { BookingWidget } from "@/components/dar/BookingWidget";
import { Manifeste, Jardin, Table, Rooftop } from "@/components/dar/Sections";
import { Suites, Spa, Ateliers, Experiences, Footer } from "@/components/dar/Sections2";

const title = "DAR ELIA — Palace 5★ à Marrakech, jardin secret & piscine rooftop";
const description =
  "DAR ELIA, palace de 32 clés au cœur de la médina de Marrakech : jardin secret de 1 200 m², piscine miroir rooftop face à l'Atlas, restaurant étoilé NOUR, spa et hammam en marbre vert.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "Palace Marrakech, hotel luxe Marrakech, jardin secret, piscine rooftop, restaurant étoilé Marrakech, spa hammam",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LangProvider>
      <SmoothScroll />
      <Cursor />
      <Loader />
      <Nav />
      <main className="bg-noir">
        <Hero />
        <Manifeste />
        <Jardin />
        <Table />
        <Rooftop />
        <Suites />
        <Spa />
        <Ateliers />
        <Experiences />
      </main>
      <Footer />
      <BookingWidget />
    </LangProvider>
  );
}
