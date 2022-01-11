import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import { StateProvider } from "../../../Context";
import { AddToCart, IncreaseDecrease } from "./ProductBtn";

test('addToCart - is all the content present?', () => {
  render(
    <StateProvider>
      <BrowserRouter>
        <AddToCart />
      </BrowserRouter>
    </StateProvider>
  );
  expect(screen.getByTestId('add-to-cart')).toBeInTheDocument();
  expect(screen.getByText('Add to cart')).toBeInTheDocument();
});

test('increaseDecrease - is all the content present?', () => {
  render(
    <StateProvider>
      <IncreaseDecrease />
    </StateProvider>
  );
  expect(screen.getByTestId('increase-decrease')).toBeInTheDocument();
  expect(screen.getByText('+')).toBeInTheDocument();
  expect(screen.getByText('-')).toBeInTheDocument();
});
