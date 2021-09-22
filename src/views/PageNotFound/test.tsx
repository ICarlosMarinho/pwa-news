import { render, screen } from "@testing-library/react";

import PageNotFound from ".";

describe("PageNotFound test suite", () => {
  test("Should render error message", () => {
    const text = "Página não encontrada.";

    render(<PageNotFound />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
