import React from 'react';

const tabs = [
  { label: 'ALL', count: 304, active: true },
  { label: 'Carton &Shipping Label Pending', count: 83 },
  { label: 'Unpaid', count: 8 },
  { label: 'Being Processed', count: 15 },
  { label: 'BOL Pending&Awaiting Pickup', count: 23 },
];

export default function Tabs() {
  return (
    <div className="flex gap-4 items-start w-full overflow-x-auto pb-2">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center px-4 py-[9px] h-9 rounded-[100px] shrink-0 whitespace-nowrap cursor-pointer transition-colors ${
            tab.active ? 'bg-[#f2f2f2]' : 'bg-[#f2f2f2] hover:bg-gray-200'
          }`}
        >
          <div className="text-sm text-[#333] leading-[18px] font-normal font-arial">
            <span>{tab.label}</span>
            <span className="font-bold">({tab.count})</span>
          </div>
        </div>
      ))}
    </div>
  );
}
