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
    <div className={`flex ${flex} w-full mx-5 py-6`}>
      {testimonials.map((item) => (
        <div key={item.id} className="flex items-center p-2 w-[450px]">
          <img src={item.img} className="w-32 h-32 rounded-full m-2" />
          <div className="flex flex-col p-2">
            <span className="font-InterLight leading-snug text-dark ">
              {item.desc}
            </span>
            <hr className="border-gray-300 my-2" />
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
