import { DESTINATIONS, NAVIGATION_ITEMS } from "@/lib/constants"

describe("Constants", () => {
  describe("DESTINATIONS", () => {
    it("should have at least 6 destinations", () => {
      expect(DESTINATIONS.length).toBeGreaterThanOrEqual(6)
    })

    it("each destination should have required fields", () => {
      DESTINATIONS.forEach((destination) => {
        expect(destination).toHaveProperty("id")
        expect(destination).toHaveProperty("name")
        expect(destination).toHaveProperty("description")
        expect(destination).toHaveProperty("image")
        expect(destination).toHaveProperty("rating")
        expect(destination).toHaveProperty("reviews")
        expect(destination).toHaveProperty("price")
      })
    })

    it("ratings should be between 0 and 5", () => {
      DESTINATIONS.forEach((destination) => {
        expect(destination.rating).toBeGreaterThanOrEqual(0)
        expect(destination.rating).toBeLessThanOrEqual(5)
      })
    })
  })

  describe("NAVIGATION_ITEMS", () => {
    it("should have at least 4 navigation items", () => {
      expect(NAVIGATION_ITEMS.length).toBeGreaterThanOrEqual(4)
    })

    it("each navigation item should have label and href", () => {
      NAVIGATION_ITEMS.forEach((item) => {
        expect(item).toHaveProperty("label")
        expect(item).toHaveProperty("href")
      })
    })
  })
})
