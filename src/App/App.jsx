// import { Route, Routes } from 'react-router-dom';
// import { useEffect, Suspense, lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

//*      Components      //
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Container from 'components/Container';
import Section from 'components/Section/Section';

//*      styles      //
import '../index.scss';

// import { useEffect, Suspense, lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

//*      Auth selectors      //
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {authOperations, authSelectors} from '../redux/auth'

  // import { useEffect, Suspense, lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Switch } from 'react-router-dom';
// import AppBar from './components/AppBar';
// import Container from './components/Container';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';
// import { authOperations, authSelectors } from './redux/auth';

// const HomeView = lazy(() => import('./views/HomeView'));
// const RegisterView = lazy(() => import('./views/RegisterView'));
// const LoginView = lazy(() => import('./views/LoginView'));
// const TodosView = lazy(() => import('./views/TodosView'));
// const UploadView = lazy(() => import('./views/UploadView'));

//*      Root      //
export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsLoggedIn);
  console.log(isFetchingCurrentUser);
//  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  

  useEffect(() => {
    // dispatch(authOperations.fetchCurrentUser());
    dispatch(authOperations({
       "email": "test@teaty.com",
  "password": "pas12345"
    }))
  }, [dispatch]);
  return (
    <Container>
      {/* {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : ( */}
        <>
          <Section>
            <Container>
              <h1 className="title">Phonebook</h1>
              <ContactForm />
            </Container>
            <Container>
              <h2 className="title">Contacts</h2>
              <Filter />
              <ContactList
              />
            </Container>
          </Section>
      </>
      {/* )} */}
    </Container>
  );
}
