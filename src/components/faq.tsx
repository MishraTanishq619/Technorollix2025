import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { GoPlus } from "react-icons/go";

const FAQSection = () => {
  return (
    <div className="text-white text-center max-w-3xl mx-auto my-10">
      <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] mb-6">
        FAQ’s
      </h2>
      <p className="text-xl mb-8 font-medium">
        ANSWERS TO ALL YOUR QUESTIONS
      </p>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold bg-[#4b1d12] p-4 rounded-lg text-left border border-orange-400">
            What is Technorollix, and how can I participate?
            <GoPlus/>
          </AccordionTrigger>
          <AccordionContent className="bg-[#2c0a02] p-4 text-gray-300 border border-orange-400 rounded-lg">
            Technorollix is an annual tech and cultural fest. You can register
            online via our website to participate in events.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold bg-[#4b1d12] p-4 rounded-lg text-left border border-orange-400">
            What events and competitions are available, and how do I register?
            <GoPlus/>
          </AccordionTrigger>
          <AccordionContent className="bg-[#2c0a02] p-4 text-gray-300 border-2 border-orange-400 rounded-lg">
            The fest includes various tech, cultural, and gaming events.
            Registration is available on our official website.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold bg-[#4b1d12] p-4 rounded-lg text-left border border-orange-400">
            Are there any facilities for outstation participants, such as
            accommodation and food?
            <GoPlus/>
          </AccordionTrigger>
          <AccordionContent className="bg-[#2c0a02] p-4 text-gray-300 border border-orange-400 rounded-lg">
            Yes, we provide accommodation and food facilities for outstation
            participants. Details are available on the website.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-semibold bg-[#4b1d12] p-4 rounded-lg text-left border border-orange-400">
            How can companies or brands collaborate as sponsors, and what
            benefits do they get?
            <GoPlus/>
          </AccordionTrigger>
          <AccordionContent className="bg-[#2c0a02] p-4 text-gray-300 border border-orange-400 rounded-lg">
            Sponsors receive branding opportunities, promotional benefits, and
            engagement with a large audience.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-semibold bg-[#4b1d12] p-4 rounded-lg text-left border border-orange-400">
            Where can I find event schedules, updates, and whom should I contact
            for queries?
            <GoPlus/>
          </AccordionTrigger>
          <AccordionContent className="bg-[#2c0a02] p-4 text-gray-300 border border-orange-400 rounded-lg">
            The event schedule and contact details are available on our official
            website and social media pages.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg font-semibold bg-[#4b1d12] p-4 rounded-lg text-left border border-orange-400">
            Can I attend the fest without participating in any events?
            <GoPlus/>
          </AccordionTrigger>
          <AccordionContent className="bg-[#2c0a02] p-4 text-gray-300 border border-orange-400 rounded-lg">
            Yes! You can attend and enjoy the fest even if you’re not
            participating in any competitions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;
