import CardTestimonial from "@/components/CardTestimonial";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import {
  dataProducts,
  dummyTestimonial,
  slicedTestimonials,
} from "../data/dummyData";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex flex-col items-center">
        <div className="bg-primary w-full h-[450px]">
          <HeroSection src={"/img/hero_dice.jpg"} width={1000} height={200} />
        </div>
        <section className="flex flex-col items-center w-2/3 py-16 mt-32">
          <h1 className="font-PolyRegular tracking-tight text-black text-5xl py-10">
            Company Overview
          </h1>
          <span className="text-dark text-center font-inter italic">
            "Dice is a pioneering agriculture company committed to transforming
            the way the world grows and consumes food. With a strong focus on
            innovation, sustainability, and community development, we bring
            impactful solutions to the agricultural sector."
          </span>
        </section>
        <hr className="border-gray-600" />
        <section className="py-8">
          <div className="flex flex-col items-center py-10">
            <h1 className="font-PolyRegular tracking-tight text-black text-5xl p-2">
              Product & Service
            </h1>
            <span className="font-InterREgular text-dark">
              Highlight services like
            </span>
          </div>
          <div className="flex gap-3">
            <Image
              src="/img/section_2.jpg"
              width={500}
              height={500}
              alt="product-img"
              className="rounded-lg object-cover"
            />
            <div className="w-2/3 grid grid-cols-2 items-start">
              {dataProducts.map((item) => (
                <div
                  key={item.id}
                  className="p-5 m-1 border-gray-300 flex flex-col max-w-72 justify-between min-h-[202px] border-2 grid-cols-4 rounded-md"
                >
                  <Image
                    src={"/svg/icon_dice.svg"}
                    width={50}
                    height={50}
                    alt="icon-dice"
                  />
                  <h2 className="font-bold text-lg text-black">{item.title}</h2>
                  <p className="text-gray-700 italic">{item.excpert}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center py-16">
          <div className="flex flex-col items-center py-4">
            <h1 className="font-PolyRegular tracking-tight text-black text-5xl p-2">
              Testimonials
            </h1>
            <span className="font-InterRegular text-dark">
              Here’s some our testimonial from our customers
            </span>
          </div>
          <CardTestimonial testimonials={slicedTestimonials} flex="flex-row" />
        </section>
        <section className="py-8 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-PolyRegular italic tracking-tighter text-dark">
            Cultivating the Future of Agriculture, Today.
          </h1>
          <hr className="border-2 border-red-600 my-5" />

          <Image
            src={"/svg/logo_dice.svg"}
            width={200}
            height={200}
            alt="logo-dice"
          />
        </section>
      </div>
    </div>
  );
}
