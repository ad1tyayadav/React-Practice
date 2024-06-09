import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }])
    let [newTodo, setNewTodo] = useState("")

    let addTask = () => {
        setTodos((prevTodo) => [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false }])
        setNewTodo("")
    }

    let updateInput = (event) => {
        setNewTodo(event.target.value)
    }

    let deleteTask = (id) => {
        setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id))
    }

    let markAllAsDone = () => {
        // Update all todos to be marked as done
        const updatedTodos = todos.map(prevTodo => {
            return { ...prevTodo, isDone: true };
        });
        setTodos(updatedTodos);
    };

    const markOneIsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone: true }; // Toggle logic
                }
                return todo;
            })
        );
    };



    return (
        <>
            <input type="text" placeholder="add new task" value={newTodo} onChange={updateInput} />
            <br /> <br />
            <button onClick={addTask}>Add Task</button>
            <br /><br />
            <hr />
            <h3>Todos</h3>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}> {todo.task}</span> &nbsp; &nbsp;
                            <button onClick={() => deleteTask(todo.id)}>Delete</button> &nbsp; &nbsp;
                            <button onClick={() => markOneIsDone(todo.id)}>Done</button>
                        </li>

                    ))
                }
            </ul>
            <button onClick={markAllAsDone}>All Done</button>
        </>
    )
}