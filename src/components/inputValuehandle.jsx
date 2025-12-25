import { useState } from "react";

export const useTodoInput = () => {
  const [filling, setFill] = useState({
    id: "",
    content: "",
    checked: false,
  });

  const handlevalue = (value) => {
    setFill({
      id: value,
      content: value,
      checked: false,
    });
  };

  return { filling, setFill, handlevalue };
};
