import { render, screen } from "@testing-library/react"
import { Footer } from "@/components/Footer"

describe("Footer Component", () => {
  it("renders footer branding", () => {
    render(<Footer />)
    expect(screen.getByText("Infinity")).toBeInTheDocument()
  })

  it("renders quick links section", () => {
    render(<Footer />)
    expect(screen.getByText("Quick Links")).toBeInTheDocument()
  })

  it("renders support section", () => {
    render(<Footer />)
    expect(screen.getByText("Support")).toBeInTheDocument()
  })

  it("renders current year in copyright", () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })
})
