import React from 'react';

function AddTodo({ newTask, setNewTask, addTodo }) {
  return (
    <div className="flex mb-4">
      <input
        type="text"
        className="flex-grow px-4 py-2 border rounded-l-xl focus:outline-none"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 rounded-r-xl"
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
