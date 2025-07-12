import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IITKGPMapSection from "@/components/IITKGPMapSection";
import CountdownSection from "@/components/CountdownSection";
import AboutSection from "@/components/AboutSection";
import DividerSection from "@/components/DividerSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ScheduleSection from "@/components/ScheduleSection";
import SocietiesSection from "@/components/SocietiesSection";
import LinksSection from "@/components/LinksSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const Divider = () => <div className='w-full h-px bg-iit-blue'></div>;

  return (
    <div className='min-h-screen'>
      <Header />
      <HeroSection />
      <CountdownSection />
      <AboutSection />
      <ActivitiesSection />
      <ScheduleSection />
      <LinksSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
