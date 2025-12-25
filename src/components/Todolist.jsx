import { useEffect,useState} from "react";
import "./Todolist.css";
import { handleform } from "./handleform";
import { LocalStorage } from "./localstoragetodo";
import { time_date } from "./timedate";
import {useTodoInput} from "./inputValuehandle";
import { functionality } from "./func";
export const Todolist = () => {
  
// inputValuehandle
const { filling, setFill, handlevalue } = useTodoInput();

// time and date
const datetime=time_date();
  
//Local Storage and Todo
 const {setTodo,todo}=LocalStorage();

// delete, clear, checked
const {clearbtn,Deletebtn,handlecheck}=functionality(setTodo,todo);


  return (
    <>
      <h1>{datetime}</h1>

      <form onSubmit={(e)=>handleform(e, filling, todo, setTodo, setFill)}>
        <h2>Todo List</h2>

        <input
          type="text"
          value={filling.content}
          onChange={(e) => handlevalue(e.target.value)}
        />

        <button type="submit">Add Item</button>
        <button type="button" onClick={clearbtn}>
          Clear All
        </button>
      </form>

      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.checked ? "line-through" : "none",
              }}
            >
              {item.content}
            </span>

            <button onClick={() => handlecheck(item)}>
              {item.checked ? "Unchecked" : "Checked"}
            </button>

            <button onClick={() => Deletebtn(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
