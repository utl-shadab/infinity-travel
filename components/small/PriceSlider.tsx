"use client"
import React, { useState } from 'react';

export default function PriceSlider() {
  const [price, setPrice] = useState(320);

  const resetAll = () => setPrice(720);

  const thumbPosition = (price / 720) * 100;

  return (
    <div className="w-full ">
      <div className="px-4 space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-base font-semibold text-[#1c1c1c]">Price</h3>
          <button onClick={resetAll} className="text-sm font-medium text-secondary hover:underline">Reset All</button>
        </div>

        {/* Select Price */}
        <div className="text-center mb-3">
          <p className="text-sm text-gray-600 mb-7">Select price</p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Track Background */}
          <div className="absolute inset-0 h-0.5 bg-black rounded-full" style={{ left: '4px', right: '4px', top: '9.4px' }} />
          <div className="absolute inset-0 h-1 bg-secondary rounded-full" style={{ left: '4px', width: `${thumbPosition}%`, top: '9px' }} />

         

          {/* Labels Below */}
          <span className="absolute left-0 -bottom-2 text-xs text-gray-600 transform -translate-x-1/2">$0</span>
          <span className="absolute right-0 -bottom-2 text-xs text-gray-600 transform translate-x-1/2">$720</span>

          {/* Current Price Above Thumb */}
          <span 
            className="absolute -top-5 text-sm font-medium text-secondary transform -translate-x-1/2 whitespace-nowrap"
            style={{ left: `${thumbPosition}%` }}
          >
            ${price}
          </span>

          {/* Input Slider */}
          <input
            type="range"
            min="0"
            max="720"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full h-6 absolute inset-0 cursor-pointer appearance-none pointer-events-none z-10"
            style={{ WebkitAppearance: 'none' }}
          />
        </div>
      </div>

      <style jsx>{`
        input[type="range"] {
          background: transparent;
          pointer-events: none;
          -webkit-appearance: none;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ff6b35;
          cursor: pointer;
          border: none;
          box-shadow: none;
          margin-top: -11px;
          pointer-events: all;
          z-index: 20;
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #1c1c1c;
          cursor: pointer;
          border: none;
          pointer-events: all;
        }

        input[type="range"]::-webkit-slider-runnable-track {
          height: 0.5px;
          background: transparent;
          border-radius: 0;
          -webkit-appearance: none;
        }

        input[type="range"]::-moz-range-track {
          height: 0.5px;
          background: transparent;
          border-radius: 0;
          pointer-events: none;
        }

        input[type="range"]:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
}