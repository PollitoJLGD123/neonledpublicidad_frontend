"use client";

import React from "react";

export const CompanyValues = ({ companyValues }) => {
  return (
    <section className="bg-[#B7E5FD] rounded-lg py-8 md:py-16 px-3 mx-4 md:mx-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-black truncate">
        VALORES
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {/* Values cards con mejor espaciado móvil */}
        {companyValues.map((item, index) => {
          return (
            <div key={index} className="text-center p-4">
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-black text-sm md:text-base truncate">
                {item.title}
              </h3>
              <p
                className={`text-blue-400 font-bold truncate${
                  item.value === "AL CLIENTE" ? "text-black" : ""
                }`}
              >
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
