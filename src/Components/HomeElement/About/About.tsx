import React from "react";
import aboutImg from "../../../assets/image/aboutImg.png";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-16 px-2 lg:px-16">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2">
          <img
            src={aboutImg}
            alt="About m360"
            className="w-full rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-justify">
          <h2 className="text-3xl font-bold text-sky-500 mb-4">About Us</h2>
          <p className="text-gray-600 font-medium text-sm leading-relaxed">
            At <span className="font-semibold">m360</span>, we believe shopping
            should be simple, secure, and satisfying. Our mission is to bring
            you a curated collection of quality products — from daily essentials
            to trending gadgets — all at competitive prices.
          </p>
          <p className="text-gray-600 font-medium mt-1.5 text-sm leading-relaxed">
            We’re more than just an online store. We're a team committed to
            delivering exceptional customer service, fast shipping, and a
            seamless shopping experience from start to finish. Whether you're
            upgrading your lifestyle or just browsing for great deals, we've got
            everything you need — right at your fingertips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
