import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import FeaturedTools from "@/components/sections/FeaturedTools";
import Research from "@/components/sections/Research";
import Integration from "@/components/sections/Integration";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Mission />
        <FeaturedTools />
        <Research />
        <Integration />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
