import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Verify that budget is correcly updated", () => {
    test("Validate that the equation Budget = Remaining Balance + Total Expenditure holds true after various operations", () => {
      render(<App/>);

      const budget = screen.getByText("Budget: $20");
      expect(budget).toBeInTheDocument();

      const originalRemaining = screen.getByText("Remaining: $20")
      expect(originalRemaining).toBeInTheDocument();

      const originalspent = screen.getByText("Spent so far: $0");
      expect(originalspent).toBeInTheDocument();

      const saveButton = screen.getByText("Save");
      expect(saveButton).toBeInTheDocument();

      const nameInput = screen.getByLabelText("Name");
      const costInput = screen.getByLabelText("Cost");

      //add expense 1

      fireEvent.change(nameInput, {target: {value:"candy"}});
      fireEvent.change(costInput, {target: {value:2}});

      fireEvent.click(saveButton);

      const newExpenseName = screen.getByText("candy");
      const newExpenseCost = screen.getByText("$2");

      expect(newExpenseName).toBeInTheDocument();
      expect(newExpenseCost).toBeInTheDocument();

      //check if amount is correctly calculated
      const newRemaining1 = screen.getByText("Remaining: $18")
      expect(newRemaining1).toBeInTheDocument();

      const newspent1 = screen.getByText("Spent so far: $2");
      expect(newspent1).toBeInTheDocument();

      //add expense 2
      fireEvent.change(nameInput, {target: {value:"water"}});
      fireEvent.change(costInput, {target: {value:6}});

      fireEvent.click(saveButton);

      const newExpenseName2 = screen.getByText("water");
      const newExpenseCost2 = screen.getByText("$6");

      expect(newExpenseName2).toBeInTheDocument();
      expect(newExpenseCost2).toBeInTheDocument();

      //check if amount is correctly calculated
      const newRemaining2 = screen.getByText("Remaining: $12")
      expect(newRemaining2).toBeInTheDocument();
      
      const newspent2 = screen.getByText("Spent so far: $8");
      expect(newspent2).toBeInTheDocument();

      //add expense 3
      fireEvent.change(nameInput, {target: {value:"shirt"}});
      fireEvent.change(costInput, {target: {value:12}});

      fireEvent.click(saveButton);

      const newExpenseName3 = screen.getByText("shirt");
      const newExpenseCost3 = screen.getByText("$12");

      expect(newExpenseName3).toBeInTheDocument();
      expect(newExpenseCost3).toBeInTheDocument();
      
      //check if amount is correctly calculated
      const newRemaining3 = screen.getByText("Remaining: $0")
      expect(newRemaining3).toBeInTheDocument();
      
      const newspent3 = screen.getByText("Spent so far: $20");
      expect(newspent3).toBeInTheDocument();    
    });
  });