import React, { useState } from "react";
import {FaPlus, FaTrash, FaCheck} from "react-icons/fa";

export default function Todo() {
  const [todos, setTodos] = useState([
    {id: 1, text: 'Learning Todo App', time: '10.00 PM', completed: false}
  ])
  const [newTodo, setNewTodo] = useState('')

  // Function for add Todo
  const addTodo = () => {
    if(newTodo.trim() == '')
    return;
    const currentDate = new Date();
    const timeString = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    const dateString = currentDate.toLocaleDateString();

    setTodos([
      {
        text: newTodo,
        id: Date.now(),
        time: `${timeString}, ${dateString}`,
        completed: false
      },
      ...todos
    ])
    setNewTodo('')
  }

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // Toggle Complete
  const completedTodo = (id) => {
    setTodos(todos.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : todo))
  }

  return (
    <div className="bg-white/30 place-self-center w-11/12 max-w-md flex flex-col p-3 md:p-7 rounded-xl backdrop-blur-xl border border-white/20 shadow-lg shadow-sky-300/50">

    </div>
  )
}