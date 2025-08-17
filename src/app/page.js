'use client'

import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, ChevronDoubleDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import { Typewriter } from "@/app/components/typewriter"
import clsx from 'clsx'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const hero = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: hero,
    offset: ["start start", "end start"], 
  });

  const review = useRef(null);
  const { scrollYProgress: reviewTransition } = useScroll({
    target: review,
    offset: ["start end", "start start"], 
  });

  const { scrollYProgress: reviewScroll } = useScroll({
    target: review,
    offset: ["start start", "end end"], 
  });

  return (
    <div className="flex flex-col bg-white">
      <motion.header
        className="absolute fixed inset-x-0 top-0 z-50 px-6"
        style={{
          "--c1": useTransform(heroScroll, [0, 1], ["#A5B37900", "#A5B379FF"]),
          "--c2": useTransform(heroScroll, [0, 1], ["#81885900", "#818859FF"]),
          background: "linear-gradient(85deg, var(--c1) 20%, var(--c2) 80%)",
          paddingTop: useTransform(heroScroll, [0, 1], [8, 4]),
          paddingBottom: useTransform(heroScroll, [0, 1], [8, 4])
        }}
      >
        <nav aria-label="Global" className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/cottonsong_outline.svg"
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </a>
          </div>
          {/* <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
        {/* <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-linear-to-br from-[#A5B379] to-[#818859] p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="/cottonsong_outline.svg"
                    className="h-8 w-auto"
                  />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog> */}
      </motion.header>

      <ScrollPrompt heroScroll={heroScroll} reviewTransition={reviewTransition}/>

      <div className="relative isolate flex overflow-hidden pt-10 sm:pt-12 md:pt-14 pb-20 sm:pb-0 px-4 flex items-center h-screen">
        <motion.img
          ref={hero}
          alt=""
          src="final_bg.jpg"
          className="absolute inset-0 -z-10 size-full object-cover pointer-events-none"
          initial={{ filter: "brightness(1)"}}
          whileInView={{ filter: "brightness(0.75)"}}
          transition={{ duration: 2}}
          style={{ opacity: useTransform(heroScroll, [0.5, 1], [1, 0])}}
        />
      
        <div className="mx-auto max-w-8xl w-full pt-16 sm:pt-24">
          <div className="relative mx-auto h-full max-h-screen max-w-full aspect-4/5 scale-110 sm:scale-100 origin-top-left">
            <div className="absolute left-0 w-4/5 h-full flex flex-col [container-type:inline-size]">
              <motion.div
                className="relative size-full"
                initial={{ opacity: 0, x: -200}}
                whileInView={{ opacity: 1, x: 0}}
                viewport={{ once: true }}
                transition={{ type: "tween", duration: 1, delay: 0.5}}
              >
                <motion.div
                  className="absolute h-full flex rounded-2xl bg-black/25 shadow-md shadow-black px-[7cqw] pt-[17cqw]"
                  style={{ opacity: useTransform(heroScroll, [0, 1], [1, 0]), x: useTransform(heroScroll, [0, 1], [0, -200])}}
                >
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <div className="size-fit overflow-hidden">
                        <motion.h1
                          className="
                            text-[14cqw] leading-[15cqw]
                            font-serif text-left font-semibold tracking-tight text-cottonsong-brown-200"
                            initial={{ y: "100%"}}
                            animate={{ y: "-1cqw"}}
                            transition={{ type: "tween", duration: 1, delay: 1.1}}
                          >
                          Sustainably
                        </motion.h1>
                      </div>
                      <div className="size-fit overflow-hidden">
                        <motion.h1
                          className="
                            text-[14cqw] leading-[15cqw]
                            font-serif text-left font-semibold tracking-tight text-cottonsong-brown-200"
                          initial={{ y: "100%" }}
                          animate={{ y: "-1cqw" }}
                          transition={{ type: "tween", duration: 1, delay: 1.6}}
                        >
                          aesthetic.
                        </motion.h1>
                      </div>
                      <Typewriter className="
                        text-[5.5cqw] sm:text-[4.5cqw] leading-[6.5cqw] sm:leading-[5cqw]
                        text-3xl text-white font-normal w-[64cqw] mt-[3cqw]"
                        text="Kenakan estetika cottagecore dengan bahan dan proses produksi yang baik untuk bumi."
                        method="animate"
                        delay={2.5}
                      />
                    </div>
                    <motion.a
                      href="#"
                      className="
                        flex rounded-lg bg-gray-900/50 border-2 sm:border-3 border-orange-600 px-[4cqw] py-[1.5cqw] justify-center items-center gap-x-[2.5cqw]
                        text-[4.5cqw] sm:text-[3.5cqw] font-medium text-orange-600 shadow-lg mt-[6cqw]
                        hover:bg-orange-600/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                      initial={{ opacity: 0}}
                      animate={{ opacity: 1}}
                      transition={{ typduration: 1, delay: 4}}
                    >
                      <p>Lihat katalog</p>
                      <img src="shopee_logo.svg" className="size-[5cqw] sm:size-[4cqw] transform -translate-y-[0.4cqw]">
                      </img>
                    </motion.a>
                    <motion.a
                      href="#"
                      className="
                        flex rounded-lg bg-gray-900/50 border-2 sm:border-3 border-green-600 px-[4cqw] py-[1.5cqw] justify-center items-center gap-x-[2.5cqw]
                        text-[4.5cqw] sm:text-[3.5cqw] font-medium text-green-600 shadow-lg mt-[4cqw]
                        hover:bg-green-600/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      initial={{ opacity: 0}}
                      animate={{ opacity: 1}}
                      transition={{ typduration: 1, delay: 4.3}}
                    >
                      <p>Hubungi kami</p>
                      <img src="whatsapp_logo.svg" className="size-[5cqw] sm:size-[4cqw]">
                      </img>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            <div
              className="absolute right-0 w-4/5 z-10 h-5 [container-type:inline-size] pointer-events-none"
            >
              <motion.div
                className="relative size-full"
                initial={{ opacity: 0, x: 200}}
                animate={{ opacity: 1, x: 0}}
                transition={{ type: "spring", bounce: 0.3, duration: 2.5, delay: 1}}
              >
                <motion.img
                  alt=""
                  src="foreground_blur.webp"
                  className="absolute top-[-61cqw] transform scale-140 origin-top-left object-cover"
                  style={{ opacity: useTransform(heroScroll, [0, 1], [1, 0]), x: useTransform(heroScroll, [0, 1], [0, 200])}}
                />

              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Section
        direction="left"
        imgSource="/3.webp"
        h1Line1="Eco-conscious"
        h1Line2="fabric"
        text="Proses produksi zero-waste menggunakan kain 100% katun yang mudah terurai."
      />
      <Section
        direction="right"
        imgSource="/2.webp"
        h1Line1="Eco-friendly"
        h1Line2="packaging"
        text="Pakaian dikirim dengan kemasan kertas dan plastik bio-degradable berbahan singkong."
      />
      <Section
        direction="left"
        imgSource="/4.webp"
        h1Line1="Inclusive size"
        h1Line2="XS-XXXXL"
        text="Pasti ada dress untukmu terlepas dari bentuk badanmu."
      />
      <Section
        direction="right"
        imgSource="/1.webp"
        h1Line1="Made by"
        h1Line2="Indonesian"
        h1Line3="women"
        text="Dibuat oleh wanita Indonesia untuk wanita Indonesia."
      />

      <motion.div
        ref={review}
        className="w-full h-[300vh] px-4 sm:px-8 md:px-12 lg:px-16"
        style = {{ 
          "--c1": useTransform(reviewTransition, [0.5, 1], ["#faefe5", "#a5b379"]),
          "--c2": useTransform(reviewTransition, [0.5, 1], ["#faefe5", "#D397B3"]),
          background: "linear-gradient(120deg, var(--c1) 20%, var(--c2) 80%)"
        }}
      >
        <div className="mx-auto h-full max-w-8xl [container-type:inline-size]">
          <div className="relative sticky top-0 flex items-center justify-center h-screen w-full pt-10 sm:pt-12 md:pt-14 -mt-10 sm:-mt-12 md:-mt-14
          [mask-image:_linear-gradient(to_right,transparent_0,_black_calc(8cqw),_black_calc(100%-8cqw),transparent_100%)]">
            {/* margin factor: [calc((100vh-50cqw)/2-27.5px)] */}
            <div className="w-full max-h-full py-4 sm:py-4 md:aspect-2/1 [container-type:inline-size]">
              <motion.h1
                className="
                  mb-[4cqw] text-[6cqw] leading-[6.5cqw] md:text-[3.5cqw] md:leading-[4cqw]
                  font-serif text-center font-semibold tracking-tight"
                  initial={{ y: "100%"}}
                  whileInView={{ y: 0}}
                  viewport={{ once: true }}
                  transition={{ type: "tween", duration: 0.8}}
                  style = {{ color: useTransform(reviewScroll, [0, 1], ["#5a6341", "#794F6B"]) }}
                >
                  What our customers say
              </motion.h1>
              <ReviewCarousel transitionRef={reviewTransition} scrollRef={reviewScroll}/>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function Section({ direction, imgSource, h1Line1, h1Line2, h1Line3, text }) {
  const sectionContainer = useRef(null);
  const { scrollYProgress: sectionScroll } = useScroll({
    target: sectionContainer,
    offset: ["start end", "end start"], 
  });
  
  const transformBorderRadius = useTransform(sectionScroll, [0.2, 0.8], ["0cqw", "5cqw"])
  const transformClipLeft = useTransform(sectionScroll, [0, 0.5, 1], ["inset(0% 0% 0% 50%)", "inset(0% 0% 0% 10%)", "inset(0% 0% 0% 50%)"])
  const transformClipRight = useTransform(sectionScroll, [0, 0.5, 1], ["inset(0% 50% 0% 0%)", "inset(0% 10% 0% 0%)", "inset(0% 50% 0% 0%)"])
  const transformClipLeftRight = useTransform(sectionScroll, [0, 0.5, 1], ["inset(0% 0% 0% 50%)", "inset(0% 20% 0% 20%)", "inset(0% 50% 0% 0%)"])
  const transformClipRightLeft = useTransform(sectionScroll, [0, 0.5, 1], ["inset(0% 50% 0% 0%)", "inset(0% 20% 0% 20%)", "inset(0% 0% 0% 50%)"])
  const transformClipLeftText = useTransform(sectionScroll, [0, 0.4, 0.6, 1], ["inset(0% 0% 0% 10%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(0% 10% 0% 0%)"])
  const transformClipRightText = useTransform(sectionScroll, [0, 0.4, 0.6, 1], ["inset(0% 10% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 10%)"])
  const transformTextParallaxLarge = useTransform(sectionScroll, [0, 1], ["30%", "-40%"])

  return (
    
    <div 
      ref={sectionContainer}
      className="w-full h-[200vh] bg-cottonsong-brown-200 px-4 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto h-full max-w-8xl [container-type:inline-size]">
        <div className="relative sticky top-0 flex items-center h-screen w-full pt-10 sm:pt-12 md:pt-14 -mt-10 sm:-mt-12 md:-mt-14">
          {/* margin factor: [calc((100vh-50cqw)/2-27.5px)] */}
          <div className="w-full grid grid-rows-3 max-h-full py-20 sm:py-4 md:grid-rows-1 md:grid-cols-3 md:aspect-2/1 [container-type:inline-size]">
            <motion.div
              className={clsx("row-span-2 md:col-span-2 overflow-hidden", direction === "right" && "order-2")}
              style={{
              }}
            >
              <div
                className="flex justify-end overflow-hidden"
              >
                <motion.img
                  className="pl-[-32] object-cover scale-200 origin-top"
                  src={imgSource}
                  style={{
                    y: useTransform(sectionScroll, [0, 1], ["0%", "-70%"]),
                    clipPath: useBreakpoint(768) ?
                      (direction === "left" ? transformClipLeft : transformClipRight):
                      (direction === "left" ? transformClipLeftRight : transformClipRightLeft)
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              className=" bg-cottonsong-brown-300"
              style={{
                borderTopRightRadius: useBreakpoint(768) &&
                  (direction === "left" && transformBorderRadius),
                borderBottomRightRadius: useBreakpoint(768) &&
                  (direction === "left" && transformBorderRadius),
                borderTopLeftRadius: useBreakpoint(768) &&
                  (direction === "right" && transformBorderRadius),
                borderBottomLeftRadius: useBreakpoint(768) &&
                  (direction === "right" && transformBorderRadius),
                clipPath: useBreakpoint(768) ?
                  "inset(0% 0% 0% 0%)" :
                  (direction === "left" ? transformClipRightText : transformClipLeftText)
              }}
            >
              <motion.div
                className="size-full flex flex-col items-center justify-center px-[6cqw] md:px-[3cqw]"
                style={{ y: useBreakpoint(768) && transformTextParallaxLarge }}
              >
                <div className="flex flex-col items-center">
                  <div className="size-fit overflow-hidden">
                    <motion.h1
                      className="
                        text-[6cqw] leading-[6.5cqw] md:text-[3.5cqw] md:leading-[4cqw]
                        font-serif text-left font-semibold tracking-tight text-cottonsong-brown-500"
                        initial={{ y: "100%"}}
                        whileInView={{ y: 0}}
                        viewport={{ once: true }}
                        transition={{ type: "tween", duration: 0.8}}
                      >
                      {h1Line1}
                    </motion.h1>
                  </div>
                  <div className="size-fit overflow-hidden">
                    <motion.h1
                      className="
                        text-[6cqw] leading-[6.5cqw] md:text-[3.5cqw] md:leading-[4cqw]
                        font-serif text-left font-semibold tracking-tight text-cottonsong-brown-500"
                        initial={{ y: "100%"}}
                        whileInView={{ y: 0}}
                        viewport={{ once: true }}
                        transition={{ type: "tween", duration: 0.8, delay: 0.5}}
                      >
                      {h1Line2}
                    </motion.h1>
                  </div>
                  {h1Line3 && (
                    <div className="size-fit overflow-hidden">
                      <motion.h1
                        className="
                          text-[6cqw] leading-[6.5cqw] md:text-[3.5cqw] md:leading-[4cqw]
                          font-serif text-left font-semibold tracking-tight text-cottonsong-brown-500"
                          initial={{ y: "100%"}}
                          whileInView={{ y: 0}}
                          viewport={{ once: true }}
                          transition={{ type: "tween", duration: 0.8, delay: 1}}
                        >
                        {h1Line3}
                      </motion.h1>
                    </div>
                  )}
                </div>
                <Typewriter className="
                  text-[5cqw] leading-[5.5cqw] md:text-[2cqw] md:leading-[2.5cqw]
                  text-3xl text-center text-cottonsong-brown-400 font-normal mt-[3cqw]"
                  text={text}
                  method="whileInView"
                  delay={1.2}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScrollPrompt({ heroScroll, reviewTransition }) {
  const heroColor = useTransform(heroScroll, [0, 0.3], ["#faefe5", "#a6765b"]);
  const reviewColor = useTransform(reviewTransition, [0, 1], ["#a6765b", "#A86D8F"]);
  const finalColor = useTransform(
    [reviewTransition, heroColor, reviewColor],
    ([r, h, rv]) => (r <= 0.001 ? h : rv)
  );

  return (
    <motion.div
      className="fixed bottom-0 flex w-full z-50 [container-type:inline-size]"
    >
      <motion.div 
        className="size-full font-semibold text-md md:text-xl gap-y-4 pointer-events-none"
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 4.2 }}
        style={{
          color: finalColor,
          paddingBottom: useTransform(heroScroll, [0, 0.5], ["36px", "12px"])
        }}
      >
        <motion.div
          className="flex flex-col w-full items-center opacity-80"
          animate={{ y: ["0%", "-10%", "0%"] }} // up and down
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <p>Scroll down</p>
          <ChevronDoubleDownIcon
            className="size-6 md:size-8"
          />
        </motion.div>
      </motion.div >
    </motion.div>
  )
}

function getReviewImages(n) {
  return Array.from({ length: n }, (_, i) => `/reviews/${i + 1}.jpg`);
}

function ReviewCarousel({ transitionRef, scrollRef }) {
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const [offsets, setOffsets] = useState([0]);

  const images = getReviewImages(11);
  const EXT = 4; // duplicates on each side
  const extendedImages = [
    ...images.slice(-EXT),   // left duplicates (first few images)
    ...images,                  // real images
    ...images.slice(0, EXT),      // right duplicates (last few images)
  ];

  // Measure offsets (deferred to avoid blocking scroll)
  useLayoutEffect(() => {
    const container = containerRef.current;
    const items = listRef.current?.children;
    if (!container || !items) return;

    const measure = () => {
      const containerWidth = container.clientWidth;
      const newOffsets = Array.from(items).map((li) => {
        const left = li.offsetLeft;
        const liWidth = li.getBoundingClientRect().width;
        return -(left - (containerWidth / 2 - liWidth / 2));
      });
      setOffsets(newOffsets);
    };

    const rafId = requestAnimationFrame(measure);

    const ro = new ResizeObserver(() => requestAnimationFrame(measure));
    ro.observe(container);
    Array.from(items).forEach((el) => ro.observe(el));

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [extendedImages.length]);

  // normalize scroll to 0–1 only in the middle of the section
  const normalized = useTransform(scrollRef, [0.05, 0.95], [0, 1], { clamp: true });

  // snapping index (shifted by EXT for left duplicates)
  const index = useTransform(normalized, (p) => {
    if (offsets.length <= 1) return 0;
    const raw = Math.round(p * (images.length - 1));
    return raw + EXT;
  });

  // target x
  const targetX = useTransform(index, (i) => offsets[i] ?? 0);
  const x = useSpring(targetX, { stiffness: 100, damping: 20 });

  return (
    <div
      ref={containerRef}
      className="h-full pt-[24cqw] md:py-[6cqw]"
      style={{ contain: 'layout' }} // VERY IMPORTANT
    >
      <motion.ul
        ref={listRef}
        className="flex h-full"
        style={{ x }}
      >
        {extendedImages.map((img, i) => {
          // raw distance from active index
          const distance = useTransform(index, (val) => Math.abs(val - i));

          // scale
          const rawScale = useTransform(distance, [0, 1, 2], [1.2, 1.0, 0.9]);
          const smoothScale = useSpring(rawScale, { stiffness: 200, damping: 30 });
          const transitionScale = useTransform(transitionRef, [0, 1], [0.5, 1]);
          const scale = useTransform([transitionScale, smoothScale], ([t, s]) => t * s);

          // opacity animation
          const rawOpacity = useTransform(distance, [0, 1, 2, 3, 4], [1.0, 0.6, 0.3, 0.1, 0]);
          const smoothOpacity = useSpring(rawOpacity, { stiffness: 200, damping: 30 });
          const opacity = useTransform([transitionRef, smoothOpacity], ([t, s]) => t * s);

          // z-index
          const zIndex = useTransform(index, (val) => {
            const dist = val - i;             // positive = right, negative = left
            if (dist === 0) return 30;        // center
            if (dist > 0) return 25 - dist;   // right side
            return 25 + dist;                 // left side
          });

          return (
            <motion.li
              key={i}
              style={{ scale, opacity, zIndex }}
              className="flex items-center w-[70cqw] md:w-[25cqw] mx-[-5cqw] shrink-0 [container-type:inline-size]"
            >
              <img
                className="h-fit rounded-[4cqw] object-contain"
                src={img}
                alt=""
              />
            </motion.li>
          )
        })}
      </motion.ul>
    </div>
  );
}

function useBreakpoint(minWidth) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);
    const updateMatch = () => setMatches(mediaQuery.matches);

    updateMatch(); // run once on mount
    mediaQuery.addEventListener("change", updateMatch);
    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, [minWidth]);

  return matches;
}