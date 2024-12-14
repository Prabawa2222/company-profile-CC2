import React from "react";

interface Testimonial {
  id: number;
  img: string;
  name: string;
  job: string;
  desc: string;
}

interface CardTestimonialProps {
  testimonials: Testimonial[];
  flex: string;
}

const CardTestimonial: React.FC<CardTestimonialProps> = ({
  testimonials,
  flex,
}) => {
  return (
    <div className={`flex ${flex} items-center w-full mx-5 lg:py-6 py-10`}>
      {testimonials.map((item) => (
        <div
          key={item.id}
          className="flex flex-col  items-center p-2 w-[450px]"
        >
          <div>
            <img src={item.img} className="w-32 h-32 rounded-full m-2" />
          </div>
          <div className="flex flex-col items-center p-1 lg:p-2 lg:w-full w-2/3">
            <span className="font-InterLight lg:text-base text-sm text-center tleading-snug text-dark ">
              {item.desc}
            </span>
            <div className="h-[5px] lg:w-full w-2/3 bg-gray-200 my-2 lg:my-8" />
            <span className="text-xl font-InterRegular text-dark tracking-tight">
              {item.name}
            </span>
            <span>{item.job}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTestimonial;
