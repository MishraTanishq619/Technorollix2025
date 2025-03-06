import { motion } from 'framer-motion';
import Image from 'next/image';

const SponsorMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex space-x-48"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
        whileHover={{ transition: { x: { duration: 0 } } }}
      >
        <div className="h-64">
          <Image src="/jindal-new-logo.png" alt="Sponsor 1" width={300} height={100} objectFit="contain" />
        </div>
        <div className="h-64">
          <Image src="/jindal-new-logo.png" alt="Sponsor 2" width={300} height={100} objectFit="contain" />
        </div>
        <div className="h-64">
          <Image src="/jindal-new-logo.png" alt="Sponsor 3" width={300} height={100} objectFit="contain" />
        </div>
      </motion.div>
    </div>
  );
};

export default SponsorMarquee;
