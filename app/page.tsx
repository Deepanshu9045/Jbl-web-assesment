import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MostPopular from "@/components/MostPopular";
import OurAudio from "@/components/OurAudio";
import NewArrivals from "@/components/NewArrivals";
import NoiseCancelling from "@/components/NoiseCancelling";
import TodaysOffer from "@/components/TodaysOffer";
import ComingSoon from "@/components/ComingSoon";
import ReviewsAndDelivery from "@/components/ReviewsAndDelivery";
import SignUp from "@/components/SignUp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <MostPopular />
      <OurAudio />
      <NewArrivals />
      <NoiseCancelling />
      <TodaysOffer />
      <ComingSoon />
      <ReviewsAndDelivery />
      <SignUp />
      <Footer />
    </main>
  );
}
