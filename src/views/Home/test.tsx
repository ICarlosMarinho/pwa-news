import Home from ".";
import { render, screen } from "@testing-library/react";

describe("Home view test suite", () => {
  test("Should render initial message", () => {
    const defaultMsg = "Home is working!";
    render(<Home />);

    expect(screen.getByText(defaultMsg)).toBeInTheDocument();
  });
});
