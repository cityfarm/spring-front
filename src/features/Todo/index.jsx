import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function TodoFeature(props) {
  const initTodoList = [
    { id: 1, title: 'breakfast', status: 'new' },
    { id: 2, title: 'lunch', status: 'completed' },
    { id: 3, title: 'dinner', status: 'new' },
  ];
  const [todoList, setToDoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState('all');

  const handleTodoClick = (todo, idx) => {
    console.log(todo.id, todo.title, todo.status, idx);
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    setToDoList(newTodoList);
    //console.log("Updated todo list:", newTodoList); // Kiểm tra danh sách sau khi cập nhật
  };

  const handleTodoFormSubmit = (values) => {
    //console.log('Form submit values: ', values);
  };

  const handleShowAllClick = () => {
    setFilteredStatus('all');
  };
  const handleShowCompletedClick = () => {
    setFilteredStatus('completed');
  };
  const handleShowCNewClick = () => {
    setFilteredStatus('new');
  };

  const renderedTodoList = todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
//   console.log(renderedTodoList);

  return (
    <div>
      <h3> Demo Todo Form</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3> Demo Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <button onClick={handleShowAllClick}>All</button>
      <button onClick={handleShowCompletedClick}>Completed</button>
      <button onClick={handleShowCNewClick}>New</button>
    </div>
  );
}

export default TodoFeature;
