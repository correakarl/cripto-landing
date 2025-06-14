import ComparisonTable from "@/components/ComparisonTable";
import CryptoExplorer from "@/components/CryptoExplorer";
import FAQSection from "@/components/FAQSection";
import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
          <main className="relative w-full min-h-screen">
            <Hero />
            <Features />
            <CryptoExplorer />
            <ComparisonTable />
            <Testimonials />
            <FAQSection />
            <FinalCTA />
          </main>
      <Footer />
    </>
  )
}