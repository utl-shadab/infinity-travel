import { render, screen } from "@testing-library/react"
import { Header } from "@/components/header"

describe("Header Component", () => {
  it("renders the logo", () => {
    render(<Header />)
    const logo = screen.getByText("Infinity")
    expect(logo).toBeInTheDocument()
  })

  it("renders navigation links", () => {
    render(<Header />)
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("Destinations")).toBeInTheDocument()
    expect(screen.getByText("About")).toBeInTheDocument()
    expect(screen.getByText("Contact")).toBeInTheDocument()
  })

  it("renders book now button", () => {
    render(<Header />)
    const bookButton = screen.getByText("Book Now")
    expect(bookButton).toBeInTheDocument()
  })
})
