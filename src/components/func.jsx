export const functionality=(setTodo,todo)=>{
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
      return {clearbtn,Deletebtn,handlecheck};
}