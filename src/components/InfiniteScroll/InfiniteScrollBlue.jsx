import React from "react";

const InfiniteScrollBlue = () => {
  const items = ["App Development", "UI/UX", "Design", "Website Development"];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#FF9A00] to-[#FFBC56] py-2">
      <div className="flex w-max animate-scroll gap-10">
        {[...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items,].map((item, index) => (
          <div key={index} className=" text-white text-xl flex items-center gap-10 font-jakarta font-extrabold">
            {item}
            <img src="src/assets/Asterisk Blue.svg" alt="Asterisk" className="w-5 h-5" />
          </div>
          
          
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollBlue;
