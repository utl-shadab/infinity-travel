import { CabinClass } from "@/components/Traveler-dropdown";
import { create } from "zustand";


interface SearchState {
    tripTypeVal: string;
    fromval: string;
    toVal: string;
    departureDateVal: string;
    returnDateVal: string;
    adultsVal: number,
    childrenVal: number,
    infantsSeatVal: number,
    infantsLapVal: number,
    cabinClassVal: CabinClass
    setSearch: (data: Partial<SearchState>) => void;
    resetSearch: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
    tripTypeVal: "",
    fromval: "",
    toVal: "",
    departureDateVal: "",
    returnDateVal: "",
    adultsVal: 1,
    childrenVal: 0,
    infantsSeatVal: 0,
    infantsLapVal: 0,
    cabinClassVal: "Economy",

    setSearch: (data) => set((state) => ({ ...state, ...data })),

    resetSearch: () =>
        set({
            tripTypeVal: "",
            fromval: "",
            toVal: "",
            departureDateVal: "",
            returnDateVal: "",
            adultsVal: 1,
            childrenVal: 0,
            infantsSeatVal: 0,
            infantsLapVal: 0,
            cabinClassVal: "Economy"
        }),
}));
