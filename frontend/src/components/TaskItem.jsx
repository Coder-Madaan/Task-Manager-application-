import { format } from 'date-fns';
import { useState } from 'react';
import { useTask } from '../contexts/TaskContext';

function TaskItem({ task }) {
  const { updateTask, deleteTask } = useTask();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority
  });

  const priorityColors = {
    low: 'bg-blue-900 text-blue-200',
    medium: 'bg-yellow-900 text-yellow-200',
    high: 'bg-red-900 text-red-200'
  };

  const handleToggleComplete = () => {
    updateTask(task._id, { completed: !task.completed });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      deleteTask(task._id);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTask({
      title: task.title,
      description: task.description,
      priority: task.priority
    });
  };

  const handleSave = async () => {
    await updateTask(task._id, editedTask);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isEditing) {
    return (
      <div className="bg-dark-200 rounded-lg border border-dark-300 p-4">
        <div className="space-y-4">
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-dark-300 bg-dark-200 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Task title"
          />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-dark-300 bg-dark-200 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
            placeholder="Task description"
          />
          <select
            name="priority"
            value={editedTask.priority}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-dark-300 bg-dark-200 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-dark-300 text-gray-300 rounded-lg hover:bg-dark-400 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-primary text-dark-100 rounded-lg hover:bg-secondary transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-dark-200 rounded-lg border border-dark-300 p-4 ${task.completed ? 'opacity-75' : ''}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleComplete}
            className="mt-1 bg-dark-300 border-dark-400"
          />
          <div>
            <h3 className={`text-lg font-medium ${task.completed ? 'line-through text-gray-500' : 'text-primary'}`}>
              {task.title}
            </h3>
            <p className="text-gray-400 mt-1">{task.description}</p>
            <div className="flex items-center space-x-4 mt-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>
              <span className="text-sm text-gray-500">
                Created: {format(new Date(task.createdAt), 'MMM d, yyyy')}
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleEdit}
            className="text-primary hover:text-secondary"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-red-400 hover:text-red-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;