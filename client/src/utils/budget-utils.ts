import { API_BASE_URL } from "../constants/constants";

// Function to get budget from the backend. Method: GET
export const fetchBudget = async (): Promise<number> => {
    const response = await fetch(`${API_BASE_URL}/budget`);
	if (!response.ok) {
    	throw new Error('Failed to get budget');
	}

	// Parsing the response to get the data
	let budget = response.json().then((jsonResponse) => {
    	console.log("data in fetchbudget", jsonResponse);
    	return jsonResponse.data;
	});

	console.log("response in fetchExpenses", budget);
	return budget;
};

// Function to get all expenses from the backend. Method: GET
// export const fetchExpenses = async (): Promise<Expense[]> => {
// 	const response = await fetch(`${API_BASE_URL}/expenses`);
// 	if (!response.ok) {
//     	throw new Error('Failed to fetch expenses');
// 	}

// 	// Parsing the response to get the data
// 	let expenseList = response.json().then((jsonResponse) => {
//     	console.log("data in fetchExpenses", jsonResponse);
//     	return jsonResponse.data;
// 	});

// 	console.log("response in fetchExpenses", expenseList);
// 	return expenseList;
// };

// Function to update the budget in the backend. Method: PUT
export const updateBudget = async (budget: number): Promise<number> => {
	const response = await fetch(`${API_BASE_URL}/budget`, {
    	method: "PUT",
    	headers: {
        	"Content-Type": "application/json",
    	},
    	body: JSON.stringify(budget),
	});
	if (!response.ok) {
    	throw new Error("Failed to update budget");
	}
	return response.json();};

// export const createExpense = async (expense: Expense): Promise<Expense> => {
// 	const response = await fetch(`${API_BASE_URL}/expenses`, {
//     	method: "POST",
//     	headers: {
//         	"Content-Type": "application/json",
//     	},
//     	body: JSON.stringify(expense),
// 	});
// 	if (!response.ok) {
//     	throw new Error("Failed to create expense");
// 	}
// 	return response.json();
// };