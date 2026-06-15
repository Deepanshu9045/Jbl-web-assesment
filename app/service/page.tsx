import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ProductCategories from "@/components/ProductCategories";
import SupportGrid from "@/components/SupportGrid";
import ContactSupport from "@/components/ContactSupport";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Header />
      <PageHero title="Service" breadcrumbLabel="Service" />
      <ProductCategories />
      <SupportGrid />
      <ContactSupport />
      <Footer />
    </main>
  );
}
