import { Route, Routes } from 'react-router-dom';

import AuthPage from './auth';
import HomePage from './home';

const Router = () => {
  return (
    <Routes location={location}>
      <Route path="/*" element={<AuthPage />} />
      <Route path="/app/home" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
