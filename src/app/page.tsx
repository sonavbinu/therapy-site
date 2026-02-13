import About from '../components/About';
import Background from '../components/Background';
import FAQ from '../components/FAQ';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Specialities from '../components/Specialities';
import Support from '../components/Support';
import Office from '../components/Office';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Specialities />
      <Support />
      <Introduction />
      <FAQ />
      <Background />
      <Office />
      <CTA />
      <Footer />
    </main>
  );
}
