import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CountdownSection from '@/components/CountdownSection';
import AboutSection from '@/components/AboutSection';
import AnnouncementsSection from '@/components/AnnouncementsSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import ScheduleSection from '@/components/ScheduleSection';
import SocietiesSection from '@/components/SocietiesSection';
import LinksSection from '@/components/LinksSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CountdownSection />
      <AboutSection />
      <AnnouncementsSection />
      <ActivitiesSection />
      <ScheduleSection />
      <SocietiesSection />
      <LinksSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
