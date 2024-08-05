import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const InfiniteCarousel = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: { duration: 10, ease: "linear", repeat: Infinity },
    });
  }, [controls]);

  return (
    <div className="relative w-full h-20 overflow-hidden">
      <motion.div
        className="flex flex-row items-center justify-center gap-2"
        animate={controls}
        initial={{ x: "0%" }}
      >
        <Image
          src="/svg/WTTJ.svg"
          width={130}
          height={20}
          alt=""
          className="grayscale"
        />
        <Image
          src="/svg/SB.svg"
          width={130}
          height={20}
          alt=""
          className="grayscale"
        />
        <Image
          src="/svg/contentsquare-seeklogo.svg"
          width={130}
          height={20}
          alt=""
          className="grayscale"
        />
        {/* Ajoutez des images dupliquées pour un défilement plus fluide */}
        <Image
          src="/svg/WTTJ.svg"
          width={130}
          height={20}
          alt=""
          className="grayscale"
        />
        <Image
          src="/svg/SB.svg"
          width={130}
          height={20}
          alt=""
          className="grayscale"
        />
        <Image
          src="/svg/contentsquare-seeklogo.svg"
          width={130}
          height={20}
          alt=""
          className="grayscale"
        />
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
