import React from 'react';

function TodoItem({ todo, isEditing, editText, setEditText, deleteTodo, startEditing, saveTodo, toggleComplete }) {

    //console.log('Todo:', todo);

    
  return (
    <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-xl">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-grow mr-2 px-2 py-1 border rounded"
          />
          <button
            onClick={() => saveTodo(todo.id)}
            className="text-green-500 hover:text-green-700 font-semibold mr-2"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span className={`flex-grow ${todo.completed ? 'line-through text-gray-400' : ''}`}>
            {todo.task}
          </span>
          <div className="space-x-2">
            <button
              onClick={() => toggleComplete(todo.id, todo.completed)}
              className="text-indigo-500 hover:text-indigo-700 font-semibold"
            >
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              onClick={() => startEditing(todo.id, todo.task)}
              className="text-yellow-500 hover:text-yellow-700 font-semibold"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
