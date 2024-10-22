import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

describe("Delete an Expense", () => {
    test("Confirm that an expense is successfully removed from the list", async () => {
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

      //delete expenses
      const deleteButton1 = screen.getAllByText("x")[0];
      fireEvent.click(deleteButton1);

      expect(newExpenseName3).not.toBeInTheDocument();
      expect(newExpenseCost3).not.toBeInTheDocument();

      const deleteButton2 = screen.getAllByText("x")[0];
      fireEvent.click(deleteButton2);

      expect(newExpenseName2).not.toBeInTheDocument();
      expect(newExpenseCost2).not.toBeInTheDocument();

      const deleteButton3 = screen.getAllByText("x")[0];
      fireEvent.click(deleteButton3);

      expect(newExpenseName).not.toBeInTheDocument();
      expect(newExpenseCost).not.toBeInTheDocument();
      
      //calculated correcrly
      const newRemaining1 = screen.getByText("Remaining: $20")
      expect(newRemaining1).toBeInTheDocument();

      const newspent1 = screen.getByText("Spent so far: $0");
      expect(newspent1).toBeInTheDocument();

    });
  });