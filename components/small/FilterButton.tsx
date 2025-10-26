"use client";
import React from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

interface FilterButtonProps {
    onClick: () => void;
    selectedCount?: number; 
    isActive?: boolean;     
}

const FilterButton: React.FC<FilterButtonProps> = ({
    onClick,
    selectedCount = 0,
    isActive = false,
}) => {
    return (
        <button
            className={`relative border w-full border-[#374151] cursor-pointer rounded-md px-5 py-3 flex items-center justify-between transition ${isActive ? "bg-[#ffd1b8]" : "bg-white"
                }`}
            onClick={onClick}
        >
            <div className="flex items-center gap-3 relative">
                <div
                    className={`flex items-center justify-center rounded-full p-1 ${isActive ? "bg-white" : "bg-transparent"
                        }`}
                >
                    <SlidersHorizontal
                        size={18}
                        className="w-4 h-4 text-black transition-transform"
                    />
                </div>

                <span className="text-sm font-medium">Filter</span>


                {selectedCount > 0 && (
                    <div className="absolute -top-2 -right-4 bg-green-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                        {selectedCount}
                    </div>
                )}
            </div>

            <ChevronDown />
        </button>
    );
};

export default FilterButton;
