import React from 'react';
import styled from "@emotion/styled";

const Container = styled.div`
    
    background-color: #F6F8FD;

`;

const Hero = () => {
    return (
        <Container>
            <div className="first-section">
                <h1>International
                    Business Solutions
                    For <span>Long Island</span>
                </h1>
            </div>
            <div className="second-section">

            </div>
        </Container>
    );
};

export default Hero;