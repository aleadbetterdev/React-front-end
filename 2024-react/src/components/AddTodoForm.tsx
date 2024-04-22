export default function AddTodoForm(){
    return(
        <form className="flex">
            <input 
                placeholder="What needs to be done?"
                className="rounded-s-md grow border border-gray-400 p-2"
            />
            <button
            type="submit"
            className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
            >
                Add
            </button>
        </form>
    )
}