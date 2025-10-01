import React, { useState } from "react";
import {FaPlus, FaTrash, FaCheck} from "react-icons/fa";

export default function Todo() {
  const [todos, setTodos] = useState([
    {id: 1, text: 'Learning todo pp V1', time: '10.00 PM', completed: false}
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
      <div className="mb-6 bg-gradient-to-r from-blue-500/80 to-blue-900/80 p-4 rounded-xl backdrop-blur-sm">
        <h1 className="font-bold text-2xl">Todo's List V1</h1>
      </div>

      {/* Add task section */}
      <div className="mb-6">
        <h1 className="text-lg font-semibold text-blue-800 mb-6">Add Task</h1>
        <div className="flex rounded-xl overflow-hidden">
          <input value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} 
            className="text-blue-800 flex-1 p-4 py-3 bg-white/50 backdrop-blur-sm focus:outline-none border-r border-white/30" placeholder="Enter new task..." type="text"
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button className="bg-blue-500/80 hover:bg-blue-700/80 text-white px-4 py-3 backdrop-blur-sm transition flex items-center justify-center" onClick={addTodo}>
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Todo Items */}
      <div className="space-y-3">
        {
          todos.map((todo) => (
            <div key={todo.id} className="p-4 rounded-xl bg-white/40 backdrop-blur-sm border border-white/30">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-3">
                  <button className={`${todo.completed ? 'bg-blue-500/80 text-white':'bg-white/50'} mt-1 p-2 rounded-lg backdrop-blur-sm border border-white/30`} onClick={() => completedTodo(todo.id)}>
                    {todo.completed && <FaCheck size={12} />}
                  </button>
                  <div className="">
                    <p className={`font-medium ${todo.completed ? 'line-through text-blue-600':'text-gray-800'}`}>
                      {todo.text}
                    </p>
                    <p className="text-xs text-blue-500/80 mt-1">{todo.time}</p>
                  </div>
                </div>
                <button className="p-2 rounded-lg bg-white/50 hover:bg-white/70 backdrop-blur-sm border border-white/30 text-blue-500/80 hover:text-blue-800/80 transition" onClick={() => deleteTodo(todo.id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}