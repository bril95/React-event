import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { clearAuthState } from '../slice/authSlice';

const useLogout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(clearAuthState());
    navigate('/login');
  };

  return logout;
};

export default useLogout;