import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Cta } from "@/components/sections/cta";
import { Currently } from "@/components/sections/currently";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { TechArsenal } from "@/components/sections/tech-arsenal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-svh flex-col">
        <Hero />
        <SelectedWork />
        <TechArsenal />
        <Currently />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
