import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';


import App from "../App";
import userEvent from "@testing-library/user-event";



// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render(<App />);
  const userNameInput = screen.getByLabelText("Enter Username")
  expect(userNameInput).toHaveDisplayValue("")

  const emailInput = screen.getByLabelText("Enter Email")
  expect(emailInput).toHaveDisplayValue("")
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />)
  const checkboxes = screen.getAllByRole("checkbox")
  checkboxes.forEach((checkbox) => {
    expect(checkbox).not.toBeChecked();
  });

});

test("the checkboxes are initially unchecked", () => {
   render(<App />)
  const checkboxes = screen.getAllByRole("checkbox")
  checkboxes.forEach((checkbox) => {
    expect(checkbox).not.toBeChecked();
  });

});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);

  const fullName = screen.getByLabelText(/enter Username/i);
  const emailAddress = screen.getByLabelText(/enter email/i);

  userEvent.type(fullName, "Fname Lname");
  userEvent.type(emailAddress, "fnamelname@email.com");

  expect(fullName).toHaveValue("Fname Lname");
  expect(emailAddress).toHaveValue("fnamelname@email.com");
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);
  
  const checkbox1 = screen.getByRole("checkbox", { name: /checkbox 1/i });
  const checkbox2 = screen.getByRole("checkbox", { name: /checkbox 2/i });
  const checkbox3 = screen.getByRole("checkbox", { name: /checkbox 3/i });

  userEvent.click(checkbox1)
  userEvent.click(checkbox2)
  userEvent.click(checkbox3)

  expect(checkbox1).toBeChecked()
  expect(checkbox2).toBeChecked()
  expect(checkbox3).toBeChecked()
  
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);
  userEvent.click(screen.getByRole("button"));
  
  const message = screen.getByText(/Thanks/i);
  expect(message).toBeInTheDocument();
});
