import { useEffect, useState } from "react";
import "./Todolist.css";

const todoname = "Todostorage";

export const Todolist = () => {
  const [filling, setFill] = useState({
    id: "",
    content: "",
    checked: false,
  });

  const [todo, setTodo] = useState(() => {
    const gettodo = localStorage.getItem(todoname);
    if (!gettodo) return [];
    return JSON.parse(gettodo);
  });

  const [datetime, setDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setDate(`${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  localStorage.setItem(todoname, JSON.stringify(todo));
}, [todo]);

 

  const handlevalue = (value) => {
    setFill({
      id: value,
      content: value,
      checked: false,
    });
  };

  const handleform = (e) => {
    e.preventDefault();
    if (!filling.content.trim()) return;

    const exists = todo.some(
      (item) =>
        item.content.toLowerCase() === filling.content.toLowerCase()
    );
    if (exists) return;

    setTodo((prev) => [...prev, filling]);
    setFill({ id: "", content: "", checked: false });
  };

  const clearbtn = () => setTodo([]);

  const Deletebtn = (item) => {
    setTodo(todo.filter((t) => t.id !== item.id));
  };

  const handlecheck = (item) => {
    setTodo(
      todo.map((prev) =>
        prev.id === item.id ? { ...prev, checked: !prev.checked } : prev
      )
    );
  };

  return (
    <>
      <h1>{datetime}</h1>

      <form onSubmit={handleform}>
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
