import { useForm } from '../hooks/useForm';
import { useTask } from '../contexts/TaskContext';

function TaskForm() {
  const { addTask } = useTask();
  const { values, handleChange, reset } = useForm({
    title: '',
    description: '',
    priority: 'low'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
          placeholder="Note title"
          className="w-full px-4 py-2 rounded-lg border border-dark-300 bg-dark-200 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <div>
        <textarea
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="Note content"
          className="w-full px-4 py-2 rounded-lg border border-dark-300 bg-dark-200 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
        />
      </div>
      <div>
        <select
          name="priority"
          value={values.priority}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-dark-300 bg-dark-200 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
      <button type="submit" className="w-full px-4 py-2 bg-primary text-dark-100 rounded-lg hover:bg-secondary transition-colors font-medium">
        Add Note
      </button>
    </form>
  );
}

export default TaskForm;