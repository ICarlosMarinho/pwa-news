import { render, screen } from "@testing-library/react";
import { FC, ReactNode } from "react";
import ErrorBoundary from ".";

describe("ErrorBoundary test suite", () => {
  const renderComponent = (children: ReactNode) => {
    render(<ErrorBoundary>{children}</ErrorBoundary>);
  };

  test("Error Boundary should render fallback message", () => {
    console.log = jest.fn(() => {});
    console.error = jest.fn(() => {});

    const fallbackMsg =
      "Ocorreu um erro, tente novamente ou entre em contato com os desenvolvedores.";
    const Children: FC = () => {
      throw new Error("Test error");
    };

    renderComponent(<Children />);

    expect(screen.queryByText(fallbackMsg)).toBeInTheDocument();
  });

  test("Error Boundary should render children", () => {
    const text = "Test message";
    const Children: FC = () => <h1>{text}</h1>;

    renderComponent(<Children />);

    expect(screen.queryByText(text)).toBeInTheDocument();
  });
});
