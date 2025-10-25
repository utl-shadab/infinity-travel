import { z } from "zod";

export const TripTypeEnum = z.enum(["round-trip", "one-way"]);
export const CabinEnum = z.enum(["economy", "premium-economy", "business", "first"]);

export const flightSearchSchema = z.object({
  tt: TripTypeEnum,
  from: z.string().length(3),
  to: z.string().length(3),
  dep: z.string().datetime(),
  ret: z.string().datetime().optional(),
  adt: z.coerce.number().min(1).max(9),
  chd: z.coerce.number().min(0).max(8),
  inf: z.coerce.number().min(0).max(4),
  cabin: CabinEnum
});

export type FlightSearch = z.infer<typeof flightSearchSchema>;
