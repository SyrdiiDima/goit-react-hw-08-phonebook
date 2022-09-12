import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export default function PrivateRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log('Private', isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
