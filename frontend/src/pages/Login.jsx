import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useForm } from '../hooks/useForm';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { values, errors, setErrors, handleChange } = useForm({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(values.email, values.password);
      navigate('/');
    } catch (error) {
      setErrors({
        auth: error.response?.data?.message || 'Failed to login'
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {errors.auth && (
            <div className="rounded-md bg-red-900 p-4">
              <div className="text-sm text-red-200">{errors.auth}</div>
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-dark-300 bg-dark-200 placeholder-gray-500 text-gray-200 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-dark-300 bg-dark-200 placeholder-gray-500 text-gray-200 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-dark-100 bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-primary hover:text-secondary">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;