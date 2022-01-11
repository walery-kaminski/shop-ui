import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import { StateProvider } from "../../../Context";
import Detail from "./Detail";

const sampleProduct = {
  id: '1',
  name: 'Ground Coffee',
  description: 'Bag of ground coffee beans',
  price: 2.0,
  image: './images/coffee.jpg',
  category: 'coffee beans',
};

test('is all the content present?', () => {
  render(
    <StateProvider>
      <BrowserRouter>
        <Detail product={sampleProduct} />
      </BrowserRouter>
    </StateProvider>
  );
  expect(screen.getByTestId('detail-wrapper')).toBeInTheDocument();
  expect(screen.getByTestId('detail-title')).toBeInTheDocument();
  expect(screen.getByTestId('detail-info')).toBeInTheDocument();
});
