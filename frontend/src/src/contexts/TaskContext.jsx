import { createContext, useContext, useState, useCallback } from 'react';
import axios from 'axios';

const TaskContext = createContext(null);

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const fetchTasks = useCallback(async () => {
    const response = await axios.get('http://localhost:5000/api/tasks');
    setTasks(response.data);
  }, []);

  const addTask = async (taskData) => {
    const response = await axios.post('http://localhost:5000/api/tasks', taskData);
    setTasks(prev => [...prev, response.data]);
    return response.data;
  };

  const updateTask = async (id, updates) => {
    const response = await axios.patch(`http://localhost:5000/api/tasks/${id}`, updates);
    setTasks(prev => prev.map(task => task._id === id ? response.data : task));
    return response.data;
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(prev => prev.filter(task => task._id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const value = {
    tasks: filteredTasks,
    filter,
    setFilter,
    fetchTasks,
    addTask,
    updateTask,
    deleteTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};