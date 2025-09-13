import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import VirtualExperience from "@/components/VirtualExperience";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProjectsShowcase />
        <WhyChooseUs />
        <VirtualExperience />
        <EnquiryForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
