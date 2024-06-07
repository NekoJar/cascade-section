"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroContainer = useRef(null);
  const aboutContainer = useRef(null);

  const { scrollYProgress: heroScrollYProgress } = useScroll({
    target: heroContainer,
    offset: ["start start", "end start"],
    smooth: 1,
  });
  const heroOpacity = useTransform(heroScrollYProgress, [0, 0.5], [1, 0]);

  const { scrollYProgress: aboutScrollYProgress } = useScroll({
    target: aboutContainer,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: aboutOpacityScrollYProgress } = useScroll({
    target: aboutContainer,
    offset: ["start end", "end end"],
  });

  const aboutHeight = useTransform(aboutScrollYProgress, [0, 1], [0, -2000]);
  const aboutOpacity = useTransform(
    aboutOpacityScrollYProgress,
    [0, 0.5],
    [0, 1]
  );

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: Event) => {
      console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <div
        className="flex flex-col justify-center items-center text-white h-screen"
        ref={heroContainer}
      >
        <motion.div style={{ opacity: heroOpacity }} className="fixed">
          <p className="italic text-xs pr-36 sm:text-base sm:pr-[22rem]">
            welcome
          </p>
          <h1 className="text-6xl sm:text-9xl font-extrabold">fluiecx</h1>
        </motion.div>
      </div>
      <motion.div
        className="text-white p-4 sm:p-8 h-screen relative z-[1]"
        ref={aboutContainer}
        style={{ opacity: aboutOpacity }}
      >
        <motion.div style={{ height: aboutHeight }}>
          <h3 className="text-6xl sm:text-9xl font-extrabold border-b border-white pb-4 mb-4">
            About
          </h3>
          <p className="text-sm sm:text-base text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium perferendis odio officia quos soluta maxime unde eaque
            tempora ad, sunt mollitia quam cumque magni deserunt ratione quidem
            magnam assumenda voluptate!
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
