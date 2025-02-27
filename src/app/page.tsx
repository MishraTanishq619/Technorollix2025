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
      <div className="flex flex-col items-center justify-center h-screen mt-16">
        {/* <div className="absolute top-0 right-0 w-1/5 h-auto">
          <Image
            src="/homeDecor.svg"
            alt="Decoration"
            width={500}
            height={500}
            className="opacity-100"
          />
        </div>
        <div className="absolute top-0 right-0 w-1/5 h-auto">
        <Image
            src="/homeDecor1.svg"
            alt="Decoration"
            width={500}
            height={500}
            className="opacity-100"
          />
        </div>
        <div className="absolute left-0 top-3/4 w-1/5">
          <Image
            src="/homeDecor3.svg"
            alt="Decoration"
            width={500}
            height={500}
            className="opacity-100"
          />
        </div>
        <div className="absolute top-0 left-0 w-1/5">
          <Image
            src="/homeDecor2.svg"
            alt="Decoration"
            width={500}
            height={500}
            className="opacity-100"
          />
        </div>
        <div className="absolute right-0 bottom-0 w-60">
          <Image
            src="/homeDecor5.svg"
            alt="Decoration"
            width={500}
            height={500}
            className="opacity-100"
          />
        </div> */}
        <BackgroundVideo />
        <Image
          src="/technorollix.png"
          alt="technorollix"
          width={909}
          height={265}
        />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          <img
            src="/background.svg"
            className="w-full h-auto opacity-100"
            alt="Scrolling Background"
          />
        </div>
        <p className="mt-2 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400 tracking-[0.15em]">
          Central India's Biggest Techno-Cultural Fest
        </p>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Register Button */}
        <ButtonLanding label="Register" />
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
