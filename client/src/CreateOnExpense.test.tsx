// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import App from "./App";
// import React from "react";

// describe("Create an Expense", () => {
//   test("Verify that a new expense is correctly added to the expense list", () => {
//     render(<App />);

//     const originalRemaining = screen.getByText("Remaining: $20");
//     expect(originalRemaining).toBeInTheDocument();

//     const originalspent = screen.getByText("Spent so far: $0");
//     expect(originalspent).toBeInTheDocument();

//     const budget = screen.getByText("Budget: $20");
//     expect(budget).toBeInTheDocument();

//     const saveButton = screen.getByText("Save");
//     expect(saveButton).toBeInTheDocument();

//     const nameInput = screen.getByLabelText("Name");
//     const costInput = screen.getByLabelText("Cost");

//     //add expense 1

//     fireEvent.change(nameInput, { target: { value: "apples" } });
//     fireEvent.change(costInput, { target: { value: 3 } });

//     fireEvent.click(saveButton);

//     const newExpenseName = screen.getByText("apples");
//     const newExpenseCost = screen.getByText("$3");

//     expect(newExpenseName).toBeInTheDocument();
//     expect(newExpenseCost).toBeInTheDocument();

//     //add expense 2
//     fireEvent.change(nameInput, { target: { value: "bananas" } });
//     fireEvent.change(costInput, { target: { value: 4 } });

//     fireEvent.click(saveButton);

//     const newExpenseName2 = screen.getByText("bananas");
//     const newExpenseCost2 = screen.getByText("$4");

//     expect(newExpenseName2).toBeInTheDocument();
//     expect(newExpenseCost2).toBeInTheDocument();

//     //add expense 3
//     fireEvent.change(nameInput, { target: { value: "milk" } });
//     fireEvent.change(costInput, { target: { value: 5 } });

//     fireEvent.click(saveButton);

//     const newExpenseName3 = screen.getByText("milk");
//     const newExpenseCost3 = screen.getByText("$5");

//     expect(newExpenseName3).toBeInTheDocument();
//     expect(newExpenseCost3).toBeInTheDocument();

//     //check if amount is correctly calculated

//     const newRemaining = screen.getByText("Remaining: $8");
//     expect(newRemaining).toBeInTheDocument();

//     const newspent = screen.getByText("Spent so far: $12");
//     expect(newspent).toBeInTheDocument();
//   });

//   // Mock the alert function before each test
//   beforeEach(() => {
//     jest.spyOn(window, "alert").mockImplementation(() => {});
//   });

//   // Clear the mock after each test
//   afterEach(() => {
//     jest.restoreAllMocks();
//   });

//   //test to see if popup is displayed when the total spent exceeds the budget
//   test("Verify that the popup is displayed when the total spent exceeds the budget", async () => {
//     render(<App />);

//     const saveButton = screen.getByText("Save");
//     expect(saveButton).toBeInTheDocument();

//     const nameInput = screen.getByLabelText("Name");
//     const costInput = screen.getByLabelText("Cost");

//     fireEvent.change(nameInput, { target: { value: "coffee" } });
//     fireEvent.change(costInput, { target: { value: 21 } });

//     fireEvent.click(saveButton);

//     const newExpenseName = screen.getByText("coffee");
//     const newExpenseCost = screen.getByText("$21");

//     expect(newExpenseName).toBeInTheDocument();
//     expect(newExpenseCost).toBeInTheDocument();

//     // Check if the alert is displayed
//     await waitFor(() => {
//       expect(window.alert).toHaveBeenCalledWith("You've exceeded your budget");
//     });
//   });
// });
