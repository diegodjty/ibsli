import React from 'react';
import styled from '@emotion/styled';


const Container = styled.div`
    width: 90%;
    margin: auto;
    h3{
        font-size: 1.5rem;
        color: #94C1E9;
        i{
            margin-left: .5rem;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        input, textarea{
            -webkit-appearance: none;
            padding: 10px 5px;
            border: solid lightgray 1px;
            margin: .5rem 0;
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
    @media (min-width: 768px){
        width: 40%;
    }
`;

const ContactForm = () => {
    return (
        <Container id="contact">
            <h3>Send us Message<i class="fas fa-comment-alt"></i></h3>
            <form >
                <input type="text" placeholder="Your Name"/>
                <input type="text" placeholder="Your Email"/>
                <input type="text" placeholder="Subject"/>
                <textarea placeholder="Message" name="" id="" cols="30" rows="10">
                </textarea>
                <input type="submit" value="Submit" className="submitBtn"/>
            </form>
        </Container>
    );
};

export default ContactForm;