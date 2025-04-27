import { format } from 'date-fns';
import { useTask } from '../contexts/TaskContext';

function TaskItem({ task }) {
  const { updateTask, deleteTask } = useTask();

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
        <button
          onClick={handleDelete}
          className="text-red-400 hover:text-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;