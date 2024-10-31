import { error } from 'console';
import { Response } from 'express';

// Function to get the budget
export function getBudget(res: Response, budget: number) {
    res.status(200).send({ data: budget });
}

// Function to update the budget

export function updateBudget(res: Response, body: any, budget: { amount: number }) {
    const newBudget = body.amount;

    if (typeof newBudget !== "number" || isNaN(newBudget)) {
        return res.status(400).send({ error: "Invalid budget amount" });
    }

    budget.amount = newBudget;
    res.status(201).send({ amount: newBudget });
}