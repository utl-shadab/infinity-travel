"use client"
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Duration() {
  const [outboundDuration, setOutboundDuration] = useState(72);
  const [returnDuration, setReturnDuration] = useState(79);

  const formatDuration = (hours: number) => {
    const h = Math.floor(hours);
    const m = 15;
    return `${h}h ${m}m`;
  };

  const resetOutbound = () => setOutboundDuration(72);
  const resetReturn = () => setReturnDuration(79);
  const resetAll = () => {
    resetOutbound();
    resetReturn();
  };

  return (
    <div className="w-full md:bg-white">
      <div className="md:px-4 space-y-6">
         <div className="border-t hidden md:block border-gray-200" />
        {/* Header */}
        <div className="hidden md:block">
          <h3 className="text-base font-semibold text-[#1c1c1c]">Duration</h3>
        </div>
        <div className=" md:hidden flex justify-between items-center">
          <h3 className="text-base font-semibold text-[#1c1c1c]">Duration</h3>
          <button onClick={resetAll} className="text-sm font-medium text-secondary hover:underline">Reset All</button>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden space-y-4">
          {/* Outbound */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-black">New York</span>
                <ArrowRight className="w-4 h-4 text-black" strokeWidth={2} />
                <span className="text-sm font-medium text-black">Tokyo Japan</span>
              </div>
              <button onClick={resetOutbound} className="text-xs font-medium text-secondary hover:underline">Reset</button>
            </div>
            <div className="text-center mb-3">
              <p className="text-xs text-gray-600 mb-1">Total Duration</p>
              <p className="text-sm font-medium text-secondary">up to {formatDuration(outboundDuration)}</p>
            </div>
            <div className="relative pt-1 pb-2" style={{ '--value': `${outboundDuration}%` } as React.CSSProperties}>
              <input
                type="range"
                min="0"
                max="100"
                value={outboundDuration}
                onChange={(e) => setOutboundDuration(Number(e.target.value))}
                className="w-full appearance-none cursor-pointer slider"
              />
            </div>
          </div>

          {/* Return */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-black">Tokyo Japan</span>
                <ArrowRight className="w-4 h-4 text-black" strokeWidth={2} />
                <span className="text-sm font-medium text-black">New York</span>
              </div>
              <button onClick={resetReturn} className="text-xs font-medium text-secondary hover:underline">Reset</button>
            </div>
            <div className="text-center mb-3">
              <p className="text-xs text-gray-600 mb-1">Total Duration</p>
              <p className="text-sm font-medium text-secondary">up to {formatDuration(returnDuration)}</p>
            </div>
            <div className="relative pt-1 pb-2" style={{ '--value': `${returnDuration}%` } as React.CSSProperties}>
              <input
                type="range"
                min="0"
                max="100"
                value={returnDuration}
                onChange={(e) => setReturnDuration(Number(e.target.value))}
                className="w-full appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block space-y-8">
          {/* Outbound Flight */}
          <div className="mb-8">
            {/* Route */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-black">New York</span>
              <ArrowRight className="w-4 h-4 text-black" strokeWidth={2} />
              <span className="text-sm text-black">Tokyo Japan</span>
            </div>

            {/* Duration Label */}
            <div className="text-center mb-2">
              <p className="text-sm text-black mb-1">Total Duration</p>
              <p className="text-sm font-medium text-secondary">up to {formatDuration(outboundDuration)}</p>
            </div>

            {/* Slider */}
            <div className="relative pt-1 pb-2" style={{ '--value': `${outboundDuration}%` } as React.CSSProperties}>
              <input
                type="range"
                min="0"
                max="100"
                value={outboundDuration}
                onChange={(e) => setOutboundDuration(Number(e.target.value))}
                className="w-full appearance-none cursor-pointer slider"
              />
            </div>
          </div>

          {/* Return Flight */}
          <div>
            {/* Route */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-black">Tokyo Japan</span>
              <ArrowRight className="w-4 h-4 text-black" strokeWidth={2} />
              <span className="text-sm text-black">New York</span>
            </div>

            {/* Duration Label */}
            <div className="text-center mb-2">
              <p className="text-sm text-black mb-1">Total Duration</p>
              <p className="text-sm font-medium text-secondary">up to {formatDuration(returnDuration)}</p>
            </div>

            {/* Slider */}
            <div className="relative pt-1 pb-2" style={{ '--value': `${returnDuration}%` } as React.CSSProperties}>
              <input
                type="range"
                min="0"
                max="100"
                value={returnDuration}
                onChange={(e) => setReturnDuration(Number(e.target.value))}
                className="w-full appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider {
          height: 20px;
          background: transparent;
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #1c1c1c;
          cursor: pointer;
          border: none;
          box-shadow: none;
          margin-top: -9px;
          position: relative;
          z-index: 2;
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #1c1c1c;
          cursor: pointer;
          border: none;
        }

        .slider::-webkit-slider-runnable-track {
          height: 2px;
          background: linear-gradient(to right, #1c1c1c 0%, #1c1c1c var(--value, 0%), #e5e7eb var(--value, 0%), #e5e7eb 100%);
          border-radius: 0;
          -webkit-appearance: slider-horizontal;
        }

        .slider::-moz-range-track {
          height: 2px;
          background: #1c1c1c;
          border-radius: 0;
        }

        .slider:focus {
          outline: none;
        }

        .slider:focus::-webkit-slider-thumb {
          box-shadow: 0 0 0 3px rgba(28, 28, 28, 0.1);
        }
      `}</style>
    </div>
  );
}