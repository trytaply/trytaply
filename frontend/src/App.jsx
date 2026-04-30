import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing  from './pages/Landing';
import Login    from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Menu     from './pages/Menu';
import Tables   from './pages/Tables';
import GuestApp from './pages/GuestApp';
import KDS      from './pages/KDS';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to='/login' />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'                element={<Landing />} />
        <Route path='/login'           element={<Login />} />
        <Route path='/register'        element={<Register />} />
        <Route path='/r/:slug/:table'  element={<GuestApp />} />
        <Route path='/kds/:slug'       element={<KDS />} />
        <Route path='/dashboard'       element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path='/dashboard/menu'  element={<PrivateRoute><Menu /></PrivateRoute>} />
        <Route path='/dashboard/tables' element={<PrivateRoute><Tables /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
