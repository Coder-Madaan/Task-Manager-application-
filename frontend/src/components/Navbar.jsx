import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-dark-200 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-primary">Notes App</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">{user.email}</span>
            <button
              onClick={logout}
              className="px-4 py-2 bg-dark-300 text-primary rounded-lg hover:bg-dark-400 transition-colors"
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