import { render, act, screen, fireEvent } from "@testing-library/react";
import RestMenu from "../RestMenu";
import Cart from "../Cart";
import MOCK_DATA from "./Mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render restaurent menu ", async () => {
  await act(async () => {
    return render(<RestMenu />);
  });
  const resName = screen.getByText("The Burger Club");
  expect(resName).toBeInTheDocument();
});
it("should add items when click on add", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestMenu />
      </Provider>
    )
  );
  fireEvent.click(screen.getByText(/Recommended/));
//adding items
  fireEvent.click(screen.getByTestId("Garlic Bread"));
  fireEvent.click(screen.getByTestId("Choco Blast"));
//rendering cart
   await act(async () =>
     render(
       <Provider store={appStore}>
         <BrowserRouter>
           <Cart />
         </BrowserRouter>
       </Provider>
     )
   );

  expect(screen.getAllByTestId("addedResCart").length).toBe(2); // 20 {recommended} + 2{ cart}

  
});
it("should clear the cart on clicking clear all", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestMenu />
      </Provider>
    )
  );
  fireEvent.click(screen.getByText(/Recommended/));
  //adding items
  fireEvent.click(screen.getByTestId("Garlic Bread"));
  fireEvent.click(screen.getByTestId("Choco Blast"));

  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );

  fireEvent.click(screen.getByRole("button", { name: "Clear All" }));

  expect(screen.queryByTestId("addedResCart")).not.toBeInTheDocument();  // getby gives eroor when elmt not found queryby dont give error

});
it("should remove items  in the cart on clicking remove", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestMenu />
      </Provider>
    )
  );
  fireEvent.click(screen.getByText(/Recommended/));
  //adding items
  fireEvent.click(screen.getByTestId("Garlic Bread"));
  //   fireEvent.click(screen.getByTestId("Choco Blast"));

  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );

  //   fireEvent.click(screen.getByRole("button", { name: "Clear All" }));
  fireEvent.click(screen.getByTestId(/remove/));
  expect(screen.queryByTestId("addedResCart")).not.toBeInTheDocument(); // getby gives eroor when elmt not found queryby dont give error

  //   expect(screen.getAllByTestId("addedRes").length).toBe(22); // {20recommended}
});

