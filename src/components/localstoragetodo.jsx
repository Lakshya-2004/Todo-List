import { useState,useEffect } from "react";

export  const LocalStorage=()=>{
  
  const todoname = "Todostorage";
const [todo, setTodo] = useState(()=>{
    const gettodo = localStorage.getItem(todoname);
    if (!gettodo) return [];
    return JSON.parse(gettodo);
  });

useEffect(()=>{localStorage.setItem(todoname, JSON.stringify(todo));},[todo]);
 
  
return {setTodo,todo};
};