// no imports needed, no return block needed

import { useState } from "react";
import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm";

// For State below, 'todos' is the current state, setTodos is a function to update the state
// 'use' functions are hooks, allow us to use special features in React
// states by default are only stored in memory
function App() {

  const [todos, setTodos] = useState(dummyData)


  function setTodoCompleted(id: number, completed: boolean){
    setTodos((prevTodos) => 
    prevTodos.map(todo => (todo.id === id ? {...todo, completed} : todo))
    );
  }

  function addTodo(title: string){
    setTodos(prevTodos => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false
      },
      ...prevTodos
    ])
  }

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your to-do list</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounder-md p-5 space-y-6">
        <AddTodoForm 
        onSubmit={addTodo}/>
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoItem 
            key={todo.id}
            todo={todo}
            onCompletedChange={setTodoCompleted}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
