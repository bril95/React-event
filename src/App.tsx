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
import CatalogPage from './Pages/catalog/CatalogPage';
import CurrentCard from './Pages/catalog/card/CurrentCard';

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
        <Route element={<Layout />}>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="/" element={<CatalogPage />}/>
          <Route path="/card/:id" element={<CurrentCard />}/>
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" theme="colored"/>
    </BrowserRouter>
  </Provider>
);

export default App;
