import React from 'react';
import styled from "@emotion/styled";
import { HeroImg } from '../img';



const Container = styled.div`
    
    background-color: #F6F8FD;
    .first-section{
        width: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;
        h1{
            margin: 0;
            padding-top: 3rem;
            font-family: 'Montserrat';
            color: #7EC2EB;
            span{
                color: #7E8CEB;
            }
        }
        p{
            width: 80%;
            text-align: left;
            font-family: 'Montserrat';
            font-weight: bold;
            color: #29446B;
            font-size: 1.2rem;
            margin-top: 3rem;
        }
        button{
            border: none;
            background-color: #7E8CEB;
            color: white;
            padding: .3rem 1rem;
            font-size: 1.2rem;
            border-radius: 5px;
            width: 40%;
            margin: auto;
            margin-top: 2rem;
        }
    }
    .second-section{
        width: 100%;
        .imgContainer{
            width: 80%;
            margin: auto;
            margin-top: 2rem;
            img{
                width: 100%;
            }
        }
    }

`;

const Hero = () => {
    return (
        <Container>
            <div className="first-section">
                <h1>International
                    Business Solutions
                    For <span>Long Island</span>
                </h1>
                <p>Providing International market
                    intelligence and educational
                    services for the local business
                    community
                </p>
                <button>
                    Learn More
                </button>
            </div>
            <div className="second-section">
                <div className="imgContainer">
                    <img src={HeroImg} alt=""/>
                </div>
            </div>
        </Container>
    );
};

export default Hero;