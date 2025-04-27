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
          placeholder="Task title"
          className="input"
          required
        />
      </div>
      <div>
        <textarea
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="Task description"
          className="input min-h-[100px]"
        />
      </div>
      <div>
        <select
          name="priority"
          value={values.priority}
          onChange={handleChange}
          className="input"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;