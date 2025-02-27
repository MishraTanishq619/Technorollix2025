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
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen px-4 md:px-0">
        <BackgroundVideo />
        <Image
          src="/technorollix.png"
          alt="technorollix"
          width={909}
          height={265}
          className="w-full max-w-[850px] md:w-[600px] h-auto p-4 mt-10 md:mt-28 sm:mt-32"
        />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          <Image
            width={500}
            height={500}
            src="/background.svg"
            className="w-full h-auto opacity-100"
            alt="Scrolling Background"
          />
        </div>
        <p className="mt-2 text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400 tracking-[0.15em] text-center">
          Central India's Biggest Annual Techno-Cultural Fest
        </p>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Register Button */}
        <ButtonLanding label="Register" link="/register" />
      </div>

      {/* EventsSection */}
      <section className="mt-28">
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