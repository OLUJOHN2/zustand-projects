// import React from "react";
// import NotesApp from "../1. Note App/NotesApp";
// import RecipeApp from "../2. Recipe book/RecipeApp";
// import ExpenseTracker from "../3. Expense tracker/ExpenseTracker";
// import Meals from "../4. Meals project/Meals";
// import FormBuilder from "../5. Form Builder/FormBuilder";
// import TodoList from "../6. Todo list/TodoList";
// import Sidebar from "../7. Note/Sidebar";
// import QuizLayout from "../9. Quiz app/QuizLayout";

// const App = () => {
//   return (
//     <div>
//       {/* <NotesApp /> */}
//       {/* <RecipeApp /> */}
//       {/* <ExpenseTracker /> */}
//       {/* <Meals /> */}
//       {/* <FormBuilder /> */}
//       {/* <TodoLi<st /> */}
//       {/* <Sidebar /> */}
//       <QuizLayout />
//     </div>
//   );
// };

// export default App;

// import Sidebar from "../8. Task list app/Sidebar";
// import MainArea from "../8. Task list app/MainArea";
// import Modal from "./components/Modal";
// import { useStore } from "../8. Task list app/Store";
// import { MdMoreVert } from "react-icons/md";

// function App() {
//   const {
//     todos,
//     editIndex,
//     editText,
//     dropdownIndex,
//     handleEdit,
//     handleUpdate,
//     handleDropdownClick,
//     deleteTodo,
//     setEditText,
//     setEditIndex,
//   } = useStore();

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 p-6">
//         <MainArea />
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold mb-4 ml-[2rem]">Todo List</h2>
//           <ul className="list-disc pl-5">
//             {todos.map((todo, index) => (
//               <li key={index} className="mb-2 ml-[2rem]">
//                 {editIndex === index ? (
//                   <div className="flex items-center">
//                     <input
//                       type="text"
//                       value={editText}
//                       onChange={(e) => setEditText(e.target.value)}
//                       className="border border-gray-300 p-1 rounded-lg mr-2"
//                     />
//                     <button
//                       onClick={() => handleUpdate(index)}
//                       className="bg-green-500 text-white px-2 py-1
//                        rounded-lg mr-2"
//                     >
//                       Update
//                     </button>
//                     <button
//                       onClick={() => setEditIndex(null)}
//                       className="bg-gray-500 text-white px-2 py-1
//                        rounded-lg"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="relative flex justify-between items-center">
//                     <div>
//                       <span className="mr-4">
//                         <strong>{todo.text}</strong> (List: {todo.list},
//                         Workspace: {todo.workspace})
//                       </span>
//                     </div>
//                     <div className="flex items-center">
//                       <MdMoreVert
//                         onClick={() => handleDropdownClick(index)}
//                         size={24}
//                         className="cursor-pointer"
//                       />
//                       {dropdownIndex === index && (
//                         <div
//                           className="absolute right-0 mt-2 bg-white
//                          border rounded shadow-lg"
//                         >
//                           <button
//                             onClick={() => handleEdit(index)}
//                             className="block px-4 py-2 text-gray-700
//                              hover:bg-gray-100 w-full text-left"
//                           >
//                             Update
//                           </button>
//                           <button
//                             onClick={() => deleteTodo(index)}
//                             className="block px-4 py-2 text-gray-700
//                              hover:bg-gray-100 w-full text-left"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <Modal />
//     </div>
//   );
// }

// export default App;

import ProductCard from "./components/ProductCard";
import { data } from "../10. watch app/data";
import Sidebar from "../10. watch app/Sidebar";
import { useFilterStore } from "../10. watch app/store";

interface Product {
  id: string;
  country: string;
  img: Record<string, string>;
  price: number;
}

const App = () => {
  const { selectedCountries, selectedColors, selectedPriceRange } =
    useFilterStore((state) => state);

  const filteredData = data.filter((item: Product) => {
    const matchesColor =
      selectedColors.length === 0 ||
      Object.keys(item.img).some((color) => selectedColors.includes(color));

    const matchesCountry =
      selectedCountries.length === 0 ||
      selectedCountries.includes(item.country);

    const matchesPrice = selectedPriceRange
      ? item.price >= selectedPriceRange.min &&
        item.price <= selectedPriceRange.max
      : true;

    return matchesColor && matchesCountry && matchesPrice;
  });

  return (
    <>
      <Sidebar />
      <div className="p-4 flex flex-wrap justify-center items-center">
        {filteredData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default App;
