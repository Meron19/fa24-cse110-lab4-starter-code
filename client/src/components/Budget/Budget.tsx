import React from "react";
import { AppContext } from "../../context/AppContext";
import { useContext, useState, useEffect} from "react";
import { fetchBudget } from "../../utils/budget-utils";

const Budget = () => {
  const { budget } = useContext(AppContext);
  const context = useContext(AppContext);

    // Fetch expenses on component mount
    useEffect(() => {
      loadBudget();
      }, []);

    const loadBudget = async () => {
      try {
        const budget = await fetchBudget();
        context.setBudget(budget);
      } catch (err: any) {
        console.log(err.message);
      }
    };

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      <div>Budget: ${budget}</div>
    </div>
  );
};

export default Budget;
