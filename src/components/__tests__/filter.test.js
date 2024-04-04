import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "./Mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should work the search on pizza input ", async() => {
    await act(async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
  });
  //total cards
  const totalCards = screen.getAllByTestId("rescard");
  expect(totalCards.length).toBe(9);
  //filtering cards
  fireEvent.change(screen.getByPlaceholderText("Search Hotels"), { target: { value: "pizza" } });
  fireEvent.click(screen.getByTestId("searchBtn"));
  const filteredCards = screen.getAllByTestId("rescard");
  expect(filteredCards.length).toBe(2);
});

it("should filter the cards when click on best restaurant btn ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  fireEvent.click(screen.getByText("Best restaurant"));;
  const filterCards=screen.getAllByTestId("rescard");
  expect(filterCards.length).toBe(5);

});
