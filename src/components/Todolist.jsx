import { useEffect, useState } from "react";
import "./Todolist.css";

export const Todolist = () => {
  const [filling, setFill] = useState({
    id: "",
    content: "",
    checked: false,
  });

  const [todo, setTodo] = useState([]);
  const [datetime, setDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setDate(`${date}-${time}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlevalue = (value) => {
    setFill({
      id: value,          
      content: value,          
      checked: false,
    });
  };

  const handleform = (e) => {
    e.preventDefault();

    const { id, content, checked } = filling;
    if (!content.trim()) return;

    const iftodohaveit = todo.find(
      (curr) => curr.content.toLowerCase() === content.toLowerCase()
    );
    if (iftodohaveit) return;

    setTodo((prev) => [...prev, { id, content, checked }]);

    setFill({ id: "", content: "", checked: false }); 
  };

  const clearbtn = () => {
    setTodo([]);
  };

  const Deletebtn = (item) => {
    const updatedtask = todo.filter((prev) => prev.id !== item.id);
    setTodo(updatedtask);
  };


const handlecheck=(item)=>{
const updatedtodo=todo.map((prev)=>
    prev.id===item.id ?{...prev ,checked:!prev.checked}:prev
);
    setTodo(updatedtodo);
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

      <div>
        <ul>
          {todo.map((item) => (
            <li key={item.id}>
              <span
                style={{
                  textDecoration: item.checked
                    ? "line-through"
                    : "none",
                }}
              >
                {item.content}
              </span>

               <button onClick={() => handlecheck(item)}>
                {item.checked ? "Unchecked" : "Checked"}
              </button> 
 
              <button
                className="btn"
                onClick={() => Deletebtn(item)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
