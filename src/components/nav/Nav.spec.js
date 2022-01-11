import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import { StateProvider } from "../../Context";
import Nav from "./Nav";

test('is all the content present?', () => {
  render(
    <StateProvider>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </StateProvider>
  );
  expect(screen.getByTestId('nav-wrapper')).toBeInTheDocument();
  expect(screen.getByTestId('search-input')).toBeRequired();
  expect(screen.getByTestId('search-button')).toBeInTheDocument();
  expect(screen.getByTestId('cart-home')).toHaveTextContent('Cart');
});
