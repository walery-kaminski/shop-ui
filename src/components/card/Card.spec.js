import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import { StateProvider } from "../../Context";
import Card from "./Card";

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
        <Card product={sampleProduct} />
      </BrowserRouter>
    </StateProvider>
  );
  expect(screen.getByTestId('card-wrapper')).toBeInTheDocument();
  expect(screen.getByText(sampleProduct.name)).toBeInTheDocument();
  expect(screen.getByText(sampleProduct.category)).toBeInTheDocument();
});
