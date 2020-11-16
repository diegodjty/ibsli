import React,{useState} from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Lighthouse,Ibsli } from '../img';

const Container = styled.div`
    @media (max-width: 768px){
        display: none;
    }
    header{
        max-width: 1424px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        .logo{
            display: flex;
            align-items: center;
            justify-content: center;
            a{
                img{
                    width: 50px;
                    margin-right: 1rem;
                }
                text-decoration: none;
                font-size: 2rem;
                font-family: 'Montserrat';
                font-weight: 700;
                color: #364669;
            }
        }
        nav{
            ul{
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Montserrat';
                font-size: 1.4rem;
                color: #7EC2EB;
                li{
                    list-style: none;
                    margin: 0 2rem;
                    cursor: pointer;
                    a{
                        text-decoration: none;
                        color: #7EC2EB;
                    }
                    i{
                        margin: .5rem;
                    }
                    :hover{
                        color: #5686B0;
                    }
                    .dropdown{
                        border: solid lightgray 1px;
                        background-color: white;
                        position: absolute;
                        -webkit-box-shadow: 0px 11px 8px -13px #000000; 
                        box-shadow: 0px 11px 8px -13px #000000;
                        li{
                            margin: 1rem;
                            font-size: 1rem;
                            :hover{
                                background-color: #94C1E9;
                                a{
                                    color: white;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

`;

const Header = () => {

    const [aboutDrop,setAboutDrop] = useState(false);
    const [liDrop,setLiAboutDrop] = useState(false);
    const [nyDrop,setNyAboutDrop] = useState(false);

    return (
        <Container>
           <header>
                <div className="logo">
                    <NavLink to='/'>
                        <img src={Lighthouse} alt="lighthouse"/>
                    </NavLink>
                    <NavLink to='/'>
                        IBSLI
                    </NavLink>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to='/'>HOME</NavLink></li>
                        <li onMouseLeave={()=>setAboutDrop(!aboutDrop)} onMouseEnter={()=>setAboutDrop(!aboutDrop)}>ABOUT<i class="fas fa-caret-down" />
                            {aboutDrop &&(
                                <nav className="dropdown animate__animated animate__fadeIn">
                                <li><NavLink to='.'>Dropdown link</NavLink></li>
                                <li><NavLink to='.'>Dropdown link</NavLink></li>
                                <li><NavLink to='.'>Dropdown link</NavLink></li>
                                <li><NavLink to='.'>Dropdown link</NavLink></li>
                            </nav>
                            )}  
                        </li>
                        <li onMouseLeave={()=>setLiAboutDrop(!liDrop)} onMouseEnter={()=>setLiAboutDrop(!liDrop)}>LONG ISLAND<i class="fas fa-caret-down" />
                            {liDrop &&(
                                <nav className="dropdown animate__animated animate__fadeIn">
                                <li><NavLink to='/longisland/export'>LI Exports </NavLink></li>
                                <li><NavLink to='.'>Dropdown link</NavLink></li>
                                <li><NavLink to='.'>Dropdown link</NavLink></li>
                                <li><NavLink to='.'>Dropdown link</NavLink></li>
                            </nav>
                            )}  
                        </li>
                        <li onMouseLeave={()=>setNyAboutDrop(!nyDrop)} onMouseEnter={()=>setNyAboutDrop(!nyDrop)}>NEW YORK<i class="fas fa-caret-down" />
                            {nyDrop &&(
                                <nav className="dropdown animate__animated animate__fadeIn">
                                <li><NavLink to='/newyork/export'>NYS Export</NavLink></li>
                                <li><NavLink to='.'>Dropdown link</NavLink></li>
                                <li><NavLink to='.'>Dropdown link</NavLink></li>
                                <li><NavLink to='.'>Dropdown link</NavLink></li>
                            </nav>
                            )}  
                        </li>
                    </ul>
                </nav>
           </header> 
        </Container>
    );
};

export default Header;