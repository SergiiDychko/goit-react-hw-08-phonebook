import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader';
import { Container, Header, Link } from './Styles';
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const isLoggedIn = useSelector((state => state.auth.isLoggedIn));

	
  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout