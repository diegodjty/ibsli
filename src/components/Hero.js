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
            font-family: 'Montserrat';
            font-weight: light;

        }
        
        @media (min-width: 768px){
            width: 25%;
            button{
                margin: 0;
                font-size: 1rem;
                cursor: pointer;
                width: 50%;
                padding: .5rem 2rem;
            }
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
        @media (min-width: 768px){
            width: 55%;
            .imgContainer{
                animation: upanddown 5s infinite 0s linear;
            }
        }
    }


    @media (min-width: 768px){
        padding: 5rem;
        .cont{
            display: flex;
            max-width: 1424px;
            margin: auto;
        }
        
    }
    @keyframes upanddown{
    0%{
        transform: rotate(xx) translateY(50px);
        }
    50%{
        transform: translateY(-50px);
        }
}
`;

const Hero = () => {
    return (
        <Container>
            <div className="cont">
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
            </div>
        </Container>
    );
};

export default Hero;