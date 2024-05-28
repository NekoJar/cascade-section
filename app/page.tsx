"use client";

import Lenis from "lenis";

export default function Home() {
  const lenis = new Lenis();

  lenis.on("scroll", (e: Event) => {
    console.log(e);
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <main>
      <div className="flex flex-col justify-center items-center text-white h-screen">
        <p className="italic text-xs pr-36 sm:text-base sm:pr-[22rem]">
          welcome
        </p>
        <h1 className="text-6xl sm:text-9xl font-extrabold">fluiecx</h1>
      </div>
      <div className="text-white p-4 sm:p-8 h-screen">
        <h3 className="text-6xl sm:text-9xl font-extrabold border-b border-white pb-4 mb-4">
          About
        </h3>
        <p className="text-sm sm:text-base text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          perferendis odio officia quos soluta maxime unde eaque tempora ad,
          sunt mollitia quam cumque magni deserunt ratione quidem magnam
          assumenda voluptate!
        </p>
      </div>
    </main>
  );
}
