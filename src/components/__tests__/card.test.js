import { render, screen } from "@testing-library/react";
import MOCK_DATA from "./Mocks/cardMockData.json";
import "@testing-library/jest-dom";
import Card, { addVegSign } from "../Card";

it("should render name of restraurent ", () => {
  render(<Card data={MOCK_DATA} />);
  const name = screen.getByText("Dark Brown");
  expect(name).toBeInTheDocument();
});

it("renders the Card H.O.C component with a Veg Sign", () => {
  //chatgpt
  //    const CardWithVegSign = addVegSign(Card);
  //    const { container } = render(<CardWithVegSign data={MOCK_DATA}  />);

  //    // Check if Veg Sign is rendered
  //    expect(container.querySelector('img[src="' + VEG_SIGN + '"]')).toBeInTheDocument();

  //    // Check if Card component is rendered
  //    expect(container.querySelector(".card")).toBeInTheDocument();

  const CardWithVegSign = addVegSign(Card);
  render(<CardWithVegSign data={MOCK_DATA} />);
  const vegSign = screen.getByAltText(/veg/); // / xyz/ to write approximate vlaue  /ve/ = "veg"
  expect(vegSign).toBeInTheDocument();
});
