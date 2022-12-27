import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {authOperations} from '../../redux/auth';


// import {Section} from '../Section';
// import { Container } from '../Container';
// import {ContactForm} from '../ContactForm';
// import {Filter} from '../Filter';
// import {ContactList} from '../ContactList';

export default function Phonebook() {
const dispatch = useDispatch();
// const 
useEffect (()=>{
dispatch(dispatch(authOperations.fetchCurrentUser()))
},[dispatch]);

return(

  <h1>Hello</h1>

)
}




//  <Section>
//           <Container>
//             <h1 className="title">Phonebook</h1>
//             <ContactForm />
//           </Container>
//           <Container>
//             <h2 className="title">Contacts</h2>
//             <Filter />
//             <ContactList
//             />
//           </Container>
//         </Section>