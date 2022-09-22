import { render, screen } from "@testing-library/react";
import About from ".";

it("renders the about section", () => {
  render(<About />)

  expect(screen.getByRole("heading")).toHaveTextContent("About")
})
