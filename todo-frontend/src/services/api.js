import axios from 'axios';

const API_URL = 'http://localhost:8080/api/todos';

export const fetchTodos = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addTodoAPI = async (task) => {
  const res = await axios.post(API_URL, { task, completed: false });
  return res.data;
};

export const deleteTodoAPI = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const updateTodoAPI = async (id, updates) => {
  const res = await axios.put(`${API_URL}/${id}`, updates);
  return res.data;
};
