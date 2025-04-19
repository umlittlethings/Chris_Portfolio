import React from "react";

const InfiniteScrollOrange= () => {
  const items = ["App Development", "UI/UX", "Design", "Website Development"];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#021167] to-[#1819D4] py-2">
      <div className="flex w-max animate-scroll gap-10">
        {[...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items,].map((item, index) => (
          <div key={index} className=" text-white text-xl flex items-center gap-10 font-jakarta font-extrabold">
            {item}
            <img src="Asterisk Orange.svg" alt="Asterisk" className="w-10 h-5" />
          </div>
          
          
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollOrange;
