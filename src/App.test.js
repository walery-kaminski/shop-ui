import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { StateProvider } from "./Context";

test('is all the content present?', () => {
  render(
    <StateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  );
  expect(screen.getByTestId('app')).toBeInTheDocument();
});
