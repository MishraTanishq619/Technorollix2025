"use client";
import AboutSection from "@/components/aboutSection";
import BackgroundVideo from "@/components/background-video";
import CountdownTimer from "@/components/countdown-timer";
import EventSection from "@/components/eventsSection";
import FAQSection from "@/components/faq";
// import Navbar from "@/components/nav";
import Sponser from "@/components/sponser";
import ButtonLanding from "@/components/sub-component/button-landing";
// import CardwithImage from "@/components/sub-component/card-with-image";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen mt-16">
        <BackgroundVideo />
        <Image src="/technorollix.png" alt="technorollix" width={600} height={300} />
        <p className="mt-2 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400 tracking-[0.15em]">
          Central India's Biggest Techno-Cultural Fest
        </p>

        {/* Countdown Timer */}
        <CountdownTimer />
        
        {/* Register Button */}
        <ButtonLanding label="Register"/>
      </div>

      {/* EventsSection */}
      <section>
        <EventSection />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <Sponser />
      </section>
      <section>
        <FAQSection />
      </section>
    </>
  );
}
