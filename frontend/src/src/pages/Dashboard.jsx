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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Tasks</h1>
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <TaskForm />
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <TaskFilter />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;