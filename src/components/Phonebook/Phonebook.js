import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authSelectors, authOperations } from '../../redux/auth';

import  Section  from '../Section';
import  Container  from '../Container';
import  ContactForm  from '../ContactForm';
import  Filter  from '../Filter';
import  ContactList  from '../ContactList';

export default function Phonebook() {
  const dispatch = useDispatch();
  const allContacts = useSelector(authSelectors.getUsername);
  const isLoading = useSelector(authSelectors.getIsLoggedIn);
  const error = useSelector(authSelectors.getError);

  useEffect(() => {
    dispatch(dispatch(authOperations.fetchCurrentUser()));
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <h1 className="title">Phonebook</h1>
          <ContactForm />
        </Container>
        {allContacts.length ? (
          <Container>
            <h2 className="title">Contacts</h2>
            <Filter />
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactList />
          </Container>
        ) : (
          <h1 className="title">Phonebook</h1>
        )}
      </Section>
    </>
  );
}
