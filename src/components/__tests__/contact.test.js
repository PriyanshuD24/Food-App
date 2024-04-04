import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// flow : render => query => assertion
describe("This is just for grouping / Test cases for contact component", () => {
  test("Should contain heading ", () => {
    render(<Contact />); //render
    const head = screen.getByRole("heading"); //query
    expect(head).toBeInTheDocument(); // asserion
  });
  test("should contain name placeholder text", () => {
    render(<Contact />);
    const place = screen.getByPlaceholderText("name");
    expect(place).toBeInTheDocument();
  });
  it("should contain 2 input in Contact component", () => {
    render(<Contact />);
    const numberOfInputs = screen.getAllByRole("textbox");
    expect(numberOfInputs.length).toBe(2);
  });
  it("should contain submit buttont", () => {
    render(<Contact />);
    const submit = screen.getByRole("button");
    expect(submit).toBeInTheDocument();
  });
});

