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

      //add expenses
      const saveButton = screen.getByText("Save");
      expect(saveButton).toBeInTheDocument();
    
      const nameInput = screen.getByLabelText("Name");
      const costInput = screen.getByLabelText("Cost");

      fireEvent.change(nameInput, {target: {value:"apples"}});
      fireEvent.change(costInput, {target: {value:3}});

      fireEvent.click(saveButton);

      const newExpenseName = screen.getByText("apples");
      const newExpenseCost = screen.getByText("$3");

      expect(newExpenseName).toBeInTheDocument();
      expect(newExpenseCost).toBeInTheDocument();

      //check if amount is correctly calculated

      const newRemaining = screen.getByText("Remaining: $17")
      expect(newRemaining).toBeInTheDocument();

      const newspent = screen.getByText("Spent so far: $3");
      expect(newspent).toBeInTheDocument();
    });
  });