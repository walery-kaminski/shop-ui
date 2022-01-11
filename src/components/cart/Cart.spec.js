import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import { StateProvider } from "../../Context";
import Cart from "./Cart";

test('is all the content present?', () => {
  render(
    <StateProvider>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </StateProvider>
  );
  expect(screen.getByTestId('cart-wrapper')).toBeInTheDocument();
  expect(screen.getByTestId('cart-products')).toBeInTheDocument();
  expect(screen.getByTestId('product-table')).toBeInTheDocument();
  expect(screen.getAllByTestId('cart-empty-products')).toHaveLength(5);
});
