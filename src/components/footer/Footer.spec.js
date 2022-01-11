import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Footer from "./Footer";

test('is all the content present?', () => {
  render(<Footer />);
  expect(screen.getByTestId('footer-wrapper')).toBeInTheDocument();
  expect(screen.getAllByText('© 2022 Shop & Buy Stuff')).toHaveLength(1);
});
