import { useState } from 'react';

import { SmoothScroll } from './components/SmoothScroll';
import { ScrollProgress } from './components/ScrollProgress';
import { RevealOnScroll } from './components/RevealOnScroll';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureScrollSection } from './components/SignatureScrollSection';
import { IntroductionSection } from './components/IntroductionSection';
import { BrandShowcase } from './components/BrandShowcase';
import { LightingWorld } from './components/LightingWorld';
import { ProductShowcase } from './components/ProductShowcase';
import { SpacesSection } from './components/SpacesSection';
import { ShowroomExperience } from './components/ShowroomExperience';
import { ProfessionalSection } from './components/ProfessionalSection';
import { WhyJKAgencies } from './components/WhyJKAgencies';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState('');

  const handleOpenTalk = () => {
    setSelectedProductName('');
    setIsQuoteOpen(true);
  };

  const handleRequestQuote = (productName: string) => {
    setSelectedProductName(productName);
    setIsQuoteOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#C1121F] selection:text-white font-sans antialiased overflow-x-hidden">
        <ScrollProgress />
        <RevealOnScroll />
        <CustomCursor />
        <Navbar onOpenTalk={handleOpenTalk} />

        <main>
          <Hero onOpenTalk={handleOpenTalk} />
          <SignatureScrollSection />
          <SpacesSection onOpenTalk={handleOpenTalk} />
          <ProductShowcase onRequestQuote={handleRequestQuote} />
          <BrandShowcase onOpenTalk={handleOpenTalk} />
          <LightingWorld onOpenTalk={handleOpenTalk} />
          <ShowroomExperience onOpenTalk={handleOpenTalk} />
          <IntroductionSection />
          <ProfessionalSection onOpenTalk={handleOpenTalk} />
          <WhyJKAgencies />
          <CTASection onOpenTalk={handleOpenTalk} />
          <ContactSection />
        </main>

        <Footer />

        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          initialProductName={selectedProductName}
        />

        <WhatsAppButton />
      </div>
    </SmoothScroll>
  );
}

export default App;
