import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function FilterChips() {
  const [filters, setFilters] = useState([
    { id: 1, label: '1 Stop', active: true },
    { id: 2, label: 'United Airlines', active: true }
  ]);

  const removeFilter = (id:any) => {
    setFilters(filters.filter(filter => filter.id !== id));
  };

  const clearAllFilters = () => {
    setFilters([]);
  };

  return (
    <div className="w-full ">
      <div className="flex flex-wrap items-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-900 text-sm font-medium transition-colors"
          >
            <span>{filter.label}</span>
            <X
              onClick={(e) => {
                e.stopPropagation();
                removeFilter(filter.id);
              }}
              className="w-4 h-4 text-gray-700 hover:text-gray-900 cursor-pointer shrink-0"
              strokeWidth={2.5}
            />
          </button>
        ))}

        {filters.length > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-secondary hover:text-secondary text-sm font-medium transition-colors whitespace-nowrap"
          >
            Clear All Filter
          </button>
        )}
      </div>

      {filters.length === 0 && (
        <p className="text-gray-500 text-sm mt-4">No filters applied</p>
      )}
    </div>
  );
}