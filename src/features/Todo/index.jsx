import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

TodoFeature.propTypes = {}

function TodoFeature(props) {
    const initTodoList = [
        { id: 1, title: 'phuong1', status: 'completed' },
        { id: 2, title: 'phuong2', status: 'completed' },
        { id: 3, title: 'phuong3', status: 'new' },
    ];

    const [todoList, setToDoList] = useState(initTodoList);

    const handleTodoClick = (todo, idx) => {
        // clone
        const newTodoList = [...todoList];


        console.log(todo, idx);
        
        // toggle state]
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        // newTodoList[idx] = newTodo;


        // update todo list
        setToDoList(newTodoList);
    }

    const handleTodoFormSubmit = (values) =>{
        console.log("Form submit values: ",values)
    }

    return (
        <div>
            <h3> Demo Todo Form</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />

            <h3> Demo Todo List</h3> 
            {/* render todoList && onToDoClick */}
            <TodoList todoList={todoList} onToDoClick={handleTodoClick} />
        </div>
    )
}

export default TodoFeature
