import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeToDo } from "./redux-toolkit/todoSlice";
import { fetchProducts } from "./redux-toolkit/productSlice";
const App = () => {
  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.todos);
  // return (
  //   <div className="flex flex-col bg-center justify-center items-center w-full h-screen">
  //     <div className="flex flex-col justify-center items-center p-10 gap-5 bg-gray-300 shadow-gray-500 shadow-lg rounded-lg">
  //       <h2>Add to do</h2>
  //       <form onSubmit={addHandler}>
  //         <input type="text" value={text} onChange={(e) => setText(e.target.value)} name="" />
  //         <button type="submit" className="px-5 outline bg-black text-white">
  //           Submit Now
  //         </button>
  //       </form>
  //     </div>

  //     <div className="flex flex-col justify-center items-center p-10 gap-5 bg-gray-300 shadow-gray-500 shadow-lg rounded-lg">
  //       <h2>Todos</h2>
  //       {todos.map((item) => (
  //         <div key={item.id} className="flex justify-center items-center gap-10 bg-slate-600">
  //           {item.text}
  //           <button onClick={() => dispatch(removeToDo(item.id))} className="px-2">
  //             X
  //           </button>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  const { products, status, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} - ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
