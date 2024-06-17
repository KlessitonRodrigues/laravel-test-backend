import { Route, Routes } from 'react-router-dom';

import AuthPage from './auth';
import HomePage from './home';

const Router = () => {
  return (
    <Routes location={location}>
      <Route path="/home" element={<HomePage />} />
      <Route path="/*" element={<AuthPage />} />
    </Routes>
  );
};

export default Router;
