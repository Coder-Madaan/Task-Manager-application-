import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useForm } from '../hooks/useForm';

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const { values, errors, setErrors, handleChange } = useForm({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }
    try {
      await register(values.email, values.password);
      navigate('/');
    } catch (error) {
      setErrors({
        auth: error.response?.data?.message || 'Failed to register'
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {errors.auth && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-700">{errors.auth}</div>
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input rounded-t-md"
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
                className="input"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="input rounded-b-md"
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <div>
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary hover:text-primary/80">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;