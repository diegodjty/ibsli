import React from 'react';
import styled from '@emotion/styled'

import Hero from './../components/Hero';
import MissionVission from './../components/MissionVission';
import MobileTeam from './../components/mobile/MobileTeam';



const Container = styled.div`

`;

const Homepage = () => {
    return (
        <Container>
            <Hero />
            <MissionVission />
            <MobileTeam />
        </Container>
    );
};

export default Homepage;