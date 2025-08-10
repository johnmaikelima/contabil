import CTASection from '@/components/CTASection';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
