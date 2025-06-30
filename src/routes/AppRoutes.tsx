import { useAutoLogin } from '@/api/queries/authQueries';
import Loader from '@/components/ui/Loader';
import Login from '@/features/auth/Login';
import Register from '@/features/auth/Register';
import Error from '@/features/Error';
import Landing from '@/features/landing/Landing';
import Pricing from '@/features/pricing/Pricing';
import Demo from '@/features/demo/Demo';
import Features from '@/features/features/Features';
import Profile from '@/features/user/Profile';
import PrivateRoutes from '@/routes/PrivateRoutes';
import PublicRoutes from '@/routes/PublicRoutes';
import { Navigate, Route, Routes } from 'react-router-dom';

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
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/features" element={<Features />} />
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
