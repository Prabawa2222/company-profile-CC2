"use client";

import CardService from "@/components/CardService";
import CardTestimonial from "@/components/CardTestimonial";
import HeroSection from "@/components/HeroSection";
import {
  dataProducts,
  dataServices,
  slicedTestimonials,
} from "@/data/dummyData";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const ServicesPage = () => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft -= 235;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft += 235;
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <div className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="bg-primary w-full h-48 lg:h-[450px]">
          <HeroSection
            src={"/img/hero_dice.jpg"}
            width={1000}
            height={200}
            content={"Product & Service"}
          />
        </section>

        {/* Our Offerings Section */}
        <section className="flex flex-col items-center w-3/4 lg:w-2/3 py-16 mt-32 lg:mt-24">
          <h1 className="font-PolyRegular tracking-tight text-black text-3xl lg:text-5xl py-5 lg:py-10">
            Our Offerings
          </h1>

          {/* Horizontal Scrollable Container */}
          <div className="relative w-full">
            <div
              id="slider"
              className="flex overflow-x-scroll scrollbar-hide space-x-2"
            >
              {dataServices.map((item) => (
                <CardService
                  key={item.id}
                  iconSrc={item.iconSrc}
                  text={item.text}
                  imageSrc={item.imageSrc}
                  desc={item.description}
                />
              ))}
            </div>
          </div>
        </section>
        <div className="h-[5px] w-full bg-gray-100 lg:my-8 my-0" />
        {/* Testimonials Section */}
        <section>
          <div className="flex flex-col items-center py-10">
            <h1 className="font-PolyRegular text-center tracking-tight text-black text-4xl p-2">
              Testimonial From Our Customers
            </h1>
            <span className="font-InterRegular text-dark">
              Here’s some our testimonial from our customers
            </span>
            <CardTestimonial
              testimonials={slicedTestimonials}
              flex="lg:flex-row flex-col"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-8 h-96 flex flex-col items-center">
          <div className="flex flex-col items-center py-10">
            <h1 className="lg:text-5xl text-3xl text-center font-PolyRegular tracking-tight text-dark italic">
              Ready to revolutionize your farming? Contact us today!
            </h1>
            <button className="btn my-10 text-white font-PolyRegular text-xl hover:bg-gray-800">
              <Link href={"/teams"}>Contact Us</Link>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
