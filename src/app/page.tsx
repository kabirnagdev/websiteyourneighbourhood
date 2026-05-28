import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AppPreview from "@/components/sections/AppPreview";
import PhotoStrips from "@/components/sections/PhotoStrips";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import CTASection from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PhotoStrips />
        <AppPreview />
        <ShowcaseSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
