import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-svh flex-col">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
