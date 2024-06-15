import { Route, Routes } from 'react-router-dom';

import AnnouncePage from './announce';
import AuthPage from './auth';
import HomePage from './home';

const Router = () => {
  return (
    <Routes location={location}>
      <Route path="/*" element={<AuthPage />} />
      <Route path="/app/home" element={<HomePage />} />
      <Route path="/app/announce" element={<AnnouncePage />} />
    </Routes>
  );
};

export default Router;
