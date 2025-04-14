import React from 'react';
import logo from '../assets/logo.png';
import acc from '../assets/acc.jpg';

const About = () => {
  return (
    <div className="bg-green-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-12 ">
          <h1 className="text-3xl font-bold text-green-800 sm:text-4xl lg:text-5xl">
            About PrideAgroSolutions
          </h1>
          <p className="text-green-600 mt-4 text-sm sm:text-base lg:text-lg">
            Improving farmers' lives by enhancing the quality of agricultural produce and promoting sustainable farming practices.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          {/* Image Section */}
          <div>
            <img
              src={logo}
              alt="About PrideAgroSolutions"
              className="rounded-lg w-full"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-semibold text-green-800 mb-4 sm:text-3xl">
              Our Vision & Mission
            </h2>
            <p className="text-green-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
              PrideAgroSolutions was founded with the aim of improving farmers' lives by enhancing the
              quality of agricultural produce and providing the best quality products. Our mission is to educate
              and train farmers in organic and low-cost farming practices, helping them adopt eco-friendly solutions.
            </p>
            <p className="text-green-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
              We are committed to promoting sustainable agriculture through products that are environmentally friendly and tailored to meet farmers' needs.
            </p>
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="mt-16 bg-white p-6 sm:p-8 lg:p-12 rounded-lg ">
          <h2 className="text-2xl font-bold text-green-800 text-center sm:text-3xl">
            Quality Assurance & Policy
          </h2>
          <p className="text-green-700 text-center text-sm sm:text-base lg:text-lg leading-relaxed mt-4">
            At PrideAgroSolutions, quality is our uppermost priority. Our team consists of professionally
            qualified and well-experienced individuals in the fields of manufacturing, formulation, and marketing.
            Every product we deliver is meticulously crafted to meet the highest standards, ensuring the best for our customers and the environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
