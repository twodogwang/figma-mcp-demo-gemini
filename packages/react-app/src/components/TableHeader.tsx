import React from 'react';

const HELP_ICON = "http://localhost:3845/assets/e6672b7da6bf12a8c996de7ed28d5c34002ae441.svg";

export default function TableHeader() {
  return (
    <div className="flex w-full min-w-[1200px]">
      <div className="flex-1 bg-[#d7ddea] h-10 px-[10px] flex items-center min-w-[200px]">
        <span className="text-xs font-bold text-[#333] leading-4 font-arial">Product Information</span>
      </div>
      
      <div className="w-[160px] bg-[#d7ddea] h-10 px-[10px] flex items-center justify-center border-l border-white/10">
        <span className="text-xs font-bold text-[#333] leading-4 font-arial">Seller</span>
      </div>

      <div className="w-[200px] bg-[#d7ddea] h-10 px-[10px] flex items-center justify-end border-l border-white/10">
        <div className="flex items-center gap-1">
          <span className="text-xs font-bold text-[#333] leading-4 font-arial">Total Amount</span>
          <img src={HELP_ICON} alt="help" className="w-4 h-4" />
        </div>
      </div>

      <div className="w-[200px] bg-[#d7ddea] h-10 px-[10px] flex items-center border-l border-white/10">
        <span className="text-xs font-bold text-[#333] leading-4 font-arial">Purchase Order ID</span>
      </div>

      <div className="w-[160px] bg-[#d7ddea] h-10 px-[10px] flex items-center border-l border-white/10">
        <span className="text-xs font-bold text-[#333] leading-4 font-arial">Warehouse Code</span>
      </div>

      <div className="w-[210px] bg-[#d7ddea] h-10 px-[10px] flex items-center border-l border-white/10">
        <span className="text-xs font-bold text-[#333] leading-4 font-arial">Shipping Method</span>
      </div>

      <div className="w-[200px] bg-[#d7ddea] h-10 px-[10px] flex items-center justify-end border-l border-white/10">
        <div className="flex items-center gap-1">
          <span className="text-xs font-bold text-[#333] leading-4 font-arial">Order Total</span>
          <img src={HELP_ICON} alt="help" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
