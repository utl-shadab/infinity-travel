import type { FlightSearch } from "@/lib/flightSearchSchema";

export function toQuery(fs: FlightSearch) {
  const params = new URLSearchParams();
  Object.entries(fs).forEach(([k, v]) => {
    if (v) params.set(k, String(v));
  });
  return params.toString();
}
