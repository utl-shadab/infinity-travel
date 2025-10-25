"use client";
import FlightSearchForm from "@/components/FlightSearchForm";
import { Header } from "@/components/header";
import Footer from "@/components/Footer"
import FlightBookingUI from "@/components/FlightBookingUI";
import { useSearchStore } from "@/app/store/searchStore";

export default function FlightListingPage() {

    const { tripTypeVal, fromval, toVal, departureDateVal, returnDateVal } = useSearchStore();

    const payload = {
        tripTypeVal, fromval, toVal, departureDateVal, returnDateVal
    }
    console.log(payload);

    return (
        <div className="min-h-screen flex flex-col md:bg-white bg-gray-50">
            <Header />
            <div className="max-w-7xl mx-auto px-3 w-full  sm:px-6 lg:px-8 py-6">
                <FlightSearchForm mode="modify" />
            </div>
            <section className="mt-6  bg-gray-100">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
                    <FlightBookingUI />
                </div>
            </section>
            <Footer />
        </div>
    );
}
