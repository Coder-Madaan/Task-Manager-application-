import { useTask } from '../contexts/TaskContext';

function TaskFilter() {
  const { filter, setFilter } = useTask();

  return (
    <div className="flex space-x-2 mb-4">
      <button
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          filter === 'all' ? 'bg-primary text-dark-100' : 'bg-dark-300 text-gray-300 hover:bg-dark-400'
        }`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          filter === 'active' ? 'bg-primary text-dark-100' : 'bg-dark-300 text-gray-300 hover:bg-dark-400'
        }`}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          filter === 'completed' ? 'bg-primary text-dark-100' : 'bg-dark-300 text-gray-300 hover:bg-dark-400'
        }`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;