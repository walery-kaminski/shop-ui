import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import { StateProvider } from "../../Context";
import Home from "./Home";

test('is all the content present?', () => {
  render(
    <StateProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </StateProvider>
  );
  expect(screen.getByTestId('home-wrapper')).toBeInTheDocument();
  expect(screen.getByTestId('products')).toBeInTheDocument();
  expect(screen.getAllByTestId('empty-products')).toHaveLength(5);
});
