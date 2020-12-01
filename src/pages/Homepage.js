import React from 'react';
import styled from '@emotion/styled'

import Hero from './../components/Hero';
import MissionVission from './../components/MissionVission';
import MobileTeam from './../components/mobile/MobileTeam';
import Contact from './../components/Contact';



const Container = styled.div`

`;

const Homepage = () => {
    return (
        <Container>
            <Hero />
            <MissionVission />
            <MobileTeam />
            <Contact />
        </Container>
    );
};

export default Homepage;