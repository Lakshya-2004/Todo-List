 export const handleform = (e, filling, todo, setTodo, setFill) => {
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