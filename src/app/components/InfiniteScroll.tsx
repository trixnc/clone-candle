import Image from "next/image";
import React from "react";

const images = [
  "./icc/Fictional company logo-1.png",
  "./icc/Fictional company logo-2.png",
  "./icc/Fictional company logo-3.png",
  "./icc/Fictional company logo-4.png",
  "./icc/Fictional company logo-5.png",
  "./icc/Fictional company logo-6.png",
  "./icc/Fictional company logo-7.png",
  "./icc/Fictional company logo-8.png",
  "./icc/Fictional company logo-9.png",
  "./icc/Fictional company logo-10.png",
];

const InfiniteScroll = () => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <div className="flex animate-scroll gap-10">
        {images.concat(images).map((src, index) => (
          <div key={index} className="min-w-[200px] h-[150px] relative">
            <img
              src={src}
              alt="Company Logo"
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
