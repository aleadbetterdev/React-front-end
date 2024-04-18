// no imports needed, no return block needed

import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"

function App() {

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">
        Your to-do list
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounder-md p-5">
        <div className="space-y-2">
          {dummyData.map((todo) => (
            <TodoItem todo={todo}/>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
