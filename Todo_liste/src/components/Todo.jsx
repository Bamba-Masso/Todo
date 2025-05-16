import { useEffect } from "react";
import { useState } from "react";
export default function Todo() {

    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])

    const getTask = () => {
        const allTask = localStorage.getItem('listeTask')
        if (allTask) {
            setTodos(JSON.parse(allTask))
        }
    }


    const handelSubmit = (event) => {
        event.preventDefault();
        if (task) {
            const newTask = { id: new Date().getTime().toString(), title: task, completed: false }
            setTodos([...todos, newTask]);
            localStorage.setItem('listeTask', JSON.stringify(([...todos, newTask])))
            setTask("")
        } else {

        }
    }

    const deleteTask = (id) => {

        const deleted = todos.filter((tasks) => tasks.id !== id);
        setTodos(deleted);
        localStorage.setItem('listeTask', JSON.stringify(deleted))
    }

    const clean = () => {
        setTodos([]);
        localStorage.removeItem("listeTask")
    }

    const handleComplete = (id) => {

        const update = todos.map((tasks) => {
            if (tasks.id === id) {
                return { ...tasks, completed: !tasks.completed };
            }
            return tasks;
        });

        setTodos(update);
        localStorage.setItem('listeTask', JSON.stringify(update));
    }
    useEffect(() => {
        getTask()
    }, [])

    return (


        <>
            <main className="w-full h-[100vh] flex  justify-center py-20  bg-cover bg-center bg-[url(https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg)]">
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden ">
                    <div className="px-4 py-2">
                        <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
                    </div>
                    <form onSubmit={handelSubmit} className="w-full max-w-sm mx-auto px-4 py-2">
                        <div className="flex items-center border-b-2 border-teal-500 py-2">
                            <input
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                className=" bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 "
                                type="text" placeholder="Add a task" />
                            <button
                                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                                type="submit">
                                Add
                            </button>
                        </div>
                    </form>

                    <ul className="divide-y divide-gray-200 px-4">
                        {
                            todos.length > 0 ? (
                                todos.map((tasks) => (
                                    <li className="py-4" key={tasks.id}>
                                        <div className="flex justify-between items-center ">

                                            <span style={tasks.completed ? { textDecoration: " line-through ", color: "green" } : {}} className="text-lg font-medium">{tasks.title}</span>
                                            <div className=" flex items-center align-center gap-3">
                                                <button onClick={() => deleteTask(tasks.id)} className="bg-red" ><i className=" fa-solid fa-trash "></i></button>
                                                <input id="todo1" name="todo1" type="checkbox" checked={tasks.completed}
                                                    onChange={() => handleComplete(tasks.id)}
                                                    className="h-4 w-4 text-teal-600  border-gray-300 rounded" />
                                            </div>
                                        </div>
                                    </li>

                                ))
                            ) : (
                                <span className="">No task for momment </span>
                            )
                        }
                        {!todos.length ? null : (

                            <div className=" flex w-16 mb-4 mt-4 bg-teal-500  border-teal-500 text-sm text-center border-4 text-white py-1 px-2 rounded "><button onClick={() => clean()}>Clear</button></div>

                        )}

                    </ul>
                </div>
            </main>

        </>
    )
}