import { render, screen } from "@testing-library/react";
import Contact from ".";

it("souhld render the contact section", () => {
  render(<Contact />)

  expect(screen.getByRole("heading")).toHaveTextContent("Contact")
})
