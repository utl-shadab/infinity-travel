"use client"
import React, { useState } from 'react';
import { ChevronDown, Plane } from 'lucide-react';
import Image from 'next/image';
import { motion } from "framer-motion";

interface Stop {
    airport: string;
    layover: string;
}

interface Leg {
    time: string;
    airport: string;
    duration: string;
    arrivalTime: string;
    arrivalAirport: string;
    nextDay?: number;
    stopover: string;
    stops: Stop[];
    airlineLogo: string;
}

interface Segment {
    departureTime: string;
    departureAirport: string;
    departureAirportName: string;
    arrivalTime: string;
    arrivalAirport: string;
    arrivalAirportName: string;
    airline: string;
    class: string;
    flightNumber: string;
    aircraft: string;
    operatedBy?: string;
    travelTime: string;
    airlineLogo: string;
    layover?: string;
}

interface RouteDetailsLeg {
    date: string;
    from: string;
    to: string;
    time: string;
    journeyDuration: string;
    arrives: string;
    segments: Segment[];
}

interface RouteDetails {
    departure: RouteDetailsLeg;
    return: RouteDetailsLeg;
}

interface BaggageItem {
    description: string;
    status: string;
}

interface AirlineBaggage {
    name: string;
    route: string;
    class: string;
    logo: string;
    carryOn: BaggageItem;
    checkedBag: BaggageItem;
}

interface BaggageDetails {
    segments: { name: string }[];
    airlines: AirlineBaggage[];
}

interface Flight {
    ticketsLeft: number;
    departure: Leg;
    return: Leg;
    operatedBy: string;
    price: string;
    cents: string;
    routeDetails: RouteDetails;
    baggageDetails: BaggageDetails;
}

interface FlightCardProps {
    flight: Flight;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {

    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<'route' | 'baggage'>('route');
    const [showCarryOnTooltip, setShowCarryOnTooltip] = useState<boolean>(false);
    const [showCheckedTooltip, setShowCheckedTooltip] = useState<boolean>(false);
    const [hoveredStop, setHoveredStop] = useState<string | null>(null);
    const [activeSegment, setActiveSegment] = useState(0);
    const [activeAirline, setActiveAirline] = useState<number | null>(null);
    const renderStops = (stops: Stop[], prefix: string = ''): React.ReactElement => {
        return (
            <div className="flex-1 h-0.5 bg-gray-300 relative">
                {stops.length === 0 ? (
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span className="text-sm text-[#1C1C1C]">Non-stop</span>
                    </div>
                ) : (
                    stops.map((stop, index) => {
                        const position = ((index + 1) / (stops.length + 1)) * 100;
                        const stopKey = `${prefix}-${index}`;
                        return (
                            <div
                                key={stopKey}
                                style={{ left: `${position}%` }}
                                className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onMouseEnter={() => setHoveredStop(stopKey)}
                                onMouseLeave={() => setHoveredStop(null)}
                            >
                                <div className="w-2 h-2 bg-white border-2 border-gray-400 rounded-full" />
                                {hoveredStop === stopKey && (
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded whitespace-nowrap z-10 shadow-lg">
                                        {stop.airport} | Layover: {stop.layover}
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}
            </div>
        );
    };

    const renderBaggageTooltip = (type: 'carryOn' | 'checked'): React.ReactElement => {
        if (type === 'carryOn') {
            return (
                <div className={`absolute bottom-full right-0 mb-2 w-80 bg-black text-white rounded-lg shadow-xl z-50 p-4`}>
                    <div className="flex items-start gap-3 mb-4">
                        <div className="relative">
                            <Image
                                src="/bag.png"
                                alt="Verified"
                                width={25}
                                height={25}
                                className="object-cover"
                            />
                            <div className="absolute -top-3 -right-3 w-5 h-5">
                                <Image
                                    src="/verify.png"
                                    alt="Verified"
                                    width={20}
                                    height={20}
                                    className="object-cover w-7"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold mb-1">Carry-on Bag</div>
                            <div className="text-sm">Included</div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-300">22 × 14 × 9 inches No access to overhead luggage bins</div>
                </div>
            );
        } else {
            return (
                <div className="absolute bottom-full right-0 mb-2 w-80 bg-black text-white rounded-lg shadow-xl z-50 p-4">
                    <div className="flex items-start gap-3 mb-4">
                        <div className="relative">
                            <Image
                                src="/travel-bag-white.png"
                                alt="Verified"
                                width={25}
                                height={45}
                                className="object-cover w-7"
                            />
                            <div className="absolute -top-3 -right-3 w-5 h-5">
                                <Image
                                    src="/badge-red.png"
                                    alt="Verified"
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold mb-1">1st Checked Bag</div>
                            <div className="text-sm">Not-Included</div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-300">Up to 23 kgs</div>
                </div>
            );
        }
    };

    const renderLeg = (leg: RouteDetailsLeg, direction: 'departure' | 'return') => (
        <div className=''>
            <div className="bg-gray-100 px-4 py-2 rounded-t-lg flex justify-between items-center">
                <h4 className="font-semibold text-base">{direction.charAt(0).toUpperCase() + direction.slice(1)}</h4>
                <span className="text-sm text-[#1C1C1C]">{leg.date}</span>
            </div>
            <div className="bg-white border border-t-0 rounded-b-lg p-4">
                <div className="mb-4">
                    <div className="font-normal text-base text-[#1C1C1C]">
                        {leg.from} to {leg.to}
                    </div>
                    <div className="text-sm text-[#1C1C1C]">{leg.time}</div>
                    <div className="text-secondary text-base font-semibold mt-1">
                        Journey Duration: {leg.journeyDuration}
                    </div>
                </div>

                <div className="relative ">
                    <div className="absolute left-[93px] top-0 bottom-0 w-1 bg-gray-300 z-0"></div>
                    {leg.segments.map((segment, index) => (
                        <div key={index} className="mb-6 relative z-10">
                            {/* Departure */}
                            <div className="flex items-start gap-3 mb-2">
                                <div className="text-sm font-semibold min-w-18">{segment.departureTime}</div>
                                <div className="w-5 flex justify-center">
                                    <span className="text-base leading-none rotate-135 bg-white p-1 rounded-full border border-gray-300">
                                        <Plane size={14} />
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-[#1C1C1C] text-sm">{segment.departureAirport.split(' (')[0]}</div>
                                    <div className="text-sm text-[#1C1C1C]">{segment.departureAirportName || segment.departureAirport.split(' (')[1]?.replace(')', '')}</div>
                                </div>
                            </div>

                            {/* Flight Details Box */}
                            <div className="ml-28 mb-2">
                                <div className="flex items-center flex-col gap-3 bg-gray-50 p-3 rounded">
                                    <div className="flex w-full items-center gap-2">
                                        <img src={segment.airlineLogo} alt="Airline" className="w-6 h-6 rounded-full" onError={(e) => { e.currentTarget.src = '/default-airline-logo.png'; }} />
                                        <div>
                                            <div className="font-medium text-base truncate">{segment.airline}</div>
                                            <div className="text-sm text-[#1C1C1C]">{segment.class}</div>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm text-gray-400">
                                            {segment.flightNumber} | {segment.aircraft}
                                        </div>
                                        {segment.operatedBy && (
                                            <div className="text-sm text-[#1C1C1C] mt-1">{segment.operatedBy}</div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Travel Time */}
                            {segment.travelTime && (
                                <div className="ml-28 mt-2 text-xs text-gray-500">
                                    Travel time: {segment.travelTime}
                                </div>
                            )}

                            {/* Arrival */}
                            <div className="flex items-start gap-3">
                                <div className="text-sm font-semibold min-w-18">{segment.arrivalTime}</div>
                                <div className="w-5 flex justify-center -mt-0.5">
                                    <span className="text-base leading-none bg-white p-1 rounded-full border border-gray-300">
                                        {index === leg.segments.length - 1 ? (
                                            <Plane size={14} className="rotate-45" />
                                        ) : (
                                            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                        )}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="font-semibold text-sm">{segment.arrivalAirport.split(' (')[0]}</div>
                                    <div className="text-sm text-[#1C1C1C]">{segment.arrivalAirportName || segment.arrivalAirport.split(' (')[1]?.replace(')', '')}</div>
                                </div>
                            </div>

                            {/* Layover if not last segment */}
                            {index < leg.segments.length - 1 && segment.layover && (
                                <div className="ml-28 mt-2 text-sm text-red-600 font-semibold">
                                    {segment.layover} Layover
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-sm font-semibold text-[#1C1C1C] mt-4">
                    Arrives: {leg.arrives}
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="bg-white rounded-lg flex shadow-md border-r border-gray-200 overflow-hidden max-w-6xl mx-auto my-4">
                {/* Main Flight Info */}
                <div className="w-3/4 p-4 border-r border-gray-[#1c1c1c]">
                    <div className="p-6">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex gap-2">
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-xs text-center items-center flex justify-center font-semibold">Best Value</span>
                                <span className="border-2 border-secondary text-secondary bg-secondary/10 px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
                                    <span>🔥</span> {flight.ticketsLeft} tickets left
                                </span>
                            </div>

                        </div>

                        {/* Departure Section */}
                        <div className="mb-6">
                            <h3 className="text-base font-semibold mb-4">Departure</h3>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img src={flight.departure.airlineLogo} alt="Airline" className="w-12 h-12" />
                                    <div>
                                        <div className="text-lg font-semibold">{flight.departure.time}</div>
                                        <div className="text-[#6E6E6E] text-base">{flight.departure.airport}</div>
                                    </div>
                                </div>

                                <div className="flex-1 mx-8 relative">
                                    <div className="text-center text-sm text-[#1C1C1C] mb-2">{flight.departure.duration}</div>
                                    {renderStops(flight.departure.stops, 'dep')}
                                    <div className="text-center text-sm text-[#1C1C1C] mt-2">{flight.departure.stopover}</div>
                                </div>

                                <div className="text-right">
                                    <div className="text-lg font-semibold">
                                        {flight.departure.arrivalTime}
                                        {flight.departure.nextDay && (
                                            <span className=" text-xs align-super">+{flight.departure.nextDay}</span>
                                        )}
                                    </div>
                                    <div className="text-[#6E6E6E] text-base">{flight.departure.arrivalAirport}</div>
                                </div>
                            </div>
                        </div>

                        {/* Return Section */}
                        <div className="border-t pt-6">
                            <h3 className="text-base font-semibold mb-4">Return</h3>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img src={flight.return.airlineLogo} alt="Airline" className="w-12 h-12" />
                                    <div>
                                        <div className="text-lg font-semibold">{flight.return.time}</div>
                                        <div className="text-[#6E6E6E] text-base">{flight.return.airport}</div>
                                    </div>
                                </div>

                                <div className="flex-1 mx-8 relative">
                                    <div className="text-center text-sm text-[#1C1C1C] mb-2">{flight.return.duration}</div>
                                    {renderStops(flight.return.stops, 'ret')}
                                    <div className="text-center text-sm text-[#1C1C1C] mt-2">{flight.return.stopover}</div>
                                </div>

                                <div className="text-right">
                                    <div className="text-lg font-semibold">
                                        {flight.return.arrivalTime}
                                        {flight.return.nextDay && (
                                            <span className=" text-xs align-super">+{flight.return.nextDay}</span>
                                        )}
                                    </div>
                                    <div className="text-[#6E6E6E] text-base">{flight.return.arrivalAirport}</div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-6 pt-6 border-t">
                            <div className="text-[#1C1C1C]">Operated by {flight.operatedBy}</div>

                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div
                                        className="relative cursor-pointer"
                                        onMouseEnter={() => setShowCarryOnTooltip(true)}
                                        onMouseLeave={() => setShowCarryOnTooltip(false)}
                                    >
                                        <Image
                                            src="/suitcase.png"
                                            alt="Verified"
                                            width={25}
                                            height={25}
                                            className="object-cover"
                                        />
                                        <div className="absolute -top-3 -right-3 w-5 h-5">
                                            <Image
                                                src="/verify.png"
                                                alt="Verified"
                                                width={20}
                                                height={20}
                                                className="object-cover"
                                            />
                                        </div>

                                    </div>
                                    {showCarryOnTooltip && renderBaggageTooltip('carryOn')}
                                </div>

                                <div className="relative">
                                    <div
                                        className="relative cursor-pointer"
                                        onMouseEnter={() => setShowCheckedTooltip(true)}
                                        onMouseLeave={() => setShowCheckedTooltip(false)}
                                    >
                                        <Image
                                            src="/travel-bag.png"
                                            alt="Verified"
                                            width={25}
                                            height={25}
                                            className="object-cover w-7"
                                        />
                                        <div className="absolute -top-3 -right-3 w-5 h-5">
                                            <Image
                                                src="/badge.png"
                                                alt="Verified"
                                                width={20}
                                                height={20}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    {showCheckedTooltip && renderBaggageTooltip('checked')}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                {/* Price Section */}
                <div className="w-1/4 p-4 flex items-center justify-center">
                    <div className="px-6 py-4 flex flex-col items-center justify-between gap-20 text-center">
                        <div>
                            <div className="text-sm font-medium">Premium Economy</div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className="text-4xl font-bold">
                                ${flight.price}
                                <span className="text-base align-super">.{flight.cents}</span>
                            </div>
                            <div className="text-[#1C1C1C]">Oneway / per traveler</div>
                            <button className="bg-secondary hover:bg-secondary/40 text-white font-bold text-xl px-16 py-4 rounded-lg cursor-pointer">
                                Select
                            </button>
                        </div>

                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="text-gray-700 font-semibold cursor-pointer flex items-center gap-2 hover:text-gray-900"
                        >
                            Flight Details
                            <ChevronDown className={`w-5 h-5 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                </div>

            </div>
            {/* Flight Details Dropdown */}
            {showDetails && (
                <div className="border-t bg-white rounded-lg">
                    {/* Tabs */}
                    <div className="w-full border-b border-gray-300  flex justify-center">
                        <div className="relative flex justify-center gap-20">
                            <button
                                onClick={() => setActiveTab("route")}
                                className={`relative flex-1 cursor-pointer text-center py-3 font-semibold transition-colors duration-200 ${activeTab === "route"
                                    ? "text-secondary"
                                    : "text-gray-700 hover:text-gray-900"
                                    }`}
                            >
                                Route
                                {activeTab === "route" && (
                                    <motion.div
                                        layoutId="activeTabUnderline"
                                        className="absolute bottom-0 left-0 right-0  h-0.5 bg-secondary"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </button>

                            <button
                                onClick={() => setActiveTab("baggage")}
                                className={`relative flex-1 cursor-pointer text-center py-3 font-semibold transition-colors duration-200 ${activeTab === "baggage"
                                    ? "text-secondary"
                                    : "text-gray-700 hover:text-gray-900"
                                    }`}
                            >
                                Baggage
                                {activeTab === "baggage" && (
                                    <motion.div
                                        layoutId="activeTabUnderline"
                                        className="absolute bottom-0 left-0 right-0  h-0.5 bg-secondary"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        {activeTab === 'route' && (
                            <div className="grid grid-cols-2 gap-8">
                                {renderLeg(flight.routeDetails.departure, 'departure')}
                                {renderLeg(flight.routeDetails.return, 'return')}
                            </div>
                        )}

                        {activeTab === 'baggage' && (
                            <div>
                                {/* ===== Segment Tabs ===== */}
                                <div className="flex gap-2 mb-6">
                                    {flight.baggageDetails.segments.map((segment, index) => (
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            key={index}
                                            onClick={() => setActiveSegment(index)}
                                            className={`px-6 py-2 rounded-full text-sm cursor-pointer transition-all duration-200 border
                                              ${activeSegment === index
                                                    ? 'bg-secondary text-white border-secondary'
                                                    : 'bg-transparent text-[#1C1C1C] border-[#dcdcdc]'
                                                }`}
                                        >
                                            {segment.name}
                                        </motion.button>
                                    ))}
                                </div>

                                {/* ===== Airline Cards ===== */}
                                <div className="grid grid-cols-2 gap-6">
                                    {flight.baggageDetails.airlines.map((airline, index) => (
                                        <motion.div
                                            key={index}
                                            onClick={() => setActiveAirline(index)}
                                            whileHover={{ scale: 1.02 }}
                                            className={`cursor-pointer border rounded-lg p-4 transition-all duration-200 
                                           ${activeAirline === index ? 'border-[#1C1C1C] ring-1 ring-[#1C1C1C]' : 'border-gray-200'}
                                        `}
                                        >
                                            <div className="flex items-start gap-3 mb-4 ">
                                                <img src={airline.logo} alt={airline.name} className="w-7 h-7 mt-1 object-cover" />
                                                <div>
                                                    <div className="font-semibold text-lg text-[#1f1f1f]">{airline.name}</div>
                                                    <div className="text-sm text-[#1f1f1f]">{airline.route}</div>
                                                </div>
                                                <div className="ml-auto text-sm text-[#1C1C1C]">{airline.class}</div>
                                            </div>
                                            <div className='h-px w-full bg-gray-400'></div>

                                            {/* Carry-on Bag */}
                                            <div className="flex items-start gap-4 mt-4 pb-4 ">
                                                <div className="relative">
                                                    <Image
                                                        src="/suitcase.png"
                                                        alt="Verified"
                                                        width={25}
                                                        height={25}
                                                        className="object-cover"
                                                    />
                                                    <div className="absolute -top-3 -right-3 w-5 h-5">
                                                        <Image
                                                            src="/verify.png"
                                                            alt="Verified"
                                                            width={20}
                                                            height={20}
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-base">Carry-on Bag</div>
                                                    <div className="text-sm text-[#6E6E6E]">{airline.carryOn.description}</div>
                                                </div>
                                                <div className="text-[#3AB54A] text-sm font-normal">{airline.carryOn.status}</div>
                                            </div>
                                            <div className='h-px w-full bg-gray-400'></div>
                                            {/* Checked Bag */}
                                            <div className="flex items-start gap-3 mt-4 pb-4">
                                                <div className="relative">
                                                    <Image
                                                        src="/travel-bag.png"
                                                        alt="Verified"
                                                        width={25}
                                                        height={25}
                                                        className="object-cover w-7"
                                                    />
                                                    <div className="absolute -top-3 -right-3 w-5 h-5">
                                                        <Image
                                                            src="/badge.png"
                                                            alt="Verified"
                                                            width={20}
                                                            height={20}
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-base">Check-in Bag</div>
                                                    <div className="text-sm text-[#6E6E6E]">{airline.checkedBag.description}</div>
                                                </div>
                                                <div
                                                    className={`text-sm font-normal ${airline.checkedBag.status === 'Included'
                                                            ? 'text-[#3AB54A]'
                                                            : 'text-[#DC3545]'
                                                        }`}
                                                >
                                                    {airline.checkedBag.status}
                                                </div>
                                            </div>
                                            <div className='h-px w-full bg-gray-400'></div>
                                            <div className="mt-4  text-xs text-[#6E6E6E]">
                                                All prices are quoted in USD. Baggage allowance and fee amounts are not guaranteed and are subject to change by the airline. Be sure to verify actual fees with your airline(s) before travel.
                                            </div>

                                            <div className="mt-2 text-xs  text-[#6E6E6E]">
                                                Confirm bag fees, weight and size restrictions with{' '}
                                                <a href="#" className="text-blue-600 underline">{airline.name}</a>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default FlightCard;