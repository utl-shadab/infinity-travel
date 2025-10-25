import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { RefObject } from 'react';
import {
    Plane,
    Building2,
    Ship,
    TreePalm,
    Search,
    X,
} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import type { Airport } from "@/data/airport";
import { searchAirports } from "@/data/airport";

import FlightSearchForm from "./FlightSearchForm";

const useDebounced = (value: string, delay = 150) => {
    const [v, setV] = useState(value);
    useEffect(() => {
        const id = setTimeout(() => setV(value), delay);
        return () => clearTimeout(id);
    }, [value, delay]);
    return v;
};

function useDropdownDirection(triggerRef: React.RefObject<HTMLElement>, isOpen: boolean) {
    const [up, setUp] = useState(false);
    useEffect(() => {
        if (!isOpen || !triggerRef.current) return;
        const el = triggerRef.current;
        const rect = el.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const estimated = 320;
        setUp(spaceBelow < estimated && rect.top > estimated);
    }, [isOpen, triggerRef]);
    return up ? "up" : "down";
}

// --- AirportSelect ---
interface AirportSelectProps {
    label: string;
    icon: React.ElementType;
    value: Airport | null;
    onChange: (airport: Airport | null) => void;
    placeholder?: string;
    otherValue?: Airport | null;
}

const itemMotion = {
    initial: { opacity: 0, y: -6 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.15 } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.1 } },
};

export function AirportSelect({ label, icon: Icon, value, onChange, placeholder = "Search airport", otherValue }: AirportSelectProps) {
    const [input, setInput] = useState<string>(value?.iata ?? "");
    const [open, setOpen] = useState(false);
    const debounced = useDebounced(input);
    const results = useMemo(() => searchAirports(debounced), [debounced]);
    const triggerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const dir = useDropdownDirection(triggerRef as RefObject<HTMLElement>, open);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTouched, setIsTouched] = useState(false);
    const isInvalid = isTouched && !open && !value;
    useEffect(() => {
        if (!open && value) setInput(`${value.city} (${value.iata})`);
        if (!open && !value) setInput("");
    }, [open, value]);


    useEffect(() => {
        function onDoc(e: MouseEvent) {
            if (!triggerRef.current) return;
            if (!triggerRef.current.contains(e.target as Node)) {
                if (open) {
                    setOpen(false);
                    setIsTouched(true);
                }
            }
        }
        document.addEventListener("mousedown", onDoc);
        return () => document.removeEventListener("mousedown", onDoc);
    }, [open]);

    // keyboard navigation
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!open && (e.key === "ArrowDown" || e.key === "Enter")) setOpen(true);
        if (!open) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((i) => Math.min(i + 1, results.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter") {
            e.preventDefault();
            const a = results[activeIndex];
            if (a && (!otherValue || a.iata !== otherValue.iata)) {
                onChange(a);
                setOpen(false);
            }
        } else if (e.key === "Escape") {
            setOpen(false);
        }
    };
    const inputClassName = `w-full pl-10 pr-9 py-2.5 sm:py-3 border rounded-md font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20  text-xs sm:text-sm
        ${isInvalid ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200" : "border-gray-400"}`;

    return (
        <div className="w-full" ref={triggerRef as React.RefObject<HTMLDivElement>}>
            <label className="block text-[10px] sm:text-xs font-medium text-foreground/70 mb-2 uppercase tracking-wide">
                {label}
            </label>
            <div className="relative">
                <Icon className="absolute left-3 top-2.5 sm:top-3.5 text-foreground/40" size={18} />
                <input
                    aria-expanded={open}
                    aria-haspopup="listbox"
                    onFocus={() => {
                        setOpen(true);
                        setIsTouched(true);
                        if (value) setInput(value.iata);
                    }}
                    onChange={(e) => {
                        setInput(e.target.value);
                        setOpen(true);
                        if (value) onChange(null);
                    }}
                    onKeyDown={onKeyDown}
                    value={input}
                    placeholder={placeholder}
                    className={inputClassName}
                />
                {value && (
                    <button
                        type="button"
                        onClick={() => {
                            onChange(null);
                            setInput("");
                            setOpen(true);
                            setIsTouched(true);
                        }}
                        className="absolute right-2 top-2.5 p-1 rounded hover:bg-muted"
                        aria-label="Clear"
                    >
                        <X size={16} className="text-foreground/50" />
                    </button>
                )}

                <AnimatePresence>
                    {open && (

                        <motion.ul
                            key="list"
                            role="listbox"
                            ref={listRef}
                            initial={{ opacity: 0, y: dir === "down" ? -6 : 6 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.18 } }}
                            exit={{ opacity: 0, y: dir === "down" ? -6 : 6, transition: { duration: 0.12 } }}
                            className={`absolute z-50 w-full max-h-80 overflow-auto rounded-md border pb-2 bg-white shadow-xl ${dir === "up" ? "bottom-11" : "top-11"
                                } w-[300px] md:w-[400px]`}
                        >
                            <div className="sticky top-0 bg-white border-b px-3 py-2 text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                                Suggested Airports
                            </div>
                            {results.length === 0 && (
                                <li className="px-3 py-3 text-sm text-foreground/60">No matches</li>
                            )}
                            {results.map((a: any, idx: any) => {
                                const disabled = !!otherValue && a.iata === otherValue.iata;
                                return (
                                    <motion.li
                                        {...itemMotion}
                                        key={a.iata}
                                        role="option"
                                        aria-selected={idx === activeIndex}
                                        onMouseEnter={() => setActiveIndex(idx)}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            if (disabled) return;
                                            onChange(a);
                                            setOpen(false);
                                        }}
                                        className={`flex items-center justify-between gap-3 px-3 py-2.5 cursor-pointer text-sm ${idx === activeIndex ? "bg-muted" : "bg-white"
                                            } ${disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-red-100"}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="h-7 w-7  flex items-center justify-center">
                                                <Plane size={16} />
                                            </div>
                                            <div className="leading-tight">
                                                <div className="font-semibold">{a.name}</div>
                                                <div className="text-xs text-foreground/60">{a.city}, {a.country}</div>
                                            </div>
                                        </div>
                                        <div className="text-xs font-bold tracking-widest text-foreground/80">{a.iata}</div>
                                    </motion.li>
                                );
                            })}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function TravelTabs() {
    const [activeTab, setActiveTab] = useState("Flights");
    const [departureDate, setDepartureDate] = useState<Date | null>(null);
    const [returnDate, setReturnDate] = useState<Date | null>(null);
   

    const tabs = [
        { icon: Plane, label: "Flights" },
        { icon: Building2, label: "Hotels" },
        { icon: Ship, label: "Cruises" },
        { icon: TreePalm, label: "Packages" },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-2 lg:px-0">
            {/* Tabs */}
            <div className="flex overflow-x-auto gap-4 mb-8 scrollbar-hide py-2">
                {tabs.map((item) => (
                    <motion.div
                        key={item.label}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setActiveTab(item.label)}
                        className="flex flex-col items-center gap-1 cursor-pointer "
                    >
                        <div
                            className={`w-12 h-12 md:h-18 md:w-18 rounded-md flex items-center justify-center transition-all backdrop-blur-md ${activeTab === item.label
                                ? "bg-secondary text-secondary-foreground shadow-md"
                                : "bg-primary text-primary-foreground hover:bg-secondary"
                                }`}
                        >
                            <item.icon size={22} className="sm:h-9 sm:w-9" strokeWidth={1.5} />
                        </div>
                        <span
                            className={`text-xs font-semibold ${activeTab === item.label ? "text-primary" : "text-foreground/70"
                                }`}
                        >
                            {item.label}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Content */}
            <motion.div
                key={activeTab}
                transition={{ duration: 0.4 }}
                className={`transition-all ${activeTab === "Packages" ? "p-0 bg-transparent shadow-none" : "bg-white rounded-xl shadow-2xl p-4 md:p-8"
                    }`}
            >
                {activeTab === "Flights" && (
                    <FlightSearchForm mode="search" />
                )}

                {activeTab === "Hotels" && (
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <input type="text" placeholder="City or hotel" className="border p-3 rounded-md text-sm" />
                            <DatePicker
                                placeholderText="Check In"
                                className="border p-3 rounded-md w-full text-sm"
                                selected={departureDate}
                                onChange={(date) => setDepartureDate(date)}
                            />
                            <DatePicker
                                placeholderText="Check Out"
                                className="border p-3 rounded-md w-full text-sm"
                                selected={returnDate}
                                onChange={(date) => setReturnDate(date)}
                            />
                            <input type="text" placeholder="1 Room, 2 Travelers" className="border p-3 rounded-md text-sm" />
                        </div>

                        <div className="flex justify-end mt-4">
                            <button className="p-2 w-fit bg-secondary text-secondary-foreground cursor-pointer rounded-md font-medium hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center">
                                <Search size={18} className="text-center mr-2" />
                                Search Hotels
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === "Cruises" && (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <input type="text" placeholder="Add Origin" className="border p-3 rounded-md text-sm" />
                            <DatePicker
                                placeholderText="Start Date"
                                className="border p-3 rounded-md w-full text-sm"
                                selected={departureDate}
                                onChange={(date) => setDepartureDate(date)}
                            />
                            <DatePicker
                                placeholderText="End Date"
                                className="border p-3 rounded-md w-full text-sm"
                                selected={returnDate}
                                onChange={(date) => setReturnDate(date)}
                            />
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="p-2 w-fit bg-secondary text-secondary-foreground cursor-pointer rounded-md font-medium hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center">
                                <Search size={18} className="text-center mr-2" />
                                Search Cruise
                            </button>
                        </div>
                    </>
                )}

                {activeTab === "Packages" && (
                    <div className="text-start">
                        <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-md font-bold hover:shadow-lg transition-all hover:scale-105">
                            Reserve Today
                        </button>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
