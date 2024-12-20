"use client";

import CardTestimonial from "@/components/CardTestimonial";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { dataProducts, slicedTestimonials } from "../data/dummyData";
import React, { Suspense, lazy } from "react";
import FadeAnim from "@/components/FadeAnim";

const LazyFadeAnim = lazy(() => import("@/components/FadeAnim"));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <section className="bg-primary w-full h-48 lg:h-[450px]">
          <HeroSection
            src="/img/hero_dice.jpg"
            width={1000}
            height={200}
            content="Cultivating the Future of Agriculture, Today."
          />
        </section>
        <section className="flex flex-col items-center w-96 lg:w-2/3 py-16 mt-32 lg:mt-24">
          <h1 className="font-PolyRegular text-dark text-3xl lg:text-5xl py-5 lg:py-10">
            Company Overview
          </h1>
          <span className="text-dark text-center text-xs lg:text-base font-inter italic">
            "Dice is a pioneering agriculture company..."
          </span>
        </section>
        <div className="h-[5px] w-full bg-gray-100 lg:my-8" />

        {/* Product & Service */}
        <Suspense fallback={<div>Loading...</div>}>
          <LazyFadeAnim className="py-8 flex flex-col items-center">
            <div className="flex flex-col items-center py-10">
              <h1 className="font-PolyRegular text-dark text-3xl lg:text-5xl p-0 lg:p-2">
                Product & Service
              </h1>
              <span className="font-InterREgular text-sm lg:text-base text-dark">
                Highlight services like
              </span>
            </div>
            <div className="flex lg:flex-col flex-col lg:flex-wrap justify-center items-center gap-3">
              <Image
                src="/img/section_2.jpg"
                width={800}
                height={200}
                alt="product-img"
                className="rounded-lg lg:w-[920px] lg:h-[450px] w-3/4"
                loading="lazy"
              />
              <div className="lg:w-4/5 w-3/4 flex flex-col lg:grid grid-cols-4 lg:mt-5 gap-5 items-start">
                {dataProducts.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 m-1 border-gray-300 flex flex-col lg:items-baseline items-center w-full justify-around min-h-[202px] border-2 rounded-md"
                  >
                    <Image
                      src="/svg/icon_dice.svg"
                      width={40}
                      height={40}
                      alt="icon-dice"
                      className="w-[20%] h-auto"
                      loading="lazy"
                    />
                    <div className="lg:text-left text-center">
                      <h2 className="font-bold text-med text-black">
                        {item.title}
                      </h2>
                      <p className="text-gray-700 italic text-sm">
                        {item.excpert}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="btn my-10 text-white font-PolyRegular text-xl hover:bg-gray-800">
              Discover Our Solution
            </button>
          </LazyFadeAnim>
        </Suspense>

        <div className="h-[5px] w-full bg-gray-100 lg:my-8" />

        {/* Testimonials Section */}
        <Suspense fallback={<div>Loading Testimonials...</div>}>
          <LazyFadeAnim className="flex flex-col items-center py-16">
            <h1 className="font-PolyRegular text-dark text-3xl lg:text-5xl p-2">
              Testimonials
            </h1>
            <span className="font-InterRegular text-sm lg:text-base text-dark">
              Here’s some our testimonial from our customers
            </span>
            <CardTestimonial
              testimonials={slicedTestimonials}
              flex="lg:flex-row flex-col"
            />
          </LazyFadeAnim>
        </Suspense>

        <FadeAnim className="py-16 mb-10 flex flex-col justify-center items-center">
          <h1 className="lg:text-5xl text-3xl text-center font-PolyRegular text-dark italic">
            Cultivating the Future of Agriculture, Today.
          </h1>
          <div className="h-[5px] lg:w-full w-2/3 bg-gray-200 my-8" />
          <Image
            src="/svg/logo_dice.svg"
            width={200}
            height={200}
            alt="logo-dice"
            loading="lazy"
          />
        </FadeAnim>
      </div>
    </div>
  );
}
