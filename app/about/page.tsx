import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AboutTrueSound from "@/components/AboutTrueSound";
import AboutHistory from "@/components/AboutHistory";
import AboutOffer from "@/components/AboutOffer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Header />
      <PageHero title="About Us" breadcrumbLabel="About Us" />
      <AboutTrueSound />
      <AboutHistory />
      <AboutOffer />
      <Footer />
    </main>
  );
}
