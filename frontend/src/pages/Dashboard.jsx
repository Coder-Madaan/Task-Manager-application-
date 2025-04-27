import { useEffect } from 'react';
import { useTask } from '../contexts/TaskContext';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import TaskFilter from '../components/TaskFilter';

function Dashboard() {
  const { fetchTasks } = useTask();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8">My Notes</h1>
        <div className="bg-dark-200 rounded-lg shadow-lg p-6 mb-6 border border-dark-300">
          <TaskForm />
        </div>
        <div className="bg-dark-200 rounded-lg shadow-lg p-6 border border-dark-300">
          <TaskFilter />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;