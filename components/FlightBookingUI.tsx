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
import { sampleFlight } from "@/data/flights";
import { useSearchStore } from "@/app/store/searchStore";

export default function FlightBookingUI() {

  const { tripTypeVal, fromval, toVal, departureDateVal, returnDateVal } = useSearchStore();

  const filteredFlights = sampleFlight.filter((flight) => {

    const matchFrom = !fromval || flight.departure.airport.toLowerCase() === fromval.toLowerCase();
    const matchTo = !toVal || flight.departure.arrivalAirport.toLowerCase() === toVal.toLowerCase();

    return matchFrom && matchTo;

  });

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

        <div>
          {filteredFlights.length > 0 ? (
            filteredFlights.map((flight, index) => <FlightCard key={index} flight={flight} />)
          ) : (
            <p>No flights found</p>
          )}
        </div>

      </main>
    </div>
  );
}
