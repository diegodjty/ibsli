import React from 'react';
import styled from '@emotion/styled';
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com'


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

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mk0bcrh', 'template_1puwmeg', e.target, 'user_2C2D9ql1sQemcgl96XaNV')
      .then((result) => {
        toast.success('Email Sent', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
const ContactForm = () => {
    return (
        <Container id="contact">
            <ToastContainer
                position="top-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <h3>Send us Message<i class="fas fa-comment-alt"></i></h3>
            <form onSubmit={sendEmail}>
                <input type="text" placeholder="Your Name" name="name"/>
                <input type="email" placeholder="Your Email" name="email"/>
                <input type="text" placeholder="Subject" name="subject"/>
                <textarea placeholder="Message" name="message" id="" cols="30" rows="10">
                </textarea>
                <input type="submit" value="Submit" className="submitBtn"/>
            </form>
        </Container>
    );
};

export default ContactForm;