"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TextAbout from '@/components/sections/about/TextAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Briefcase, MessageCircle, Phone, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="RPRT Sports + Talent Management"
          brandName="RPRT"
          button={{
            text: "Contact Us",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Elite Talent & Sports Management"
          description="From career management to contract negotiations, we manage elite talent and athletes across multiple market niches with our comprehensive entertainment industry expertise."
          tag="RPRT"
          tagIcon={Star}
          buttons={[
            {
              text: "Our Services",
              href: "services"
            },
            {
              text: "Contact Us",
              href: "contact"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7715790/pexels-photo-7715790.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional talent management and entertainment industry services"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardOne
          title="What We Do"
          description="Comprehensive talent management and entertainment industry services designed to elevate careers and maximize opportunities."
          tag="Services"
          tagIcon={Briefcase}
          features={[
            {
              title: "Talent/Athlete Management",
              description: "Complete career management from public relations to endorsements and contract negotiations for elite talent and athletes.",
              imageSrc: "https://images.pexels.com/photos/5622321/pexels-photo-5622321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Talent management services"
            },
            {
              title: "Film/TV/UGC Production",
              description: "Packaging and producing TV, film, and user-generated projects utilizing our vast talent and brand network.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/tmp/film-television-production-set-professio-1761320275931-6b3c923a.jpg",
              imageAlt: "Film and television production"
            },
            {
              title: "PR/Product Placement",
              description: "Strategic product placement in film, TV, music videos, and celebrity partnerships with nearly a decade of expertise.",
              imageSrc: "https://images.pexels.com/photos/8000646/pexels-photo-8000646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Public relations and product placement"
            },
            {
              title: "Brand Development & Consulting",
              description: "Strategic guidance to help your company infiltrate the Hollywood landscape and grow exponentially from a marketing standpoint.",
              imageSrc: "https://images.pexels.com/photos/29591863/pexels-photo-29591863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Brand development consulting"
            },
            {
              title: "Events",
              description: "End-to-end event production from red carpet premieres to product launches, ensuring incredible experiences and media coverage.",
              imageSrc: "https://images.pexels.com/photos/2177813/pexels-photo-2177813.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Event production and management"
            },
            {
              title: "Social Media Marketing",
              description: "Comprehensive social media campaigns across Twitter, Facebook, Instagram, and TikTok to promote your business directly to consumers.",
              imageSrc: "https://images.pexels.com/photos/15595050/pexels-photo-15595050.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Social media marketing services"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We are the 'go to' source for placing premium products in entertainment and building exponential growth through our extensive Hollywood network and industry expertise spanning nearly a decade."
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Client Success Stories"
          description="Hear from the talent, brands, and industry leaders who trust RPRT for their entertainment and marketing needs."
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Professional Athlete",
              testimonial: "RPRT transformed my career trajectory. Their strategic approach to endorsements and contract negotiations has been exceptional.",
              imageSrc: "https://images.pexels.com/photos/7971754/pexels-photo-7971754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Johnson professional portrait"
            },
            {
              id: "2",
              name: "Sarah Mitchell",
              role: "Brand Director, Luxury Fashion",
              testimonial: "The product placement opportunities RPRT provided exceeded our expectations. Our brand visibility in major productions has been incredible.",
              imageSrc: "https://images.pexels.com/photos/7109087/pexels-photo-7109087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Mitchell professional portrait"
            },
            {
              id: "3",
              name: "David Chen",
              role: "Entertainment Executive",
              testimonial: "Working with RPRT on talent packaging has been seamless. Their industry connections and expertise are unmatched.",
              imageSrc: "https://images.pexels.com/photos/19931127/pexels-photo-19931127.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Chen professional portrait"
            },
            {
              id: "4",
              name: "Amanda Rodriguez",
              role: "Event Producer",
              testimonial: "RPRT's event production capabilities are world-class. From concept to execution, they deliver extraordinary experiences.",
              imageSrc: "https://images.pexels.com/photos/8871898/pexels-photo-8871898.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Amanda Rodriguez professional portrait"
            },
            {
              id: "5",
              name: "Michael Torres",
              role: "Social Media Influencer",
              testimonial: "Their social media marketing strategies have grown my audience exponentially. RPRT understands the digital landscape perfectly.",
              imageSrc: "https://images.pexels.com/photos/3990842/pexels-photo-3990842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Torres professional portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Working with top entertainment companies, studios, and brands to create exceptional opportunities and memorable experiences."
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/19891090/pexels-photo-19891090.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2228569/pexels-photo-2228569.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4003765/pexels-photo-4003765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/34042836/pexels-photo-34042836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/19891090/pexels-photo-19891090.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/5700769/pexels-photo-5700769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Ready to Elevate Your Brand?"
          description="Contact us to learn more about our comprehensive talent management and entertainment industry services. Let's discuss how we can help you succeed."
          tagIcon={Phone}
          inputPlaceholder="Enter your email address"
          buttonText="Contact Us"
          termsText="For our complete client roster and detailed information, please contact us at info@rp-rt.com or call 310-806-3672."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Talent Management",
                  href: "services"
                },
                {
                  label: "Film/TV Production",
                  href: "services"
                },
                {
                  label: "Product Placement",
                  href: "services"
                },
                {
                  label: "Brand Consulting",
                  href: "services"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Client Roster",
                  href: "contact"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "info@rp-rt.com",
                  href: "mailto:info@rp-rt.com"
                },
                {
                  label: "310-806-3672",
                  href: "tel:310-806-3672"
                }
              ]
            }
          ]}
          logoSrc="https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          copyrightText="© 2025 RPRT Sports + Talent Management"
        />
      </div>
    </ThemeProvider>
  );
}