
export const sampleFlight = [
    {
        ticketsLeft: 5,
        departure: {
            time: '11:50pm',
            airport: 'AAA',
            duration: '15h 20m',
            arrivalTime: '3:05pm',
            arrivalAirport: 'AAB',
            nextDay: 1,
            stopover: 'AAC',
            stops: [
                { airport: 'El Arish International (AAC)', layover: '2h 15m' }
            ],
            airlineLogo: '/airlogo.png'
        },
        return: {
            time: '8:25pm',
            airport: 'AAB',
            duration: '13h 40m',
            arrivalTime: '9:05am',
            arrivalAirport: 'AAA',
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
    },
    {
        ticketsLeft: 2,
        departure: {
            time: '09:30pm',
            airport: 'AAA',
            duration: '10h 20m',
            arrivalTime: '1:10pm',
            arrivalAirport: 'AAB',
            nextDay: 1,
            stopover: 'AAC',
            stops: [
                { airport: 'El Arish International (AAC)', layover: '2h 15m' }
            ],
            airlineLogo: '/airlogo.png'
        },
        return: {
            time: '8:25pm',
            airport: 'AAB',
            duration: '13h 40m',
            arrivalTime: '9:05am',
            arrivalAirport: 'AAA',
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
    },
    {
        ticketsLeft: 5,
        departure: {
            time: '11:50pm',
            airport: 'AAA',
            duration: '15h 20m',
            arrivalTime: '3:05pm',
            arrivalAirport: 'AAD',
            nextDay: 1,
            stopover: 'AAC',
            stops: [
                { airport: 'El Arish International (AAC)', layover: '2h 15m' }
            ],
            airlineLogo: '/airlogo.png'
        },
        return: {
            time: '8:25pm',
            airport: 'AAD',
            duration: '13h 40m',
            arrivalTime: '9:05am',
            arrivalAirport: 'AAA',
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
    },
    {
        ticketsLeft: 5,
        departure: {
            time: '11:50pm',
            airport: 'AAA',
            duration: '15h 20m',
            arrivalTime: '3:05pm',
            arrivalAirport: 'AAE',
            nextDay: 1,
            stopover: 'AAC',
            stops: [
                { airport: 'El Arish International (AAC)', layover: '2h 15m' }
            ],
            airlineLogo: '/airlogo.png'
        },
        return: {
            time: '8:25pm',
            airport: 'AAE',
            duration: '13h 40m',
            arrivalTime: '9:05am',
            arrivalAirport: 'AAA',
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
    },
]
