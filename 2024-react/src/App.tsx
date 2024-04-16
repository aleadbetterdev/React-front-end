// no imports needed, no return block needed

import { dummyData } from "./data/todos"

function App() {

  return (
    <main className="py-10 h-screen">
      <h1 className="font-bold text-3xl text-center">
        Your to-do list
      </h1>
      <div>
        <div>
          {dummyData.map(todo => (
            <p key={todo.id}>
              {todo.title}
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
