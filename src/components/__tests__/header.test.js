import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("should  contains Login button", () => {
  render(
    <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
    </BrowserRouter>
  );
const btn=screen.getByRole("button" , {name: "Login"});
expect(btn).toBeInTheDocument();
});

it("should  contains cart button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cart = screen.getByAltText("cart");
  expect(cart).toBeInTheDocument();
});

it("should change to Logout when clicked button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn);
  const logoutBtn = screen.getByRole("button" , {name : "Logout"});
  
  expect(logoutBtn).toBeInTheDocument();
});
