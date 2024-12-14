import React from "react";

const CardNews = () => {
  return (
    <div className="bg-white w-[282px] h-[187px] rounded-xl">
      <div className="flex flex-col items-center p-5">
        <span className="text-dark font-InterRegular text-xl">
          Weekly Newsletter
        </span>
        <span className="text-dark font-InterRegular text-sm text-center">
          Get blog articles and offers via email
        </span>
        <div className="border-2 w-full flex justify-between mt-5 p-2 rounded-sm">
          <p className="text-sm">Your Email</p>
          <img src="/svg/mail.svg" />
        </div>
        <button className="p-2 bg-dark text-sm text-white w-full mt-2 rounded-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default CardNews;
