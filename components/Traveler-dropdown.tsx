import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, ChevronUp, ChevronDown, Plus, Minus } from "lucide-react";
import type { RefObject } from 'react';

// ===================================
// 1. Types, Constants, and Helpers
// ===================================

export type CabinClass = "Economy" | "Premium Economy" | "Business" | "First";

export interface TravelerState {
    adults: number;
    children: number;
    infantsSeat: number;
    infantsLap: number;
      infants: number; 
    cabinClass: CabinClass;
}

export const MAX_TRAVELERS = 9;

export const cabinOptions: CabinClass[] = [
    "Economy",
    "Premium Economy",
    "Business",
    "First",
];

export const defaultTravelerState: TravelerState = {
    adults: 1,
    children: 0,
    infantsSeat: 0,
    infantsLap: 0,
    infants: 0, 
    cabinClass: "Economy",
};

export function getTravelerSummary(state: TravelerState) {
    const total = state.adults + state.children + state.infantsSeat + state.infantsLap;
    return `${total} Traveler${total !== 1 ? 's' : ''}, ${state.cabinClass}`;
}

function useDropdownDirection(triggerRef: RefObject<HTMLElement>, isOpen: boolean) {
    const [up, setUp] = useState(false);
    useEffect(() => {
        if (!isOpen || !triggerRef.current) return;
        const el = triggerRef.current;
        const rect = el.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const estimated = 550;
        setUp(spaceBelow < estimated && rect.top > estimated);
    }, [isOpen, triggerRef]);
    return up ? "up" : "down";
}


// ===================================
// 2. Traveler Counter Logic Hook
// ===================================

function useTravelerCounter(initialState: TravelerState) {
    const [state, setState] = useState<TravelerState>(initialState);

    const seatedTravelers = state.adults + state.children + state.infantsSeat;

    const increment = (key: keyof Omit<TravelerState, 'cabinClass'>) => {
        setState(prev => {
            const newValue = prev[key] + 1;
            
            if (seatedTravelers >= MAX_TRAVELERS && key !== 'infantsLap') return prev;
            
            if (key === 'infantsLap' && (newValue > prev.adults || seatedTravelers >= MAX_TRAVELERS)) return prev;

            return { ...prev, [key]: newValue };
        });
    };

    const decrement = (key: keyof Omit<TravelerState, 'cabinClass'>) => {
        setState(prev => {
            const newValue = prev[key] - 1;

            if (newValue < 0) return prev;

            if (key === 'adults') {
                const totalNonAdults = prev.children + prev.infantsSeat + prev.infantsLap;
                if (newValue === 0 && totalNonAdults > 0) return prev;
                if (prev.adults === 1 && totalNonAdults === 0) return prev;
            }
            
            let newInfantsLap = prev.infantsLap;
            if (key === 'adults' && prev.infantsLap > newValue) {
                newInfantsLap = newValue;
            }

            const newState: TravelerState = { 
                ...prev, 
                [key]: newValue, 
                ...(key === 'adults' ? { infantsLap: newInfantsLap } : {}) 
            };
            
            return newState;
        });
    };
    
    const setCabinClass = (cabinClass: CabinClass) => {
        setState(prev => ({ ...prev, cabinClass }));
    };

    useEffect(() => {
        if (JSON.stringify(initialState) !== JSON.stringify(state)) {
            setState(initialState);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialState]);

    return { 
        state, 
        increment, 
        decrement, 
        setCabinClass, 
        seatedTravelers
    };
}


// ===================================
// 3. CounterButton Sub-Component
// ===================================

interface CounterButtonProps {
    value: number;
    onDecrement: () => void;
    onIncrement: () => void;
    min: number;
    max?: number;
}

const CounterButton = ({ value, onDecrement, onIncrement, min, max }: CounterButtonProps) => {
    const isMin = value <= min;
    const isMax = max !== undefined && value >= max;

    const buttonClassName = (disabled: boolean) => `
        w-8 h-8 rounded-full border flex items-center cursor-pointer justify-center transition-all duration-150
        ${disabled
            ? "border-gray-300 text-gray-300 cursor-not-allowed"
            : "border-secondary text-secondary hover:bg-orange-50 active:bg-orange-100"
        }
    `;

    return (
        <div className="flex items-center gap-3">
            <button
                type="button"
                onClick={onDecrement}
                disabled={isMin}
                className={buttonClassName(isMin)}
                aria-label="Decrement count"
            >
                <span className="text-xl leading-none text-center font-bold "><Minus size={15}/></span>
            </button>
            <span className="font-semibold text-base w-4 text-center">{value}</span>
            <button
                type="button"
                onClick={onIncrement}
                disabled={isMax}
                className={buttonClassName(isMax)}
                aria-label="Increment count"
            >
                <span className="text-xl leading-none font-bold "><Plus size={15}/></span>
            </button>
        </div>
    );
};


// ===================================
// 4. Main TravelerCabinSelect Component
// ===================================

interface TravelerCabinSelectProps {
    state: TravelerState;
    onChange: (state: TravelerState) => void;
}

export function TravelerCabinSelect({ state: propState, onChange }: TravelerCabinSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null);
    const lastConfirmedState = useRef(propState);
    
    const { 
        state, 
        increment, 
        decrement, 
        setCabinClass, 
        seatedTravelers
    } = useTravelerCounter(propState);

    useEffect(() => {
        lastConfirmedState.current = propState;
    }, [propState]);

    const direction = useDropdownDirection(triggerRef as RefObject<HTMLElement>, isOpen);

    useEffect(() => {
        function onDocClick(event: MouseEvent) {
            if (triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
                if (JSON.stringify(state) !== JSON.stringify(propState)) {
                     onChange(propState);
                }
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, [propState, state, onChange]);


    const handleApply = () => {
        setIsOpen(false);
        lastConfirmedState.current = state;
        if (JSON.stringify(state) !== JSON.stringify(propState)) {
             onChange(state);
        }
    };

    const handleCancel = () => {
        setIsOpen(false);
        onChange(lastConfirmedState.current);
    };
    
    const travelersConfig: { label: string; key: keyof Omit<TravelerState, 'cabinClass'>; age: string; min: number }[] = [
        { label: "Adults", key: "adults", age: "Age 16+ Years", min: 1 },
        { label: "Child", key: "children", age: "Age 02 to 15 Years", min: 0 },
        { label: "Infant (Seat)", key: "infantsSeat", age: "Under 02 Years", min: 0 },
        { label: "Infants (Lap)", key: "infantsLap", age: "Under 02 Years", min: 0 },
    ];

    const getCounterMax = (key: keyof Omit<TravelerState, 'cabinClass'>) => {
        if (key === 'infantsLap') {
            return state.adults; 
        }
        if (key === 'adults' || key === 'children' || key === 'infantsSeat') {
            const currentCount = state[key];
            const otherSeated = seatedTravelers - currentCount;
            const availableSlots = MAX_TRAVELERS - otherSeated;
            return Math.max(currentCount, availableSlots);
        }
    };


    return (
        <div className=" relative" ref={triggerRef}>
            {/* Input field (Trigger) */}
            <label 
                className="block text-[10px] sm:text-xs font-medium text-foreground/70 mb-2 uppercase tracking-wide"
                onClick={() => setIsOpen(prev => !prev)}
            >
                Traveler, Cabin
            </label>
            <div className="relative cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
                <Users className="absolute left-3 top-3.5 text-gray-400" size={18} />
                <div className="w-full pl-10 pr-9 py-2.5 sm:py-3 border rounded-md font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20  text-xs sm:text-sm border-gray-400 bg-white truncate">
                    {getTravelerSummary(state)}
                </div>
                <div className="absolute right-3 top-3.5 text-gray-400 transition-transform">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
            </div>

            {/* Dropdown / Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: direction === "down" ? -10 : 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } }}
                        exit={{ opacity: 0, y: direction === "down" ? -10 : 10, scale: 0.98, transition: { duration: 0.15 } }}
                        className={`absolute z-50 w-[95vw] sm:w-[500px]  md:min-w-[550px] bg-white rounded-xl shadow-2xl p-4 md:p-6 border border-gray-200 
                            ${direction === "up" ? "bottom-full mb-2" : "top-full mt-2"}
                            left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0`}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4 pb-2 border-b">
                            <h3 className="text-xl font-bold">Travelers</h3>
                            <button 
                                onClick={handleCancel}
                                className="text-sm text-gray-500 hover:text-secondary cursor-pointer  transition-colors font-semibold"
                                aria-label="Cancel Selection"
                            >
                                Cancel
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mb-6">You May Select Up to {MAX_TRAVELERS} Travelers</p>

                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Travelers Counter */}
                            <div className="flex-1 space-y-3 pr-0 md:pr-6 border-b md:border-b-0 md:border-r pb-4 md:pb-0">
                                {travelersConfig.map(({ label, key, age, min }) => (
                                    <div key={key} className="flex justify-between items-center py-1">
                                        <div>
                                            <div className="font-medium text-sm">{label}</div>
                                            <div className="text-xs text-gray-500">{age}</div>
                                        </div>
                                        <CounterButton
                                            value={state[key]}
                                            onDecrement={() => decrement(key)}
                                            onIncrement={() => increment(key)}
                                            min={min}
                                            max={getCounterMax(key)}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Cabin Class Selection */}
                            <div className="flex-1 space-y-4 pt-4 md:pt-0">
                                <h3 className="text-xl font-medium mb-4">Cabin Class</h3>
                                {cabinOptions.map((cabin) => (
                                    <label key={cabin} className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="cabinClass"
                                            value={cabin}
                                            checked={state.cabinClass === cabin}
                                            onChange={() => setCabinClass(cabin)}
                                            className="hidden"
                                        />
                                        {/* Custom Radio Button */}
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${state.cabinClass === cabin ? 'border-secondary' : 'border-gray-400'}`}>
                                            {state.cabinClass === cabin && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                                    className="w-2 h-2 rounded-full bg-secondary"
                                                />
                                            )}
                                        </div>
                                        <span className="font-medium text-sm">
                                            {cabin === "Economy" ? "Basic Economy / Economy" : cabin}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        
                        {/* Apply Button */}
                        <div className="mt-6 flex justify-end pt-2 border-t">
                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                onClick={handleApply}
                                className="w-full md:w-32 px-6 py-2 bg-secondary text-white rounded-md font-medium cursor-pointer shadow-lg hover:shadow-xl transition-all"
                            >
                                Apply
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}