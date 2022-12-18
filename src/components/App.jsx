import './App.css';

import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../components/SharedLayout';

const HomePage = lazy(() => import('../pages/Home'));
const Phonebook = lazy(() => import('../pages/Phonebook'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegistrationPage = lazy(() => import('../pages/Registration'));


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/phonebook" element={<Phonebook />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
