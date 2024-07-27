
import React, { useState, useEffect } from "react";

// define TaskItem interface to use as props type
interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  deleteTaskFunc: (taskId: string) => void;
  toggleDoneTaskFunc: (taskId: string) => void;
}

export default function Task({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed: initialCompleted,
}: TaskItemProps) {
  // State to manage local completed status
  const [completed, setCompleted] = useState(initialCompleted);

  // useEffect to update parent component on initial mount
  useEffect(() => {
    setCompleted(initialCompleted);
  }, [initialCompleted]);

  // callback function when delete button is clicked
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  // callback function when done button is clicked
  const doneBtnOnClick = () => {
    setCompleted(!completed);
    toggleDoneTaskFunc(id);
  };

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <span className={completed ? "text-decoration-line-through" : ""}>{title}</span>
      <button className="btn btn-success" onClick={doneBtnOnClick}>
        Done
      </button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </div>
  );
}
