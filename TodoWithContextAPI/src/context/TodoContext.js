import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        todo: "eat",
        id: 1,
        completed: false
    }],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleBtn: (id) => { }
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;