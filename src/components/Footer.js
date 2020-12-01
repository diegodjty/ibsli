import React from 'react';
import styled from '@emotion/styled'

const Container = styled.div`
    background-color: #F6F8FD;
    margin-top: 5rem;
    p{
        margin: 0;
        padding: 2rem;
        color: #94C1E9;
        width: 80%;
        text-align: center;
        margin: auto;
    }
`;
const Footer = () => {
    return (
        <Container>
            <p>&#169; International Business Solutions Long Island || All Rights Reserved.</p>
        </Container>
    );
};

export default Footer;