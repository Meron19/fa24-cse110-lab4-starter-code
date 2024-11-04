import { Database } from "sqlite";
import { Expense } from "../types";
import { Request, Response } from "express";

export async function createExpenseServer(req: Request, res: Response, db: Database) {

    try {
        // Type casting the request body to the expected format.
        const { id, cost, description } = req.body as { id: string, cost: number, description: string };
 
        if (!description || !id || !cost) {
            return res.status(400).send({ error: "Missing required fields" });
        }
 
        await db.run('INSERT INTO expenses (id, description, cost) VALUES (?, ?, ?);', [id, description, cost]);
        res.status(201).send({ id, description, cost });
 
    } catch (error) {
 
        return res.status(400).send({ error: `Expense could not be created, + ${error}` });
    };
 
 }
// export function deleteExpense(req: Request, res: Response, expenses: Expense[]) {
//     const { id } = req.params;
    
//     if (!id) {
//         return res.status(400).json({ message: "Expense ID is required" });
//     }
    
//     const expenseIndex = expenses.findIndex(expense => expense.id === id);
    
//     if (expenseIndex !== -1) {
//         expenses.splice(expenseIndex, 1);
//         res.status(200).json({ message: "Expense deleted successfully" });
//     } else {
//         res.status(404).json({ message: "Expense not found" });
//     }
// }

export async function deleteExpense(req: Request, res: Response, db: Database) {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "Expense ID is required" });
    }

    try {
        // Check if the expense with the given ID exists
        const expense = await db.get<Expense>('SELECT * FROM expenses WHERE id = ?;', [id]);

        if (!expense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        // If it exists, delete it from the database
        await db.run('DELETE FROM expenses WHERE id = ?;', [id]);
        res.status(200).json({ message: "Expense deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: `Failed to delete expense: ${error}` });
    }
}


// export function getExpenses(req: Request, res: Response, expenses: Expense[]) {
//     res.status(200).send({ "data": expenses });
// }
export async function getExpenses(req: Request, res: Response, db: Database) {
    try {
        const expenses = await db.all<Expense[]>('SELECT * FROM expenses;');
        res.status(200).send({ data: expenses });
    } catch (error) {
        res.status(500).send({ error: `Failed to retrieve expenses: ${error}` });
    }
}