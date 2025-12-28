import React from 'react';

const IMG_PRODUCT = "http://localhost:3845/assets/1af8b1df9b46913faa5026b153bb6a6e736109b8.png";
const IMG_COMBOX = "http://localhost:3845/assets/bd29f1398652e30e1cbd8f251bc2c60aba0ed4b9.svg";
const IMG_PROTECTION_ACTIVE = "http://localhost:3845/assets/f69f393aad47df3ff40af8beae6c7c3253747a3e.svg";
const IMG_CHECKMARK = "http://localhost:3845/assets/3d0b0a98d5be93da89735f237a1c2c52c997d047.svg";
const IMG_ARROW_BLUE = "http://localhost:3845/assets/c3ed526f506f70804d6e3ec01ab0c4e5593986bb.svg";
const IMG_HELP_GRAY = "http://localhost:3845/assets/01a96663d18d7e459fd0b1c402f1e13cf6989e84.svg";
const IMG_CHEVRON_DOWN = "http://localhost:3845/assets/079374e6d5269e5dc291274793e8ef2783f4ef90.svg";

export default function OrderCard() {
  return (
    <div className="flex flex-col w-full min-w-[1200px] mb-4">
      {/* Top Bar */}
      <div className="bg-[#f7f8fa] border-t border-l border-r border-[#e5e5e5] flex items-center px-[10px] py-[7px] rounded-t-[4px] w-full">
        <div className="flex gap-4 items-center">
          <div className="flex gap-1 items-center h-[14px] pr-4 border-r border-[#e5e5e5]">
            <span className="text-sm text-[#333] leading-[18px] font-arial">Shipment ID: 78718521689</span>
            <img src={IMG_PROTECTION_ACTIVE} className="w-[18px] h-[18px]" alt="protection" />
          </div>
          <div className="flex items-center h-[16px] pr-4 border-r border-[#e5e5e5]">
            <span className="text-sm text-[#666] leading-[18px] italic font-arial">Amazon - FBA Pickup</span>
          </div>
          <div className="bg-[#fff0e6] px-[6px] py-[3px] rounded-[4px] flex items-center justify-center">
            <span className="text-sm text-[#f60] leading-[18px] font-arial">Unpaid</span>
          </div>
        </div>
        
        <div className="flex-1 flex justify-end items-center gap-4">
          <div className="flex gap-2 items-center h-[14px] pr-4 border-r border-[#e5e5e5]">
            <div className="w-4 h-4 bg-white border border-[#0aad4f] rounded-[3px] relative flex items-center justify-center">
               <img src={IMG_CHECKMARK} className="w-3 h-3 absolute" alt="check" />
            </div>
            <span className="text-sm text-[#333] leading-[18px] font-arial">Carrier Pickup Scheduled</span>
          </div>
          <button className="flex gap-[2px] items-center">
            <span className="text-sm text-[#2861ce] leading-[18px] font-arial">View Details</span>
            <img src={IMG_ARROW_BLUE} className="w-[14px] h-[14px]" alt="arrow" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex w-full border-l border-r border-[#e5e5e5]">
        <div className="flex-1 flex bg-white py-[12px] px-[10px] border-b border-[#e5e5e5]">
          {/* Product Info */}
          <div className="flex-1 flex gap-3 items-center min-w-[200px]">
            <div className="w-[60px] h-[60px] border border-[#c1c1c1] rounded-[3px] relative overflow-hidden shrink-0">
              <img src={IMG_PRODUCT} className="w-full h-full object-cover" alt="product" />
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <p className="text-sm text-[#333] leading-[18px] font-arial line-clamp-2">
                Demon Skull,Suitable for Outdoor Fireplace and Fire Pit, Halloween Decoration
              </p>
              <div className="flex gap-1 items-center">
                <span className="text-sm text-[#333] leading-[18px] font-arial">W2061254313</span>
                <span className="text-sm font-bold text-[#333] leading-[18px] font-arial">x2</span>
                <div className="w-4 h-4 relative">
                  <img src={IMG_COMBOX} className="w-full h-full" alt="tag" />
                </div>
              </div>
            </div>
          </div>

          {/* Seller */}
          <div className="w-[160px] flex items-center justify-center px-[10px] shrink-0">
             <span className="text-sm text-[#333] leading-[18px] font-arial">--</span>
          </div>

          {/* Total Amount */}
          <div className="w-[200px] flex items-center justify-end px-[10px] shrink-0">
             <span className="text-sm font-bold text-[#333] leading-[18px] font-arial">--</span>
          </div>

           {/* Purchase Order ID */}
           <div className="w-[200px] flex items-start justify-center flex-col px-[10px] shrink-0">
             <span className="text-sm text-[#333] leading-[18px] font-arial">--</span>
          </div>

          {/* Warehouse Code */}
          <div className="w-[160px] flex items-start justify-center flex-col px-[10px] shrink-0">
             <span className="text-sm text-[#333] leading-[18px] font-arial">W206-WA1</span>
          </div>

          {/* Shipping Method */}
          <div className="w-[210px] flex items-start justify-center flex-col px-[10px] shrink-0">
             <span className="text-sm text-[#333] leading-[18px] font-arial">Trucking</span>
          </div>
        </div>
        
        {/* Order Total (Right Column) */}
        <div className="w-[200px] bg-white border-b border-[#e5e5e5] flex flex-col items-end justify-center px-[10px] py-[12px] shrink-0 border-l border-[#e5e5e5]">
           <span className="text-sm font-bold text-[#333] leading-[18px] font-arial">--</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border border-[#e5e5e5] border-t-0 rounded-b-[4px] px-[10px] py-[8px] flex items-center justify-between">
        <div className="flex gap-[6px] items-center">
           <div className="flex gap-[2px] items-center">
             <span className="text-sm text-[#333] leading-[18px] font-arial">Upload Time</span>
             <img src={IMG_HELP_GRAY} className="w-[14px] h-[14px]" alt="help" />
           </div>
           <span className="text-sm text-[#333] leading-[18px] font-arial">2025-11-02 00:00:00</span>
        </div>

        <div className="flex gap-3 items-center">
           <button className="h-8 px-3 border border-[#c1c1c1] rounded-[4px] flex items-center justify-center gap-[6px] bg-white hover:bg-gray-50">
             <span className="text-sm text-[#333] leading-[18px] font-arial">More</span>
             <img src={IMG_CHEVRON_DOWN} className="w-4 h-4" alt="more" />
           </button>
           <button className="h-8 px-3 bg-[#f60] rounded-[4px] flex items-center justify-center hover:bg-[#e65c00]">
             <span className="text-sm text-white leading-[18px] font-arial">Pay</span>
           </button>
        </div>
      </div>
    </div>
  );
}
