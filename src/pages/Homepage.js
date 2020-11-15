import React from 'react';
import styled from '@emotion/styled'

import Hero from './../components/Hero';
import MissionVission from './../components/MissionVission';



const Container = styled.div`

`;

const Homepage = () => {
    return (
        <Container>
            <Hero />
            <MissionVission />
        </Container>
    );
};

export default Homepage;