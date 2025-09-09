'use client'

import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, ChevronDoubleDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react"
import { Typewriter } from "@/app/components/typewriter"
import clsx from 'clsx'
import { InstagramLogoIcon, TiktokLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import Shopee from '../../public/shopee_logo.svg';
import Toco from '../../public/logo-toco-invert.svg';


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

  const links = {
    "instagram": "https://www.instagram.com/cottonsong.id",
    "tiktok": "https://www.tiktok.com/@cottonsong.id",
    "whatsapp": "https://wa.me/62895351069643",
    "shopee": "https://shopee.co.id/artems.id",
    "toco": "https://toco.id/store/cottonsong"
  }

  const socialMedias = [
    {icon: InstagramLogoIcon, name: "Instagram", href: links.instagram},
    {icon: TiktokLogoIcon, name: "Tiktok", href: links.tiktok},
    {icon: WhatsappLogoIcon, name: "WhatsApp", href: links.whatsapp},
    {icon: Shopee, name: "Shopee", href: links.shopee},
    {icon: Toco, name: "Toco", href: links.toco},
  ]

  return (
    <div className="flex flex-col bg-white">
      <motion.header
        className="fixed inset-x-0 w-screen z-50 px-6 shadow-lg"
        style={{
          "--c1": useTransform(heroScroll, [0, 1], ["#A5B37900", "#A5B379FF"]),
          "--c2": useTransform(heroScroll, [0, 1], ["#81885900", "#818859FF"]),
          background: "linear-gradient(85deg, var(--c1) 20%, var(--c2) 80%)",
          paddingTop: useTransform(heroScroll, [0, 1], [8, 4]),
          paddingBottom: useTransform(heroScroll, [0, 1], [8, 4]),
          boxShadow: useTransform(heroScroll, [0.5, 1], ["0 0 0 0 rgba(0,0,0,0)", "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)"])
        }}
      >
        <nav aria-label="Global" className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <div className="-m-1.5 p-1.5">
              <img
                alt=""
                src="/cottonsong_outline.svg"
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </div>
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

      <ScrollPrompt heroScroll={heroScroll} reviewTransition={reviewTransition} reviewScroll={reviewScroll}/>

      <div className="relative isolate flex overflow-hidden pt-24 sm:pt-36 md:pt-40 pb-20 sm:pb-0 px-4 items-start h-screen">
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
      
        <div className="mx-auto my-auto max-w-8xl w-full">
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
                    <div className="flex w-full mt-[6cqw] gap-x-[4cqw]">
                      <motion.a
                        href={links.shopee}
                        className="
                          flex basis-1/2 rounded-lg bg-gray-900/50 border-2 sm:border-3 border-orange-600 px-[4cqw] py-[1.5cqw] justify-center items-center gap-x-[1.5cqw]
                          text-[4.5cqw] sm:text-[3.5cqw] font-medium text-orange-600 shadow-lg 
                          hover:bg-orange-600/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ duration: 1, delay: 4}}
                      >
                        <Shopee className="size-[5cqw] sm:size-[4cqw] transform"/>
                        <p>Shopee</p>
                      </motion.a>
                      <motion.a
                        href={links.tiktok}
                        className="
                          flex basis-1/2 rounded-lg bg-gray-900/50 border-2 sm:border-3 border-gray-300 px-[4cqw] py-[1.5cqw] justify-center items-center gap-x-[1.5cqw]
                          text-[4.5cqw] sm:text-[3.5cqw] font-medium text-gray-300 shadow-lg
                          hover:bg-gray-300/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ duration: 1, delay: 4}}
                      >
                        <TiktokLogoIcon className="size-[5cqw] sm:size-[4cqw] transform"/>
                        <p>TikTok</p>
                      </motion.a>
                    </div>
                    <motion.a
                      href="#"
                      className="
                        flex rounded-lg bg-gray-900/50 border-2 sm:border-3 border-green-600 px-[4cqw] py-[1.5cqw] justify-center items-center gap-x-[1.5cqw]
                        text-[4.5cqw] sm:text-[3.5cqw] font-medium text-green-600 shadow-lg mt-[4cqw]
                        hover:bg-green-600/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      initial={{ opacity: 0}}
                      animate={{ opacity: 1}}
                      transition={{ duration: 1, delay: 4.3}}
                    >
                      <WhatsappLogoIcon className="size-[5cqw] sm:size-[4cqw]"/>
                      <p>Hubungi kami</p>
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

        <div className="relative z-30" style={{filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))"}}>
          <div className="relative flex flex-col bg-cottonsong-brown-200"
            style={{ clipPath: "inset(0 0 0 0 round 0 0 2rem 2rem)"}}
          >
            <div className="absolute inset-0 size-full pointer-events-none">
              <div className="size-full bg-[url(/leaf_texture_crop.webp)] grayscale bg-size-[auto_750px] brightness-50 contrast-300 opacity-100 mix-blend-soft-light bg-repeat"/>
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
              text="Didesain, dijahit, dan dikemas oleh wanita Indonesia untuk wanita Indonesia."
            />
          </div>
        </div>

      <motion.div
          ref={review}
          className="relative w-full h-[300vh] z-20 px-4 sm:px-8 md:px-12 lg:px-16"
        >
          <div className="absolute inset-0 h-full">
            <div className="sticky top-0 h-screen">
              <motion.div className="absolute inset-0 -translate-y-16 h-[calc(100vh+8rem)] pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(120deg, #a5b379 20%, #D397B3 80%)",
                  backgroundSize: "200% 200%",
                  backgroundPosition: useTransform(reviewScroll, [0, 1], ["0% 0%", "100% 100%"])
                }}
              />
              <motion.div 
                className="absolute inset-0 flex mix-blend-soft-light mt-10 sm:mt-12 md:mt-14"
                style = {{ opacity: useTransform(reviewTransition, [0.5, 1], [0, 0.5])}}
              >
                <div className="size-full">  
                  <StarBackground reviewScroll={reviewScroll}/>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="mx-auto h-full max-w-8xl [container-type:inline-size]">
            <div className="relative sticky top-0 flex items-center justify-center h-screen w-full sm:pt-12 md:pt-14
            [mask-image:_linear-gradient(to_right,transparent_0,_black_calc(8cqw),_black_calc(100%-8cqw),transparent_100%)]">
              {/* margin factor: [calc((100vh-50cqw)/2-27.5px)] */}
              <div className="w-full max-h-full py-16 md:aspect-2/1 [container-type:inline-size]">
                <motion.h1
                  className="
                    mb-[4cqw] text-[6cqw] leading-[6.5cqw] md:text-[3.5cqw] md:leading-[4cqw]
                    text-center font-semibold tracking-tight"
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

        <div className="relative z-30" style={{filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))"}}>
          <div className="relative flex flex-col bg-cottonsong-brown-200 pt-10 sm:pt-12 md:pt-14"
            style={{ clipPath: "inset(0 0 0 0 round 2rem 2rem 0 0)"}}
          >
            <div className="absolute inset-0 size-full">
              <div className="size-full bg-[url(/leaf_texture_crop.webp)] grayscale bg-size-[auto_750px] brightness-50 contrast-200 opacity-100 mix-blend-soft-light bg-repeat"/>
            </div>

            <div className="flex flex-col h-[calc(80vh-3.5rem)] sm:h-auto px-4 sm:px-8 md:px-12 lg:px-16">
              <div className="relative group w-full max-w-8xl h-full md:h-auto sm:aspect-1/1 md:aspect-2/1 mx-auto mb-4 lg:mb-8 rounded-[5cqw] overflow-hidden shadow-xl [container-type:inline-size]">
                  <div className="absolute inset-0 pointer-events-none">
                    <img
                      className="absolute inset-0 h-full md:inset-x-0 md:-top-1/3 md:h-auto object-cover z-0 saturate-50 contrast-95 brightness-95 group-hover:saturate-80 group-hover-contrast-100 group-hover:brightness-100"
                      src="/footer_clip.jpg"
                    />
                    <div className="absolute inset-0 isolate [mask-image:_linear-gradient(to_bottom,_black_0,_black_10%,transparent_75%)]">
                      <div className="absolute inset-0 bg-cottonsong-purple-400 z-5"/>
                      <img
                        className="absolute inset-0 h-full md:inset-x-0 md:-top-1/3 md:h-auto object-cover z-10 mix-blend-color-burn [mask-image:_linear-gradient(to_bottom,transparent_-20%,_black_50%)]
                        saturate-80 contrast-95 brightness-95 group-hover:saturate-100 group-hover-contrast-100 group-hover:brightness-100"
                        src="/footer_clip.jpg"
                      />
                    </div>
                    <img
                      className="absolute inset-0 h-full md:inset-x-0 md:-top-1/3 md:h-auto object-cover z-10 brightness-95 group-hover:brightness-100"
                      src="/footer_clip.webp"
                    />
                    <div className="absolute inset-0 bg-cottonsong-green-400 z-15 mix-blend-multiply [mask-image:_linear-gradient(to_top,_black_0,transparent_40%)]"/>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end z-20 bg-cottonsong-brown-600/50 [mask-image:_linear-gradient(to_bottom,transparent_0,_black_60%)]">
                    <div className="flex flex-col h-[50%] items-center justify-center px-6">
                      <Typewriter
                        className="text-center line-clamp-3 text-balance text-2xl leading-7 sm:text-[5cqw] sm:leading-[5.5cqw] md:text-[4.5cqw] md:leading-[5cqw] font-serif font-medium tracking-tight text-cottonsong-brown-200/90"
                        text={"Wear the everlasting elegance you deserve."}
                        method="whileInView"
                        delay={0}
                      />
                      <div className="flex gap-x-[2cqw]">
                        <motion.a
                          href={links.shopee} target="_blank"
                          className="
                            flex rounded-lg bg-gray-900/50 border-2 sm:border-3 border-orange-600 px-[5cqw] py-[0.5cqw] justify-center items-center gap-x-[1cqw]
                            text-md sm:text-[2.5cqw] md:text-[1.5cqw] font-medium text-orange-600 shadow-lg mt-4 md:mt-[2cqw]
                            hover:bg-orange-600/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                          initial={{ opacity: 0}}
                          whileInView={{ opacity: 1}}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.8}}
                        >
                          <Shopee className="size-[2.5cqw] sm:size-[2cqw] transform -translate-y-[0.15cqw]"/>
                          <p>Shop on Shopee</p>
                        </motion.a>
                        <motion.a
                          href={links.tiktok} target="_blank"
                          className="
                            flex rounded-lg bg-gray-900/50 border-2 sm:border-3 border-gray-300 px-[5cqw] py-[0.5cqw] justify-center items-center gap-x-[1cqw]
                            text-md sm:text-[2.5cqw] md:text-[1.5cqw] font-medium text-gray-300 shadow-lg mt-4 md:mt-[2cqw]
                            hover:bg-gray-300/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
                          initial={{ opacity: 0}}
                          whileInView={{ opacity: 1}}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 1.2}}
                        >
                          <TiktokLogoIcon className="size-[2.5cqw] sm:size-[2cqw] transform -translate-y-[0.15cqw]"/>
                          <p>Shop on TikTok</p>
                        </motion.a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="relative z-40 max-w-8xl mx-auto w-full">
              <div className="flex flex-col sm:flex-row justify-between gap-y-4 gap-x-4 pt-8 pb-16 px-4 sm:px-8 md:px-12 lg:px-16">
                <div className="flex sm:basis-1/3 shrink-0 max-w-64">
                  <img
                    alt=""
                    className="basis-1/2 sm:basis-auto sm:w-full sm:h-auto"
                    src="/cottonsong_outline.svg"
                  />
                </div>
                {/* Divider */}
                <div className="h-px w-full sm:w-px sm:self-stretch sm:h-auto bg-cottonsong-brown-500/50"/> 
                <div className="grid grid-cols-3 sm:grid-cols-[max-content_max-content_max-content] grid-flow-row-dense xl:flex gap-x-8 gap-y-2">
                  {socialMedias.map((soc) => {
                    const SocialIcon = soc.icon

                    return (
                      <a href={soc.href} key={soc.name} target="_blank" className="flex group items-center justify-start gap-x-2">
                        <SocialIcon className="size-6 md:size-8 text-cottonsong-brown-700 group-hover:text-cottonsong-brown-600 rounded-[4px]"/>
                        <p className="font-medium text-lg md:text-xl text-cottonsong-brown-700 group-hover:text-cottonsong-brown-600">{soc.name}</p>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

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
      className="relative w-full h-[200vh] px-4 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto h-full max-w-8xl [container-type:inline-size]">
        <div className="relative sticky top-0 flex items-center h-screen w-full pt-10 sm:pt-12 md:pt-14 pb-18 -mt-10 sm:-mt-12 md:-mt-14">
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
                    y: useTransform(sectionScroll, [0, 1], useBreakpoint(768) ? ["0%", "-55%"] : ["0%", "-80%"]),
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
                  (direction === "left" && "5cqw"),
                borderBottomRightRadius: useBreakpoint(768) &&
                  (direction === "left" && "5cqw"),
                borderTopLeftRadius: useBreakpoint(768) &&
                  (direction === "right" && "5cqw"),
                borderBottomLeftRadius: useBreakpoint(768) &&
                  (direction === "right" && "5cqw"),
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
                        font-serif text-left font-semibold tracking-tight text-cottonsong-brown-600"
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
                        font-serif text-left font-semibold tracking-tight text-cottonsong-brown-600"
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
                          font-serif text-left font-semibold tracking-tight text-cottonsong-brown-600"
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
                  text-3xl text-center text-cottonsong-brown-500 font-normal mt-[2cqw]"
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

function ScrollPrompt({ heroScroll, reviewTransition, reviewScroll }) {
  const heroColor = useTransform(heroScroll, [0, 0.3], ["#faefe5", "#a6765b"]);
  const reviewColor = useTransform(reviewTransition, [0, 1], ["#a6765b", "#818859"]);
  const reviewColor2 = useTransform(reviewScroll, [0, 1], ["#818859", "#A86D8F00"]);

  const finalColor = useTransform(
    [heroColor, reviewColor, reviewColor2],
    ([h, r, r2]) => {
      if (reviewScroll.get() > 0) return r2;
      if (reviewTransition.get() > 0) return r;
      return h;
    }
  );

  return (
    <motion.footer
      className="fixed bottom-0 flex w-screen z-50 [container-type:inline-size] pointer-events-none"
    >
      <motion.div 
        className="size-full font-semibold text-md md:text-xl gap-y-4"
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
          <p>Scroll ke bawah</p>
          <ChevronDoubleDownIcon
            className="size-6 md:size-8"
          />
        </motion.div>
      </motion.div >
    </motion.footer>
  )
}

function getReviewImages(n) {
  return Array.from({ length: n }, (_, i) => `/reviews/${i + 1}.jpg`);
}

function CarouselItem({ index, i, img, transitionRef }) {
  // raw distance from active index
  const distance = useTransform(index, (val) => Math.abs(val - i));

  // scale
  const rawScale = useTransform(distance, [0, 1, 2], [1.2, 1.0, 0.9]);
  const scale = useSpring(rawScale, { stiffness: 200, damping: 30 });
  // const transitionScale = useTransform(transitionRef, [0, 1], [0.5, 1]);
  // const combinedScale = useTransform([transitionScale, smoothScale], ([t, s]) => t * s);

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
      className="flex items-center w-[70cqw] md:w-[22cqw] mx-[-5cqw] shrink-0 [container-type:inline-size]"
    >
      <img
        className="h-fit rounded-[4cqw] object-contain shadow-md"
        src={img}
        alt=""
      />
    </motion.li>
  )
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
      const containerRect = container.getBoundingClientRect();
    
      const newOffsets = Array.from(items).map((li) => {
        const liRect = li.getBoundingClientRect();
        const left = liRect.left - containerRect.left; // relative to container
        const liWidth = liRect.width;
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
  const normalized = useTransform(scrollRef, [0.1, 0.9], [0, 1], { clamp: true });

  // snapping index (shifted by EXT for left duplicates)
  const index = useTransform(normalized, (p) => {
    if (offsets.length <= 1) return 0;
    const raw = Math.round(p * (images.length - 1));
    return raw + EXT;
  });

  // target x
  const targetX = useTransform(index, (i) => offsets[i] ?? 0);
  const x = useSpring(targetX, { stiffness: 100, damping: 20 });



  // Allows horizontal dragging to also scroll vertically (UX issue)
  const startXRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableWidth = containerRef.scrollWidth - containerRef.clientWidth;
      const scrollableHeight = document.body.scrollHeight - window.innerHeight;
  
      const scrollFraction = window.scrollY / scrollableHeight;
  
      containerRef.scrollLeft = scrollFraction * scrollableWidth;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startXRef.current;

    window.scrollBy({
      top: -deltaX,
      left: 0,
      behavior: "auto",
    });

    startXRef.current = currentX;
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full pt-[18cqw] md:py-[6cqw]"
      style={{
        contain: 'layout', // VERY IMPORTANT THERE'S AN OBSCURE BUG THAT CAUSES STICKY TO FAIL (thanks claude)
        touchAction: "pan-y",
      }} 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <motion.ul
        ref={listRef}
        className="flex h-full"
        style={{ x }}
      >
        {extendedImages.map((img, i) => (
          <CarouselItem
            key={i}
            index={index}
            i={i}
            img={img}
            transitionRef={transitionRef}
          />
        ))}
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

function StarItem({ star, i, reviewScroll, starVariant }) {
  const scrollTranslate = useTransform(reviewScroll, [0, 1], ["0%", `${-80*star.translateFactor^2}%`]);
  const scrollRotate = useTransform(reviewScroll, [0, 1], [0, 30*star.rotateFactor^2]);

  return (
    <motion.div
      key={i + "div"}
      className="absolute flex -translate-x-1/2 -translate-y-1/2 "
      style={{
        y: scrollTranslate,
        width: `max(${star.size}cqw, ${star.size}cqh)`,
        height: `max(${star.size}cqw, ${star.size}cqh)`,
      }}
      custom={star}
      variants={starVariant}
    >
      <motion.svg
        key={i + "svg"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="fill-black"
        style={{ rotate: scrollRotate }}
      >
        <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
      </motion.svg>
    </motion.div>
  );
}

function StarBackground({ reviewScroll }) {
  const starPositions = [
    { size: 28, x: 25, y: -25, rotate: -20, opacity: 0.2, translateFactor: 0.2, rotateFactor: -0.2},
    { size: 20, x: -25, y: -20, rotate: 15, opacity: 0.35, translateFactor: 0.6, rotateFactor: 0.6},
    { size: 24, x: 0, y: 40, rotate: -10, opacity: 0.3, translateFactor: 0.4, rotateFactor: -0.4},
    { size: 16, x: 30, y: 25, rotate: 25, opacity: 0.55, translateFactor: 1, rotateFactor: 1},
    { size: 18, x: -35, y: 20, rotate: 45, opacity: 0.5, translateFactor: 0.8, rotateFactor: -0.8},
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const starVariant = {
    hidden: {
      scale: 0.8,
      left: "50%",
      top: "50%",
      rotate: -180,
      opacity: 0,
    },
    show: (star) => ({
      scale: 1,
      left: `calc(50% + ${star.x}%)`,
      top: `calc(50% + ${star.y}%)`,
      rotate: star.rotate,
      opacity: star.opacity,
      transition: {
        type: "spring",
        duration: 2,
      },
    }),
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "all" }}
      className="relative w-full h-full overflow-hidden"
    >
      {starPositions.map((star, i) => (
        <StarItem
          key= {i}
          star={star}
          reviewScroll={reviewScroll}
          starVariant={starVariant}
        />
      ))}
    </motion.div>
  );
}