import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { StateProvider } from "../../Context";
import DialogBox from "./DialogBox";

test('renders learn react link', () => {
  render(
    <StateProvider>
      <DialogBox />
    </StateProvider>
  );
  expect(screen.getByTestId('dialog-box-wrapper')).toBeInTheDocument();
});
