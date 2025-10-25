"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, PlaneTakeoff, PlaneLanding, Search, ArrowLeftRight, X, Plane } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toQuery } from "@/lib/query";
import type { FlightSearch } from "@/lib/flightSearchSchema";
import { AirportSelect } from "@/components/TravelTabs";
import { TravelerCabinSelect, TravelerState, defaultTravelerState } from "@/components/Traveler-dropdown";
import { AnimatePresence, motion } from "framer-motion";

type Mode = "search" | "modify";

export default function FlightSearchForm({ mode }: { mode: Mode }) {
    const router = useRouter();
    const [tripType, setTripType] = useState<"round-trip" | "one-way">("round-trip");
    const [origin, setOrigin] = useState<any>(null);
    const [destination, setDestination] = useState<any>(null);
    const [departureDate, setDepartureDate] = useState<Date | null>(null);
    const [returnDate, setReturnDate] = useState<Date | null>(null);
    const [travelerState, setTravelerState] = useState<TravelerState>(defaultTravelerState);
    const [cabin, setCabin] = useState<FlightSearch["cabin"]>("economy");

    const [showMobilePopup, setShowMobilePopup] = useState(false);

    const canSubmit = origin && destination && departureDate && (tripType === "one-way" || returnDate);
    const handleSwap = () => {
        setOrigin(destination);
        setDestination(origin);
    };
    const toISO = (d: Date) => {
        const nd = new Date(d);
        nd.setHours(0, 0, 0, 0);
        return nd.toISOString();
    };

    const handleSearch = () => {
        if (!canSubmit) return;
        const params = toQuery({
            tt: tripType,
            from: origin.iata,
            to: destination.iata,
            dep: toISO(departureDate!),
            ret: tripType === "round-trip" ? toISO(returnDate!) : undefined,
            adt: travelerState.adults,
            chd: travelerState.children,
            inf: travelerState.infants,
            cabin
        });
        router.push(`/flight-listing?${params}`);
        setShowMobilePopup(false);
    };

    const FormContent = (
        <>
            <div className="flex gap-3 mb-3 md:mb-6 flex-wrap">
                {(["round-trip", "one-way"] as const).map(tt => (
                    <button
                        key={tt}
                        onClick={() => setTripType(tt)}
                        className={`px-4 py-2 rounded-md text-sm cursor-pointer font-semibold transition-all ${tripType === tt ? "bg-secondary text-white" : "border"}`}
                    >
                        {tt === "round-trip" ? "Round Trip" : "One Way"}
                    </button>
                ))}
            </div>

            <div className={`grid grid-cols-1 md:flex lg:grid-cols-${tripType === "round-trip" ? "5" : "4"} gap-4 mb-6`}>

                <AirportSelect
                    label="Origin"
                    icon={PlaneTakeoff}
                    value={origin}
                    onChange={setOrigin}
                    otherValue={destination}
                    placeholder="City, airport or IATA"
                />
                <button
                    type="button"
                    onClick={handleSwap}
                    className="absolute left-1/2 hidden  -translate-x-1/2 translate-y-17 rotate-90 sm:rotate-0 sm:translate-y-3 bg-white border rounded-md z-10 cursor-pointer p-2 shadow-sm hover:shadow-md hover:bg-muted transition-all"
                >
                    <ArrowLeftRight size={18} className="text-foreground/70" />
                </button>
                <AirportSelect
                    label="Destination"
                    icon={PlaneLanding}
                    value={destination}
                    onChange={setDestination}
                    otherValue={origin}
                    placeholder="City, airport or IATA"
                />
              

                {/*  Desktop Layout */}
                
                    <div className="w-full">
                        <label className="block text-[10px] sm:text-xs font-medium text-foreground/70 mb-2 uppercase tracking-wide">
                            Departure Date
                        </label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-3.5 text-foreground/40" size={18} />
                            <DatePicker
                                selected={departureDate}
                                onChange={(date) => setDepartureDate(date)}
                                placeholderText="Select"
                                className="w-full pl-10 pr-9 py-2.5 sm:py-3 border border-gray-400 rounded-md font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 text-xs sm:text-sm"
                            />
                        </div>
                    </div>

                    {tripType === "round-trip" && (
                        <div className="w-full">
                            <label className="block text-[10px] sm:text-xs font-medium text-foreground/70 mb-2 uppercase tracking-wide">
                                Return Date
                            </label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-3.5 text-foreground/40" size={18} />
                                <DatePicker
                                    selected={returnDate}
                                    onChange={(date) => setReturnDate(date)}
                                    placeholderText="Select"
                                    className="w-full pl-10 pr-9 py-2.5 sm:py-3 border border-gray-400 rounded-md font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 text-xs sm:text-sm"
                                />
                            </div>
                        </div>
                    )}
                <div>
                    <TravelerCabinSelect
                        state={travelerState}
                        onChange={setTravelerState}
                    />
                </div>
            
                </div>
                


            <div className="flex justify-end mt-4">
                <button
                    onClick={handleSearch}
                    className="p-2 w-full md:w-fit bg-secondary text-secondary-foreground cursor-pointer rounded-md font-medium hover:shadow-lg transition-all hover:scale-105 flex md:items-center md:justify-center justify-center text-center disabled:opacity-60"
                    disabled={!canSubmit}
                >
                    <Search size={18} className="mr-2 hidden md:inline" />
                    {mode === "search" ? "Search Flight" : "Modify Search"}
                </button>
            </div>
        </>
    );

    return (
        <>
            {/* Desktop Form */}
            <div className="hidden md:block">
                {FormContent}
            </div>

            {/* Mobile    */}
            <div className="md:hidden  w-full bg-gray-50 shadow-[0_-2px_8px_rgba(0,0,0,0.08)] border-t z-30">
                <div className="flex justify-between items-center px-4 py-3">
                    <div className="flex flex-col text-sm font-medium">
                        <div className="flex gap-2">
                            <span className="text-lg font-medium">{origin?.iata || "Origin"}</span>
                            <span><Plane className="rotate-45" /></span>
                            <span className="text-lg font-medium">{destination?.iata || "Destination"}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                            {departureDate
                                ? departureDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
                                : "Select Date"}
                            {" • "}
                            {travelerState.adults} Adult
                            {travelerState.children > 0 && ` + ${travelerState.children} Child`}
                            {" • "}
                            {cabin.charAt(0).toUpperCase() + cabin.slice(1)}
                        </div>
                    </div>
                    <button
                        onClick={() => setShowMobilePopup(true)}
                        className="p-3 rounded-md bg-secondary text-white hover:opacity-90 transition"
                    >
                        <Search size={20} />
                    </button>
                </div>
            </div>


            {/* Mobile Popup */}
            <AnimatePresence>
                {showMobilePopup && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        className="fixed top-20 left-0 w-full h-auto bg-white z-50 overflow-y-auto px-3 pb-3 "
                    >
                        <div className="flex justify-between relative items-center ">
                            <button
                                onClick={() => setShowMobilePopup(false)}
                                className="p-2 bg-secondary  rounded-full absolute top-0.5  right-0 hover:bg-gray-100"
                            >
                                <X size={16} className="text-white" />
                            </button>
                        </div>
                        {FormContent}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
