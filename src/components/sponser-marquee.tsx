import { motion } from 'framer-motion';
import Image from 'next/image';

const SponsorMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Motion div that wraps the logos */}
      <motion.div
        className="flex space-x-48" // Tailwind flex for horizontal layout and space between logos
        animate={{ x: ['100%', '-100%'] }} // Animate from right to left
        transition={{
          x: {
            repeat: Infinity, // Infinite scrolling
            repeatType: 'loop',
            duration: 30, // Slower speed (adjusted to 30 for a slower scroll)
            ease: 'linear', // Smooth constant scrolling

          },
        }}
        whileHover={{ transition: { x: { duration: 0 } } }}
      >
        {/* Sponsor logos using Next.js Image component */}
        <div className="h-64"> {/* Increased height */}
          <Image
            src="/jindal-new-logo.png"
            alt="Sponsor 1"
            width={300} // Increased width
            height={100} // Increased height
            objectFit="contain" // Keeps the logo aspect ratio
          />
        </div>
        <div className="h-64"> {/* Increased height */}
          <Image
            src="/jindal-new-logo.png"
            alt="Sponsor 2"
            width={300} // Increased width
            height={100} // Increased height
            objectFit="contain"
          />
        </div>
        <div className="h-64"> {/* Increased height */}
          <Image
            src="/jindal-new-logo.png"
            alt="Sponsor 3"
            width={300} // Increased width
            height={100} // Increased height
            objectFit="contain"
          />
        </div>
        {/* Add more logos as needed */}
      </motion.div>
    </div>
  );
};

export default SponsorMarquee;
