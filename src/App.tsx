import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { useSelector } from 'react-redux';
// import { selectIsAuthorized } from './slice/authSlice';
import { Provider } from 'react-redux';
import store from './store/store';
import Layout from './Pages/Layout';
import AuthPage from './Pages/authorization/AuthPage';
import ProfilePage from './Pages/profile/ProfilePage';
import 'react-toastify/dist/ReactToastify.css';

// interface ProtectedRouteProps {
//   element: React.ReactElement;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
//   const isAuthorized = useSelector(selectIsAuthorized);

//   return isAuthorized ? element : <Navigate to="/login" replace />;
// };

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />}/>
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" theme="colored"/>
    </BrowserRouter>
  </Provider>
);

export default App;
