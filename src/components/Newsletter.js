import React from 'react';
import styled from '@emotion/styled';


const Container = styled.div`
    font-family: 'Montserrat';
    width: 90%;
    margin: auto;
    text-align: center;
    h2{
        color:#7E8CEB;
        font-size: 2rem;
    }
    .newsletter{
        h3{
            color: #94C1E9;
            font-weight: 300;
            font-size: 1.5rem;
        }
        i{
            margin-left: .5rem;
        }
        p{
            color: #29446B;
        }
        form{
            display: flex;
            width: 100%;
            .email{
                -webkit-appearance: none;
                padding: 10px 5px;
                border: solid lightgray 1px;
                flex: 1;
            }
            .submitBtn{
                border: none;
                background: none;
                border-left: none;
                background-color: #94C1E9;
                color: white;
                cursor: pointer;
            }
            
        }
    }
    @media (min-width: 768px){
        width: 40%;
        .newsletter{
            form{
                width: 70%;
                margin: auto;
            }
        }
    }
`;

const Newsletter = () => {
    return (
        <Container>
            <h2>IBSLI</h2>
            <div className="newsletter">
                <h3>NEWSLETTER<i class="fas fa-envelope"></i></h3>
                <p>Subscribe to our newsletter to get our most important updates!</p>
                <form>
                    <input type="text" className="email" placeholder="user@email.com" />
                    <input type="submit" value ="Subscribe" className="submitBtn"/>
                </form>
            </div>
        </Container>
    );
};

export default Newsletter;