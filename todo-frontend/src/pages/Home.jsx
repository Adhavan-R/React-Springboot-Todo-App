import React, { useEffect, useState } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { fetchTodos, addTodoAPI, deleteTodoAPI, updateTodoAPI } from '../services/api';

function Home() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  const addTodo = async () => {
    if (!newTask.trim()) return;
    const added = await addTodoAPI(newTask);
    setTodos([...todos, added]);
    setNewTask('');
  };

  const deleteTodo = async (id) => {
    await deleteTodoAPI(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

 const saveTodo = async (id) => {
  const currentTodo = todos.find(todo => todo.id === id);
  const updated = await updateTodoAPI(id, {
    task: editText,
    completed: currentTodo.completed
  });
  setTodos(todos.map(todo => (todo.id === id ? updated : todo)));
  setEditingId(null);
  setEditText('');
};


  const toggleComplete = async (id, completed) => {
  const currentTodo = todos.find(todo => todo.id === id);
  const updated = await updateTodoAPI(id, {
    task: currentTodo.task,  // retain the existing task
    completed: !completed    // toggle completion
  });
  setTodos(todos.map(todo => (todo.id === id ? updated : todo)));
};


  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <AddTodo newTask={newTask} setNewTask={setNewTask} addTodo={addTodo} />
        <TodoList
          todos={todos}
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          deleteTodo={deleteTodo}
          startEditing={startEditing}
          saveTodo={saveTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default Home;
