import React from "react";
import NotesApp from "../1. Note App/NotesApp";
import RecipeApp from "../2. Recipe book/RecipeApp";
import ExpenseTracker from "../3. Expense tracker/ExpenseTracker";
import Meals from "../4. Meals project/Meals";
import FormBuilder from "../5. Form Builder/FormBuilder";
import TodoList from "../6. Todo list/TodoList";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      {/* <NotesApp /> */}
      {/* <RecipeApp /> */}
      {/* <ExpenseTracker /> */}
      {/* <Meals /> */}
      {/* <FormBuilder /> */}
      {/* <TodoList /> */}
      <Sidebar />
    </div>
  );
};

export default App;
