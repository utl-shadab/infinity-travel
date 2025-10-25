"use client"
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Duration() {
  const [outboundDuration, setOutboundDuration] = useState(72);
  const [returnDuration, setReturnDuration] = useState(79);

  const formatDuration = (hours: number) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m}m`;
  };

  return (
    <div className="w-full bg-white">
      <div className="px-4 space-y-6">
         <div className="border-t border-gray-200" />
        {/* Header */}
        <h3 className="text-base font-semibold text-[#1c1c1c]">Duration</h3>

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
          <div className="relative pt-1 pb-2">
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
          <div className="relative pt-1 pb-2">
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
          background: #1c1c1c;
          border-radius: 0;
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