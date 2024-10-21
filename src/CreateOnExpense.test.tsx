import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Create an Expense", () => {
    test("Verify that a new expense is correctly added to the expense list", () => {
      render(<App/>);

      const saveButton = screen.getByText("Save");
      expect(saveButton).toBeInTheDocument();
    
      const nameInput = screen.getByLabelText("Name");
      const costInput = screen.getByLabelText("Cost");


      fireEvent.change(nameInput, {target: {value:"apples"}});
      fireEvent.change(costInput, {target: {value:10}});

      fireEvent.click(saveButton);

      const newExpenseName = screen.getByText("apples");
      const newExpenseCost = screen.getByText("$10");


      expect(newExpenseName).toBeInTheDocument();
      expect(newExpenseCost).toBeInTheDocument();

    });
  });