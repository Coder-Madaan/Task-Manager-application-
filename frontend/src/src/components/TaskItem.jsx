import { format } from 'date-fns';
import { useTask } from '../contexts/TaskContext';

function TaskItem({ task }) {
  const { updateTask, deleteTask } = useTask();

  const priorityColors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  const handleToggleComplete = () => {
    updateTask(task._id, { completed: !task.completed });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task._id);
    }
  };

  return (
    <div className={`bg-white rounded-lg border p-4 ${task.completed ? 'opacity-75' : ''}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleComplete}
            className="mt-1"
          />
          <div>
            <h3 className={`text-lg font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
              {task.title}
            </h3>
            <p className="text-gray-600 mt-1">{task.description}</p>
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
        <button
          onClick={handleDelete}
          className="text-red-600 hover:text-red-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;