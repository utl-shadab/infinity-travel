import React from 'react';

export default function ConnectedAirport() {
  return (
    <div className="w-full  bg-white">
      <div className="px-4 space-y-6">
       

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Stops Section */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-[#1c1c1c]">Connecting Airports</h3>
          <div className="space-y-3">
            {[
              { label: "Nonstop"  },
              { label: "1 Stop"  },
              { label: "1+ stop"}
            ].map((item, idx) => (
              <label key={idx} className="flex items-start justify-between cursor-pointer group">
                <div className="flex items-center space-x-3">
                  <div className="relative inline-block">
                    <input 
                      type="checkbox" 
                     className="peer w-5 h-5 border-2 border-gray-300 rounded cursor-pointer appearance-none checked:bg-secondary checked:border-secondary transition-colors"
                    />
                    <svg 
                      className="absolute top-0.5 left-0.5 w-4 h-4 pointer-events-none hidden peer-checked:block text-white"
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm text-[#1C1C1C]">{item.label}</span>
                </div>
               
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}