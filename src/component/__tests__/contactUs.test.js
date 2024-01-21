import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
// import "@testing-library/jest-dom";
import "@testing-library/jest-dom";

test("Testing For Contact Us",()=>{
    render(<Contact/>);

    const heading=screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("Testing For Submit Button in Contact component",()=>{
    render(<Contact/>);

    const button=screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();

});

test("Testing input placeholder to be Name",()=>{
    render(<Contact/>);

    const namePlaceholder=screen.getByPlaceholderText("name");

    //Assertion
    expect(namePlaceholder).toBeInTheDocument();
})

test("Testing for 2 input box in the Contact component",()=>{
    render(<Contact/>);

    const inputBoxes=screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
})