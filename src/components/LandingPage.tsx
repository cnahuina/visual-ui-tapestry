
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";
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
        <div className="bg-white flex py-16 px-24 max-md:px-5 md:flex-row md:justify-end ">
         
          {/* <div className="flex md:flex-row md:justify-end w-full">
            <ContactForm />
          </div> */}
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
