import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<h1>Marketplace</h1>} />

      {/* Auth pages */}
      <Route path="/signin" element={<h1>Login</h1>} />
      <Route path="/signup" element={<h1>Register</h1>} />

      {/* Error pages */}
      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  );
}
