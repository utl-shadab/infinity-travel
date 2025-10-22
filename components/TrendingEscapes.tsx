"use client";

import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Phone, Star } from "lucide-react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";

type TourPackage = {
    id: string;
    title: string;
    rating: number;
    duration: string;
    highlights: string[];
    image: string;
    ctaText: string;
};

type AssistanceCard = {
    id: string;
    title: string;
    description: string;
    ctaText: string;
    phoneNumber: string;
    availability: string;
};

type DestinationCard = {
    id: string;
    name: string;
    image: string;
};

type Card = TourPackage | AssistanceCard | DestinationCard;

const assistanceCards: AssistanceCard[] = [
    {
        id: "phone-support-1",
        title: "Need assistance finding the best deals?",
        description: "Our experts are standing by to help you score the perfect phone deal.",
        ctaText: "Ready to book? Give us a call!",
        phoneNumber: "1-760-999-7119",
        availability: "Expert assistance available 24/7",
    },
    {
        id: "phone-support-2",
        title: "Talk to our travel experts!",
        description: "We'll help plan your dream trip in minutes.",
        ctaText: "Call now for free consultation",
        phoneNumber: "1-760-999-7119",
        availability: "Available 24/7",
    },
    {
        id: "phone-support-3",
        title: "Need urgent booking help?",
        description: "Our team is ready to assist you anytime, anywhere.",
        ctaText: "Call and get instant support",
        phoneNumber: "1-760-999-7119",
        availability: "Always available",
    },
];

const tourPackages: TourPackage[] = [
    {
        id: "california-dreaming",
        title: "California Dreaming",
        rating: 4.7,
        duration: "6 Days | 5 Nights",
        highlights: ["Hollywood City Tour", "Santa Monica Beach Day", "Universal Studios Entry"],
        image: "/ny.jpeg",
        ctaText: "Reserve Now",
    },
    {
        id: "new-york-1",
        title: "New York",
        rating: 4.7,
        duration: "6 Days | 5 Nights",
        highlights: ["Hollywood City Tour", "Santa Monica Beach Day", "Universal Studios Entry"],
        image: "/ny.jpeg",
        ctaText: "Reserve Now",
    },
    {
        id: "new-york-2",
        title: "New York",
        rating: 4.7,
        duration: "6 Days | 5 Nights",
        highlights: ["Hollywood City Tour", "Santa Monica Beach Day", "Universal Studios Entry"],
        image: "/ny.jpeg",
        ctaText: "Reserve Now",
    },
    {
        id: "new-york-3",
        title: "New York",
        rating: 4.7,
        duration: "6 Days | 5 Nights",
        highlights: ["Hollywood City Tour", "Santa Monica Beach Day", "Universal Studios Entry"],
        image: "/ny.jpeg",
        ctaText: "Reserve Now",
    },
    {
        id: "new-york-4",
        title: "New York",
        rating: 4.7,
        duration: "6 Days | 5 Nights",
        highlights: ["Hollywood City Tour", "Santa Monica Beach Day", "Universal Studios Entry"],
        image: "/ny.jpeg",
        ctaText: "Reserve Now",
    },
];

const mergeCards = (tours: TourPackage[], assistance: AssistanceCard[]): Card[] => {
    const result: Card[] = [];
    let assistanceIndex = 0;
    for (let i = 0; i < tours.length; i++) {
        result.push(tours[i]);
        if ((i + 1) % 4 === 0 && assistanceIndex < assistance.length) {
            result.push(assistance[assistanceIndex]);
            assistanceIndex++;
        }
    }
    return result;
};

export default function TrendingEscapesSlider() {
    const allCards = mergeCards(tourPackages, assistanceCards);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free-snap",
        slides: { perView: 1, spacing: 16 },
        breakpoints: {
            "(min-width: 640px)": { slides: { perView: 2, spacing: 16 } },
            "(min-width: 1024px)": { slides: { perView: 4, spacing: 20 } },
        },
        dragSpeed: 1.2,
        renderMode: "performance",
    });
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (instanceRef.current) setLoaded(true);
    }, [instanceRef]);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 rounded-xl relative">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-2xl md:text-3xl font-medium leading-tight">
                    Trending Escapes & Expert Assistance
                </h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => instanceRef.current?.prev()}
                        disabled={!loaded}
                        className="w-10 h-10 rounded-full bg-secondary cursor-pointer text-white flex items-center justify-center hover:shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => instanceRef.current?.next()}
                        disabled={!loaded}
                        className="w-10 h-10 rounded-full bg-secondary cursor-pointer text-white flex items-center justify-center hover:shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
            <div ref={sliderRef} className="keen-slider">
                {allCards.map((card) => {
                    const isTour = "rating" in card;
                    const isAssistance = "phoneNumber" in card;

                    return (
                        <div
                            key={card.id}
                            className="keen-slider__slide pb-3"
                        >
                            <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 rounded-xl  h-full flex flex-col p-2">
                                {"image" in card && (
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={card.image}
                                            alt={isTour ? card.title : "Image"}
                                            fill
                                            className="object-cover p-2 rounded-2xl"
                                        />
                                    </div>
                                )}
                                <div className="p-4 flex flex-col ">
                                    {isTour && (
                                        <>
                                            <div className="flex justify-between items-center mb-2">
                                                <h3 className="text-lg font-medium">{card.title}</h3>
                                                <span className="text-secondary flex items-center gap-2 font-medium">
                                                    <Star size={16} /> {card.rating}
                                                </span>
                                            </div>
                                            <p className="text-black text-sm mb-2">{card.duration}</p>
                                            <ul className="text-sm text-gray-600 mb-4 space-y-1">
                                                {card.highlights.map((item, idx) => (
                                                    <li className="text-xs" key={idx}>• {item}</li>
                                                ))}
                                            </ul>
                                            <button className="w-fit py-1.5 px-3 cursor-pointer text-sm font-medium text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-150 ease-in-out active:bg-blue-800">
                                                {card.ctaText}
                                            </button>
                                        </>
                                    )}

                                    {isAssistance && (
                                        <div className="flex flex-col items-center text-center px-4 pt-6 pb-4 w-full h-auto">
                                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 relative">
                                                <div className="absolute inset-0 border-4 border-green-600 rounded-full opacity-20" />
                                                <Phone size={28} className="text-green-600" />
                                            </div>
                                            <h3 className="text-base font-semibold mb-2 leading-tight">{card.title}</h3>
                                            <p className="text-sm text-gray-600 mb-3 leading-snug max-w-[220px]">{card.description}</p>
                                            <p className="text-green-600 font-medium text-sm mb-3">{card.ctaText}</p>
                                            <div className="flex items-center justify-center gap-2 cursor-pointer border border-green-600 bg-white text-green-700 rounded-lg py-2 w-full max-w-[220px] mb-3 transition hover:bg-green-50">
                                                <Phone size={18} />
                                                <span className="font-semibold text-sm">{card.phoneNumber}</span>
                                            </div>
                                            <p className="text-xs text-gray-500">{card.availability}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}