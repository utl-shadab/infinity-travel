"use client"
import React, { useState } from 'react';

export default function ConnectedAirport() {
  const [selectedAirports, setSelectedAirports] = useState(new Set());

  const airports = [
    { code: "LAX", label: "Los Angeles Intl" },
    { code: "PAR", label: "Paris" },
    { code: "TPE", label: "Taipei" },
    { code: "SIN", label: "Singapore" },
    { code: "HKG", label: "Hong Kong" },
  ];

  const jfkAirport = { code: "JFK", label: "John F Kennedy Intl.", price: "$912" };

  const handleSelectNone = () => {
    setSelectedAirports(new Set());
  };

  const handleSelectAll = () => {
    setSelectedAirports(new Set(airports.map(a => `${a.code}-${a.label}`)));
  };

  const toggleAirport = (airport:any) => {
    const id = `${airport.code}-${airport.label}`;
    setSelectedAirports(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const isSelected = (airport:any) => selectedAirports.has(`${airport.code}-${airport.label}`);

  return (
    <div className="w-full md:bg-white">
      <div className="md:px-4 space-y-6">
        {/* Divider */}
        <div className="border-t hidden md:block border-gray-200" />

        {/* Desktop: Connecting Airports */}
        <div className="hidden md:block space-y-4">
          <h3 className="text-base font-semibold text-[#1c1c1c]">Connecting Airports</h3>
          <div className="space-y-3">
            {airports.map((airport, idx) => (
              <label key={idx} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center space-x-3">
                  <div className="relative inline-block">
                    <input 
                      type="checkbox" 
                      checked={isSelected(airport)}
                      onChange={() => toggleAirport(airport)}
                      className="peer w-5 h-5 border-2 border-gray-300 rounded cursor-pointer appearance-none checked:bg-secondary checked:border-secondary transition-colors"
                    />
                    <svg 
                      className={`absolute top-0.5 left-0.5 w-4 h-4 pointer-events-none ${isSelected(airport) ? 'block' : 'hidden'} text-white`}
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
                  <span className="text-sm text-[#1C1C1C]">{airport.code} - {airport.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Mobile: Airports with Sections */}
        <div className="block md:hidden space-y-4">
          {/* Header with Select Buttons */}
          <div className="flex justify-between items-center">
            <h3 className="text-base font-semibold text-[#1c1c1c]">Airports</h3>
            <div className="flex gap-2">
              <button 
                onClick={handleSelectNone}
                className="text-xs text-gray-500 font-medium hover:underline px-2 py-1"
              >
                Select None
              </button>
              <span className="text-xs text-gray-300">|</span>
              <button 
                onClick={handleSelectAll}
                className="text-xs text-secondary font-medium hover:underline px-2 py-1"
              >
                Select All
              </button>
            </div>
          </div>

          {/* Departing From */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">Departing From</p>
            <label className="flex items-center justify-between cursor-pointer mb-3">
              <div className="flex items-center space-x-3">
                <div className="relative inline-block">
                  <input 
                    type="checkbox" 
                    checked
                    className="peer w-5 h-5 border-2 border-secondary rounded cursor-pointer appearance-none bg-secondary checked:bg-secondary checked:border-secondary transition-colors"
                  />
                  <svg 
                    className="absolute top-0.5 left-0.5 w-4 h-4 pointer-events-none block text-white"
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
                <span className="text-sm text-[#1C1C1C]">{jfkAirport.code} - {jfkAirport.label}</span>
              </div>
              <span className="text-sm text-secondary">{jfkAirport.price}</span>
            </label>
          </div>

          {/* Traveling To */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">Traveling To</p>
            <label className="flex items-center justify-between cursor-pointer mb-3">
              <div className="flex items-center space-x-3">
                <div className="relative inline-block">
                  <input 
                    type="checkbox" 
                    className="peer w-5 h-5 border-2 border-gray-300 rounded cursor-pointer appearance-none checked:bg-secondary checked:border-secondary transition-colors"
                    onChange={() => {}} // Placeholder
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
                <span className="text-sm text-[#1C1C1C]">{jfkAirport.code} - {jfkAirport.label}</span>
              </div>
              <span className="text-sm text-secondary">{jfkAirport.price}</span>
            </label>
          </div>

          {/* Connecting In */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">Connecting In</p>
            <div className="space-y-3">
              {airports.map((airport, idx) => (
                <label key={idx} className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="relative inline-block">
                      <input 
                        type="checkbox" 
                        checked={isSelected(airport)}
                        onChange={() => toggleAirport(airport)}
                        className="peer w-5 h-5 border-2 border-gray-300 rounded cursor-pointer appearance-none checked:bg-secondary checked:border-secondary transition-colors"
                      />
                      <svg 
                        className={`absolute top-0.5 left-0.5 w-4 h-4 pointer-events-none ${isSelected(airport) ? 'block' : 'hidden'} text-white`}
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
                    <span className="text-sm text-[#1C1C1C]">{airport.code} - {airport.label}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}