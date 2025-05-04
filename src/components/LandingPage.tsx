
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";
import ContactForm from "./ContactForm";
import NewsletterSignup from "./NewsletterSignup";
import Footer from "./Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        
        {/* Contact Form Section */}
        <div className="bg-white py-16 px-24 max-md:px-5">
          <h2 className="text-[rgba(3,24,57,1)] text-[40px] font-bold leading-[1.4] text-center mb-12">
            Contacto
          </h2>
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
        
        {/* Newsletter Section - No title, full width */}
        <div className="bg-[rgba(239,244,252,1)] py-16 px-24 max-md:px-5">
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
