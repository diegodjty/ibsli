import React,{useState} from 'react';
import styled from '@emotion/styled';
import members from '../../data/members.json'


const Container = styled.div`
    @media (min-width: 768px){
        display: none;
    }
    background-color: #5686B0;
    color: white;
    padding: 1rem 0;
    .team-member{
        width: 90%;
        margin: auto;
        font-family: 'Montserrat';
        .team-header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left-arrow,.right-arrow{
                width: 10%;
                i{
                    font-size: 2rem;
                    color: black;
                    opacity: .5;
                }
            }
            .team-info{
                width: 60%;
                text-align: center;
                font-weight: 300;
                h3{

                }
                p{
                    font-size: .8rem;
                }
                .icon{
                    font-size: 1.5rem;
                    padding-bottom: 1rem;
                    a{
                        text-decoration: none;
                        color: white;
                    }
                }
            }
        }
        .team-body{
            text-align: justify;
            .team-img{
                margin: auto;
                width: 70%;
                img{
                    width: 100%;
                }
            }
        }
    }
`;


const MobileTeam = () => {

    const [member,setMember] = useState(members)
    const [counter,setCounter] = useState(0)

    const changeMemberLeft = () =>{
        if(counter!==0){
            setCounter(counter-1)
        }
    }  
    const changeMemberRight = () =>{
        if(counter!==2){
            setCounter(counter+1)
        }
    } 
    return (
        <Container>
            <div className="team-member">
                <div className="team-header">
                    <div className="left-arrow" onClick={changeMemberLeft}>
                        <i class="fas fa-long-arrow-alt-left"></i>
                    </div>
                    <div className="team-info">
                        <h3 className="animate__animated animate__backInRight">{member[counter].name}</h3>
                        <p>{member[counter].description}
                        </p>
                        <div className="icon">
                        <a href = {`mailto: ${member[counter].email}`}>
                            <i class="far fa-envelope"></i>
                        </a>
                        </div>
                    </div>
                    <div className="right-arrow"onClick={changeMemberRight}>
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                </div>
                <div className="team-body">
                    <div className="team-img">
                        <img src={process.env.PUBLIC_URL+`/teamImg/${member[counter].img}.jpg`} alt="team member"/>
                    </div>
                    <div className="team-bio">
                        <p>
                            {member[counter].bio}
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MobileTeam;