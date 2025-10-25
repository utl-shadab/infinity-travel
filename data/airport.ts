
export type Airport = {
  iata: string; 
  name: string; 
  city: string; 
  country: string; 
};

export const AIRPORTS: Airport[] = [
  { iata: "AAA", name: "Anaa Airport", city: "Anaa", country: "French Polynesia" },
  { iata: "AAB", name: "Arrabury Airport", city: "Tanbar", country: "Australia" },
  { iata: "AAC", name: "El Arish International", city: "El Arish", country: "Egypt" },
  { iata: "AAD", name: "Adado Airport", city: "Adado", country: "Somalia" },
  { iata: "AAE", name: "Rabah Bitat / Les Salines", city: "Annaba", country: "Algeria" },
  { iata: "AAL", name: "Aalborg Airport", city: "Aalborg", country: "Denmark" },
  { iata: "AAR", name: "Aarhus Airport", city: "Aarhus", country: "Denmark" },
  { iata: "AAS", name: "Apalapsili Airport", city: "Apalapsili", country: "Indonesia" },
  { iata: "ABJ", name: "Félix-Houphouët-Boigny", city: "Abidjan", country: "Côte d’Ivoire" },
  { iata: "ABQ", name: "Albuquerque Sunport", city: "Albuquerque", country: "USA" },
  { iata: "ABV", name: "Nnamdi Azikiwe Intl", city: "Abuja", country: "Nigeria" },
  { iata: "ABZ", name: "Aberdeen International", city: "Aberdeen", country: "UK" },
  { iata: "ACA", name: "General Juan N. Álvarez Intl", city: "Acapulco", country: "Mexico" },
  { iata: "ACC", name: "Kotoka International", city: "Accra", country: "Ghana" },
  { iata: "ACE", name: "Lanzarote Airport", city: "Arrecife", country: "Spain" },
  { iata: "ADL", name: "Adelaide Airport", city: "Adelaide", country: "Australia" },
  { iata: "ADQ", name: "Kodiak Airport", city: "Kodiak", country: "USA" },
  { iata: "AEP", name: "Aeroparque Jorge Newbery", city: "Buenos Aires", country: "Argentina" },
  { iata: "AER", name: "Sochi International", city: "Sochi", country: "Russia" },
  { iata: "AES", name: "Ålesund Vigra", city: "Ålesund", country: "Norway" },
  { iata: "AFA", name: "San Rafael Airport", city: "San Rafael", country: "Argentina" },
  { iata: "AGA", name: "Agadir–Al Massira", city: "Agadir", country: "Morocco" },
  { iata: "AGP", name: "Málaga–Costa del Sol", city: "Málaga", country: "Spain" },
  { iata: "AGU", name: "Jesús Terán (Aguascalientes)", city: "Aguascalientes", country: "Mexico" },
  { iata: "AKL", name: "Auckland Airport", city: "Auckland", country: "New Zealand" },
  { iata: "ALC", name: "Alicante–Elche", city: "Alicante", country: "Spain" },
  { iata: "ALG", name: "Houari Boumediene", city: "Algiers", country: "Algeria" },
  { iata: "AMM", name: "Queen Alia Intl", city: "Amman", country: "Jordan" },
  { iata: "AMS", name: "Amsterdam Schiphol", city: "Amsterdam", country: "Netherlands" },
  { iata: "ANC", name: "Ted Stevens Anchorage", city: "Anchorage", country: "USA" },
  { iata: "ANU", name: "V. C. Bird Intl", city: "St. John’s", country: "Antigua & Barbuda" },
  { iata: "AOI", name: "Ancona Falconara", city: "Ancona", country: "Italy" },
  { iata: "AOR", name: "Sultan Abdul Halim", city: "Alor Setar", country: "Malaysia" },
  { iata: "APW", name: "Faleolo International", city: "Apia", country: "Samoa" },
  { iata: "ARN", name: "Stockholm Arlanda", city: "Stockholm", country: "Sweden" },
  { iata: "ASB", name: "Ashgabat International", city: "Ashgabat", country: "Turkmenistan" },
  { iata: "ASM", name: "Asmara Intl", city: "Asmara", country: "Eritrea" },
  { iata: "ASP", name: "Alice Springs", city: "Alice Springs", country: "Australia" },
  { iata: "ATH", name: "Athens Intl (Eleftherios Venizelos)", city: "Athens", country: "Greece" },
  { iata: "ATL", name: "Hartsfield–Jackson Atlanta", city: "Atlanta", country: "USA" },
  { iata: "AUH", name: "Abu Dhabi International", city: "Abu Dhabi", country: "UAE" },
  { iata: "AUS", name: "Austin–Bergstrom", city: "Austin", country: "USA" },
  { iata: "AVL", name: "Asheville Regional", city: "Asheville", country: "USA" },
  { iata: "AVV", name: "Avalon Airport", city: "Geelong", country: "Australia" },
  { iata: "AXA", name: "Clayton J. Lloyd Intl", city: "The Valley", country: "Anguilla" },
  { iata: "AYT", name: "Antalya Airport", city: "Antalya", country: "Türkiye" },
  { iata: "AZA", name: "Phoenix–Mesa Gateway", city: "Mesa", country: "USA" },
  { iata: "BAH", name: "Bahrain International", city: "Manama", country: "Bahrain" },
  { iata: "BAQ", name: "Ernesto Cortissoz Intl", city: "Barranquilla", country: "Colombia" },
  { iata: "BCN", name: "Barcelona–El Prat", city: "Barcelona", country: "Spain" },
  { iata: "BDA", name: "L.F. Wade International", city: "Hamilton", country: "Bermuda" },
  { iata: "BDL", name: "Bradley International", city: "Hartford", country: "USA" },
  { iata: "BEG", name: "Belgrade Nikola Tesla", city: "Belgrade", country: "Serbia" },
  { iata: "BEL", name: "Belém/Val-de-Cans", city: "Belém", country: "Brazil" },
  { iata: "BER", name: "Berlin Brandenburg", city: "Berlin", country: "Germany" },
  { iata: "BFS", name: "Belfast Intl", city: "Belfast", country: "UK" },
  { iata: "BGY", name: "Milan Bergamo (Orio al Serio)", city: "Bergamo", country: "Italy" },
  { iata: "BHD", name: "Belfast City (George Best)", city: "Belfast", country: "UK" },
  { iata: "BHX", name: "Birmingham Airport", city: "Birmingham", country: "UK" },
  { iata: "BKK", name: "Bangkok Suvarnabhumi", city: "Bangkok", country: "Thailand" },
  { iata: "BNA", name: "Nashville Intl", city: "Nashville", country: "USA" },
  { iata: "BNE", name: "Brisbane Airport", city: "Brisbane", country: "Australia" },
  { iata: "BOG", name: "El Dorado Intl", city: "Bogotá", country: "Colombia" },
  { iata: "BOM", name: "Chhatrapati Shivaji Intl", city: "Mumbai", country: "India" },
  { iata: "BOS", name: "Boston Logan Intl", city: "Boston", country: "USA" },
  { iata: "BRU", name: "Brussels Airport", city: "Brussels", country: "Belgium" },
  { iata: "BSB", name: "Brasília Intl", city: "Brasília", country: "Brazil" },
  { iata: "BTS", name: "Bratislava Airport", city: "Bratislava", country: "Slovakia" },
  { iata: "BUD", name: "Budapest Ferenc Liszt", city: "Budapest", country: "Hungary" },
  { iata: "BUF", name: "Buffalo Niagara Intl", city: "Buffalo", country: "USA" },
];

export const searchAirports = (query: string): Airport[] => {
  const q = query.trim().toLowerCase();
  if (!q) return AIRPORTS.slice(0, 50);
  return AIRPORTS.filter(a =>
    a.iata.toLowerCase().includes(q) ||
    a.city.toLowerCase().includes(q) ||
    a.name.toLowerCase().includes(q) ||
    a.country.toLowerCase().includes(q)
  )
};