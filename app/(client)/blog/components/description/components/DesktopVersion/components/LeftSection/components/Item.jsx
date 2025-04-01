"use client";

const Item = ({ title }) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-[#00B1FB] to-[#2257D2] text-white text-center py-1 px-8 rounded-[40px] font-bold text-sm">
      {title}
    </div>
  );
};

export default Item;
