import React from 'react';
import styled from '@emotion/styled';
import Newsletter from './Newsletter';
import ContactForm from './ContactForm';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Container = styled.div`
    @media (min-width: 768px){
        display: flex;
        max-width: 1424px;
        margin: auto;
        justify-content: space-between;
    }
`;

const Contact = () => {
    return (
        <Container>
            <Newsletter />
            <ContactForm />
        </Container>
    );
};

export default Contact;