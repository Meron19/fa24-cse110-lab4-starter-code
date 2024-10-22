import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Create an Expense", () => {
    test("Verify that a new expense is correctly added to the expense list", () => {
      render(<App/>);

      const originalRemaining = screen.getByText("Remaining: $20")
      expect(originalRemaining).toBeInTheDocument();

      const originalspent = screen.getByText("Spent so far: $0");
      expect(originalspent).toBeInTheDocument();

      const budget = screen.getByText("Budget: $20");
      expect(budget).toBeInTheDocument();

      const saveButton = screen.getByText("Save");
      expect(saveButton).toBeInTheDocument();

      const nameInput = screen.getByLabelText("Name");
      const costInput = screen.getByLabelText("Cost");

      //add expense 1

      fireEvent.change(nameInput, {target: {value:"apples"}});
      fireEvent.change(costInput, {target: {value:3}});

      fireEvent.click(saveButton);

      const newExpenseName = screen.getByText("apples");
      const newExpenseCost = screen.getByText("$3");

      expect(newExpenseName).toBeInTheDocument();
      expect(newExpenseCost).toBeInTheDocument();

      //add expense 2
      fireEvent.change(nameInput, {target: {value:"bananas"}});
      fireEvent.change(costInput, {target: {value:4}});

      fireEvent.click(saveButton);

      const newExpenseName2 = screen.getByText("bananas");
      const newExpenseCost2 = screen.getByText("$4");

      expect(newExpenseName2).toBeInTheDocument();
      expect(newExpenseCost2).toBeInTheDocument();

      //add expense 3
      fireEvent.change(nameInput, {target: {value:"milk"}});
      fireEvent.change(costInput, {target: {value:5}});

      fireEvent.click(saveButton);

      const newExpenseName3 = screen.getByText("milk");
      const newExpenseCost3 = screen.getByText("$5");

      expect(newExpenseName3).toBeInTheDocument();
      expect(newExpenseCost3).toBeInTheDocument();
      
      //check if amount is correctly calculated

      const newRemaining = screen.getByText("Remaining: $8")
      expect(newRemaining).toBeInTheDocument();

      const newspent = screen.getByText("Spent so far: $12");
      expect(newspent).toBeInTheDocument();
    });
  });