import { useTask } from '../contexts/TaskContext';
import TaskItem from './TaskItem';

function TaskList() {
  const { tasks } = useTask();

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;