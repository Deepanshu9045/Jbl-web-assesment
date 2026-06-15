import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ProductList from "@/components/ProductList";
import NoiseCancelling from "@/components/NoiseCancelling";
import SignUp from "@/components/SignUp";
import Footer from "@/components/Footer";

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Header />
      <PageHero title="Products" breadcrumbLabel="Products" />
      <ProductList />
      <NoiseCancelling />
      <SignUp />
      <Footer />
    </main>
  );
}
