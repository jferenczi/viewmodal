import { fireEvent, render, screen } from "@testing-library/react";

import Modal from "../components/Modal";

const mockClick = jest.fn();
describe("Modal test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render a close button on Modal", () => {
    const { queryByText } = render(<Modal setModalState={mockClick} />);
    expect(queryByText(/Close/)).toBeTruthy();
  });

  it("should call setModalState function when click on close button", () => {
    render(<Modal setModalState={mockClick} />);
    const button = screen.getByText(/Close/);
    expect(button).toBeTruthy();
    fireEvent.click(button);
    expect(mockClick).toBeCalledTimes(1);
  });

});
