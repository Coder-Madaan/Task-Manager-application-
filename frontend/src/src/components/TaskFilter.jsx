import { useTask } from '../contexts/TaskContext';

function TaskFilter() {
  const { filter, setFilter } = useTask();

  return (
    <div className="flex space-x-2 mb-4">
      <button
        className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;