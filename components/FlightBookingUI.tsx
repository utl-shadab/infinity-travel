import React from "react";
import { Card } from "@/components/ui/card";
import FiltersPanel from "./Filters-panel";
import FlightTimeSelector from "./FlightTimeSelector";
import Airlines from "./Airlines";
import ConnectedAirport from "./ConnectedAirport";
import Duration from "./Duration";
import AirlinePriceSlide from "./AirlinePriceSlide";
import FareOptionsBar from "./FareOptionsBar";
import FlightCard from "./FlightCard";

export default function FlightBookingUI() {

  const sampleFlight = {
    ticketsLeft: 5,
    departure: {
      time: '11:50pm',
      airport: 'JFK',
      duration: '15h 20m',
      arrivalTime: '3:05pm',
      arrivalAirport: 'HND',
      nextDay: 1,
      stopover: 'HNL',
      stops: [
        { airport: 'Honolulu International Airport (HNL)', layover: '2h 15m' }
      ],
      airlineLogo: '/airlogo.png'
    },
    return: {
      time: '8:25pm',
      airport: 'HND',
      duration: '13h 40m',
      arrivalTime: '9:05am',
      arrivalAirport: 'JFK',
      stopover: 'DFW',
      stops: [
        { airport: 'Honolulu International Airport (HNL)', layover: '2h 15m' },
        { airport: 'Daniel K. Inouye International Airport (DFW)', layover: '5h 15m' }
      ],
      airlineLogo: '/airlogo.png'
    },
    operatedBy: 'United Airlines',
    price: '711',
    cents: '11',
    routeDetails: {
      departure: {
        date: 'Tuesday, Oct 14, 2025',
        from: 'New York (JFK)',
        to: 'Tokyo (HND)',
        time: '11:50pm - 3:05pm+1',
        journeyDuration: '12h 15m',
        arrives: 'Wednesday, Oct 15, 2025',
        segments: [
          {
            departureTime: '11:50pm',
            departureAirport: 'John F. Kennedy International Airport (JFK)',
            departureAirportName: '',
            arrivalTime: '07:45am',
            arrivalAirport: 'Daniel K. Inouye International Airport (HNL)',
            arrivalAirportName: '',
            airline: 'United Airlines',
            class: 'Premium Economy',
            flightNumber: 'Flight 1528',
            aircraft: 'Aircraft 77W',
            operatedBy: 'Operated by All Nippon Airways',
            travelTime: '6h 45m',
            airlineLogo: '/airlogo.png',
            layover: '1h 50m'
          },
          {
            departureTime: '9:35am',
            departureAirport: 'Daniel K. Inouye International Airport (HNL)',
            departureAirportName: '',
            arrivalTime: '3:05pm+1',
            arrivalAirport: 'Haneda Airport international Airport (HND)',
            arrivalAirportName: '',
            airline: 'United Airlines',
            class: 'Premium Economy',
            flightNumber: 'Flight 1420',
            aircraft: 'Aircraft 79C',
            operatedBy: 'Operated by All Nippon Airways',
            travelTime: '6h 45m',
            airlineLogo: '/airlogo.png'
          }
        ]
      },
      return: {
        date: 'Tuesday, Oct 30, 2025',
        from: 'Tokyo (HND)',
        to: 'New York (JFK)',
        time: '8:25pm - 5:05am',
        journeyDuration: '9h 15m',
        arrives: 'Wednesday, Oct 31, 2025',
        segments: [
          {
            departureTime: '8:25pm',
            departureAirport: 'Haneda Airport international Airport (HND)',
            departureAirportName: '',
            arrivalTime: '07:45am',
            arrivalAirport: 'Daniel K. Inouye International Airport (HNL)',
            arrivalAirportName: '',
            airline: 'Spirit Airlines',
            class: 'Premium Economy',
            flightNumber: 'Flight 1528',
            aircraft: 'Aircraft 77W',
            operatedBy: 'Operated by All Nippon Airways',
            travelTime: '6h 45m',
            airlineLogo: '/airlogo.png',
            layover: '1h 50m'
          },
          {
            departureTime: '9:35am',
            departureAirport: 'Daniel K. Inouye International Airport (HNL)',
            departureAirportName: '',
            arrivalTime: '3:05pm+1',
            arrivalAirport: 'John F. Kennedy International Airport (JFK)',
            arrivalAirportName: '',
            airline: 'United Airlines',
            class: 'Premium Economy',
            flightNumber: 'Flight 1420',
            aircraft: 'Aircraft 79C',
            operatedBy: 'Operated by All Nippon Airways',
            travelTime: '6h 45m',
            airlineLogo: '/airlogo.png'
          }
        ]
      }
    },
    baggageDetails: {
      segments: [
        { name: 'JFK to HNL' },
        { name: 'HNL to HND' },
        { name: 'HND to HNL' },
        { name: 'HNL to JFK' }
      ],
      airlines: [
        {
          name: 'United Airlines',
          route: 'JFK to HND',
          class: 'Economy',
          logo: '/airlogo.png',
          carryOn: {
            description: 'Up to 7 Kgs small bag or bag pack',
            status: 'Included'
          },
          checkedBag: {
            description: 'Up to 23 Kgs, Lorem ipsum... supporting content',
            status: 'Included'
          }
        },
        {
          name: 'Spirit Airlines',
          route: 'HND to JFK',
          class: 'Economy',
          logo: '/airlogo.png',
          carryOn: {
            description: 'Up to 7 Kgs small bag or bag pack',
            status: 'Included'
          },
          checkedBag: {
            description: 'Up to 50 Kgs, Lorem ipsum... supporting content',
            status: 'Not-Included'
          }
        }
      ]
    }
  };
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[30%_70%] gap-3">
      {/* Sidebar Filters */}
      <aside className="space-y-3">
        <Card className="bg-white">
          <FiltersPanel />
          <FlightTimeSelector />
          <Airlines />
          <ConnectedAirport />
          <Duration />
        </Card>
      </aside>

      {/* Main Section */}
      <main className="space-y-6">
        <AirlinePriceSlide />
        <FareOptionsBar />
        <FlightCard flight={sampleFlight} />
        <FlightCard flight={sampleFlight} />
      </main>
    </div>
  );
}
