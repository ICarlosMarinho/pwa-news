import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";

import Header from ".";
import AppContextMock from "../../mocks/AppContextMock";

describe("Header test suite", () => {
  const renderComponent = () => {
    return render(
      <AppContextMock history={createMemoryHistory()}>
        <Header />
      </AppContextMock>
    );
  };

  test("Header should render logo", () => {
    const text = "PWA News";

    renderComponent();

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test("Header should render search form", () => {
    const placeholder = "Ex. política";

    renderComponent();

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
