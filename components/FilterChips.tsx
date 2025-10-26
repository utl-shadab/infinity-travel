import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function FilterChips() {
  const [filters, setFilters] = useState([
    { id: 1, label: '1 Stop', active: true },
    { id: 2, label: 'United Airlines', active: true }
  ]);

  const removeFilter = (id: any) => {
    setFilters(filters.filter(filter => filter.id !== id));
  };

  const clearAllFilters = () => {
    setFilters([]);
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-3">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className="inline-flex items-center gap-1 sm:gap-2 px-2.5 py-1.5 text-xs sm:text-sm sm:px-5 sm:py-2.5 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-900 font-medium transition-colors"
          >
            <span className="truncate">{filter.label}</span>
            <X
              onClick={(e) => {
                e.stopPropagation();
                removeFilter(filter.id);
              }}
              className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-gray-700 hover:text-gray-900 cursor-pointer shrink-0"
              strokeWidth={2.5}
            />
          </button>
        ))}

        {filters.length > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-xs sm:text-sm text-secondary hover:text-secondary font-medium transition-colors whitespace-nowrap"
          >
            Clear All Filter
          </button>
        )}
      </div>

      {filters.length === 0 && (
        <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-4">No filters applied</p>
      )}
    </div>
  );
}