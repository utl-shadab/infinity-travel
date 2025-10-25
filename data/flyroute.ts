export interface MockFlight {
  id: string;
  airline: string;
  price: number;
  stops: number;
  departure: string;
  arrival: string;
  from: string;
  to: string;
  cabin: string;
}

export const mockFlights: MockFlight[] = [
  {
    id: "1",
    airline: "United Airlines",
    price: 711.11,
    stops: 1,
    departure: "2025-10-14T23:50:00",
    arrival: "2025-10-15T15:05:00",
    from: "JFK",
    to: "HND",
    cabin: "premium-economy"
  },
  {
    id: "2",
    airline: "Air Canada",
    price: 650.50,
    stops: 1,
    departure: "2025-10-14T09:00:00",
    arrival: "2025-10-15T13:30:00",
    from: "JFK",
    to: "HND",
    cabin: "economy"
  },
  {
    id: "3",
    airline: "Japan Airlines",
    price: 899.99,
    stops: 0,
    departure: "2025-10-14T10:30:00",
    arrival: "2025-10-15T14:15:00",
    from: "JFK",
    to: "HND",
    cabin: "business"
  },
  {
    id: "4",
    airline: "United Airlines",
    price: 1200.00,
    stops: 0,
    departure: "2025-10-14T12:30:00",
    arrival: "2025-10-15T16:45:00",
    from: "JFK",
    to: "HND",
    cabin: "first"
  }
];
