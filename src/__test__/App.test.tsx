import { fireEvent, render, screen } from "@testing-library/react";

import App from "../components/App";

/* In here please contribute a test or tests that 
show the modal meets WCAG 2.1 AA Standards, you can
put your tests in different files to this one */

it("should have NewDay as text", () => {
  const { queryByText } = render(<App />);

  expect(queryByText(/Modal test/)).toBeTruthy();
});

it("should render a button to open Modal", () => {
  const { container } = render(<App />);
  const button = screen.getByText(/Let’s see a modal/);
  expect(button).toBeTruthy();
  expect(button.getAttribute("disabled")).toBe(null);
  fireEvent.click(button);
  expect(button.getAttribute("disabled")).toBe("");

  const closeButton = screen.getByText(/Close/);
  let buttons = container.querySelectorAll("button");

  expect(closeButton).toBeTruthy();
  expect(buttons.length).toBe(2);

  fireEvent.click(closeButton);
  buttons = container.querySelectorAll("button");
  expect(buttons.length).toBe(1);
  expect(button.getAttribute("disabled")).toBe(null);
});
