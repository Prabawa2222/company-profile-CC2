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

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex flex-col items-center">
        <div className="bg-primary w-full h-[450px]">
          <HeroSection
            src={"/img/hero_dice.jpg"}
            width={1000}
            height={200}
            content={"Product & Service"}
          />
        </div>
        <section className="flex flex-col items-center lg:w-2/3 py-16 mt-32 w-0.9">
          <h1 className="font-PolyRegular tracking-tight text-black text-5xl py-10">
            Our Offerings
          </h1>
          <div className="flex flex-row items-center">
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
        </section>
        <section>
          <div className="flex flex-col items-center py-10">
            <h1 className="font-PolyRegular tracking-tight text-black text-4xl p-2">
              Testimonial From Our Customers
            </h1>
            <span className="font-InterREgular text-dark">
              Here’s some our testimonial from our customers
            </span>
            <CardTestimonial
              testimonials={slicedTestimonials}
              flex="flex-row"
            />
          </div>
        </section>
        <section className="py-8 h-96 flex flex-col items-center">
          <div className="flex flex-col items-center py-10">
            <h1 className="font-PolyRegular tracking-tight text-black text-5xl p-8">
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
