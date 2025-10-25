
export type CabinClass = "Economy" | "Premium Economy" | "Business" | "First";

export interface TravelerState {
  adults: number;
  children: number;
  infantsSeat: number;
  infantsLap: number;
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
  cabinClass: "Economy",
};

export function getTravelerSummary(state: TravelerState) {
  const total = state.adults + state.children + state.infantsSeat + state.infantsLap;
  return `${total} Traveler${total > 1 ? 's' : ''}, ${state.cabinClass}`;
}