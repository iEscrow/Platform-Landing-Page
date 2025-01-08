import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import LoginPage from '../pages/auth/login/LoginPage';
import RegisterPage from '../pages/auth/register/RegisterPage';
import NotFound from '../pages/not_found/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<h1>Marketplace</h1>} />

      {/* Auth pages */}
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />

      {/* Error pages */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
