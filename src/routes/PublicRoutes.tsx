import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

const PublicRoutes = () => {
  // const { isAuthenticated } = useAuthStore();
  const isAuthenticated = true;

  return !isAuthenticated ? <Outlet /> : <Navigate to="/landing" replace />;
};

export default PublicRoutes;
