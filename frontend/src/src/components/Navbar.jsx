import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-900">Todo App</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">{user.email}</span>
            <button
              onClick={logout}
              className="btn btn-secondary"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;