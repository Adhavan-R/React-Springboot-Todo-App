import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, editingId, editText, setEditText, deleteTodo, startEditing, saveTodo, toggleComplete }) {
  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isEditing={editingId === todo.id}
          editText={editText}
          setEditText={setEditText}
          deleteTodo={deleteTodo}
          startEditing={startEditing}
          saveTodo={saveTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;
