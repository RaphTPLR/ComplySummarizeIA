import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoutes from '@/routes/PrivateRoutes';
import PublicRoutes from '@/routes/PublicRoutes';
import Login from '@/features/auth/Login';
import Register from '@/features/auth/Register';
import Profile from '@/features/user/Profile';
import Error from '@/features/Error';
import Sidebar from '@/components/layout/Sidebar';
import { useAuthStore } from '@/stores/authStore';
import Loader from '@/components/ui/Loader';
import { useAutoLogin } from '@/api/queries/authQueries';
import { useEffect } from 'react';
import Landing from '@/features/landing/Landing';

const AppRoutes = () => {
  // const { isAuthenticated } = useAuthStore();
  const isAuthenticated = true;

  const { refetch: autoLogin, isPending } = useAutoLogin();

  // useEffect(() => {
  //   autoLogin();
  // }, [autoLogin]);

  if (isPending) return <Loader />


  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Routes>
          {/* Routes publiques */}
          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Landing />} />
          </Route>

          {/* Routes privées */}
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/landing" element={<Landing />} />
          </Route>

          {/* Route par défaut */}
          {isAuthenticated &&
            <>
              <Route path="/" element={<Navigate to="/landing" replace />} />
              <Route path="*" element={<Navigate to="/landing" replace />} />
              <Route path="/error" element={<Error />} />
            </>
          }
          {!isAuthenticated &&
            <>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
              <Route path="/error" element={<Error />} />
            </>
          }
        </Routes>
      </main>
    </div>
  );
};

export default AppRoutes;
