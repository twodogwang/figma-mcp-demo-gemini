import React from 'react';

const IMG_ARROW_LEFT_DISABLED = "http://localhost:3845/assets/a1073e310ae58f6d1820ac62164742ca05f3b739.svg";
const IMG_ARROW_RIGHT = "http://localhost:3845/assets/c91c8c08a426668f08eae37aae2d94fd3e4f0a25.svg";
const IMG_CHEVRON_DOWN_SMALL = "http://localhost:3845/assets/5ebb6a8f29a8e0a3c7d96f1130909500a8a7e53e.svg";

export default function Pagination() {
  return (
    <div className="flex justify-end pt-1 pb-0 w-full min-w-[1200px]">
      <div className="flex gap-2 items-center">
        <div className="flex items-center">
          {/* Previous Button (Disabled) */}
          <button className="w-8 h-8 flex items-center justify-center bg-white border border-[#c1c1c1] rounded-l-[4px] cursor-not-allowed">
            <img src={IMG_ARROW_LEFT_DISABLED} className="w-4 h-4" alt="prev" />
          </button>
          
          {/* Page 1 (Active) */}
          <button className="w-8 h-8 flex items-center justify-center bg-[#333] border border-[#333] -ml-px z-10">
            <span className="text-sm text-white leading-[18px] font-arial">1</span>
          </button>
          
          {/* Page 2 */}
          <button className="w-8 h-8 flex items-center justify-center bg-white border border-[#c1c1c1] -ml-px hover:bg-gray-50">
            <span className="text-sm text-[#333] leading-[18px] font-arial">2</span>
          </button>
          
          {/* Page 3 */}
          <button className="w-8 h-8 flex items-center justify-center bg-white border border-[#c1c1c1] -ml-px hover:bg-gray-50">
             <span className="text-sm text-[#333] leading-[18px] font-arial">3</span>
          </button>

          {/* Page 4 */}
          <button className="w-8 h-8 flex items-center justify-center bg-white border border-[#c1c1c1] -ml-px hover:bg-gray-50">
             <span className="text-sm text-[#333] leading-[18px] font-arial">4</span>
          </button>

           {/* Page 5 */}
           <button className="w-8 h-8 flex items-center justify-center bg-white border border-[#c1c1c1] -ml-px hover:bg-gray-50">
             <span className="text-sm text-[#333] leading-[18px] font-arial">5</span>
          </button>

           {/* Page 6 */}
           <button className="w-8 h-8 flex items-center justify-center bg-white border border-[#c1c1c1] -ml-px hover:bg-gray-50">
             <span className="text-sm text-[#333] leading-[18px] font-arial">6</span>
          </button>

          {/* Ellipsis */}
          <div className="w-8 h-8 flex items-center justify-center -ml-px border-t border-b border-[#c1c1c1] bg-white">
             <span className="text-sm text-[#333] leading-[18px] font-arial">...</span>
          </div>

          {/* Page 100 */}
          <button className="w-8 h-8 flex items-center justify-center bg-white border border-[#c1c1c1] -ml-px border-r hover:bg-gray-50">
             <span className="text-sm text-[#333] leading-[18px] font-arial">100</span>
          </button>

          {/* Next Button */}
          <button className="w-8 h-8 flex items-center justify-center bg-white border border-[#c1c1c1] rounded-r-[4px] -ml-px hover:bg-gray-50">
             <img src={IMG_ARROW_RIGHT} className="w-4 h-4" alt="next" />
          </button>
        </div>

        {/* Page Size Selector */}
        <div className="h-8 px-3 bg-white border border-[#c1c1c1] rounded-[4px] flex gap-2 items-center cursor-pointer">
           <span className="text-sm text-[#333] leading-[18px] font-arial">10 / page</span>
           <img src={IMG_CHEVRON_DOWN_SMALL} className="w-[10px] h-[10px]" alt="chevron" />
        </div>

        {/* Summary Text */}
        <span className="text-sm text-[#333] leading-[18px] font-arial">1-10 of 1000</span>
      </div>
    </div>
  );
}
