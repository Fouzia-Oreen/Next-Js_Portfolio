import AboutSection from "@/sections/About";
import ContactSection from "@/sections/Contact";
import FeaturedProjectSection from "@/sections/FeaturedProject";
import Header from "@/sections/Header";
import HeroSection from "@/sections/Hero";
import TapeSection from "@/sections/Tape";
import TestimonialSection from "@/sections/Testimonial";

export default function Home() {
  return (
    <div >
     <Header />
     <HeroSection />
     <FeaturedProjectSection />
     <TapeSection />
     <TestimonialSection />
     <AboutSection />
     <ContactSection />
    </div>
  );
}
