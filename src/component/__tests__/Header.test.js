import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render Header component", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const listItems=screen.getAllByRole("listitem");

  expect(listItems.length).toBe(8);
});

it("Should have Cart Item zero",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
        </BrowserRouter>
      );

    const cartItem=screen.getByText("Cart🛒(0)");

    expect(cartItem).toBeInTheDocument();

})

test("Should have Login Button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
        </BrowserRouter>
      );

      const loginButton=screen.getByRole("button",{name:"Login"});

      expect(loginButton).toBeInTheDocument();
})

test("Should check changing of login button to Logout upon Clicking",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
        </BrowserRouter>
      );

      const loginButton=screen.getByRole("button",{name:"Login"});

      fireEvent.click(loginButton);

      const logoutButton=screen.getByRole("button",{name:"Logout"});

      expect(loginButton).toBeInTheDocument();
})