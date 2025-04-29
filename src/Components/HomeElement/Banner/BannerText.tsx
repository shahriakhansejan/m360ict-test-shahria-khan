import React from "react";
import { Link } from "react-router";

const BannerText: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-black/95 to-black/5 h-auto py-36">
      <div className="w-full md:w-2/3 lg:w-1/2 pr-6 md:pr-0 pl-6 md:pl-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Affordable Online Shopping & Trusted Brands
        </h1>
        <p className="text-justify text-white py-8 font-medium">
          Explore top-rated products and unbeatable prices to make every
          purchase smooth and satisfying. Convenience you can count on!
        </p>
      </div>
      <div className="pr-6 md:pr-0 pl-6 md:pl-16 flex gap-4">
        <Link to="/products">
          <button className="border rounded hover:bg-sky-600 hover:border-sky-600 text-sm font-bold border-white px-3 py-2 text-white">
            Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BannerText;
