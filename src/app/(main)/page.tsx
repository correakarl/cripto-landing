import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import CryptoExplorer from './components/CryptoExplorer'
import ComparisonTable from './components/ComparisonTable'
import Testimonials from './components/Testimonials'
import FAQSection from './components/FAQSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

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