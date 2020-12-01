import React,{useState} from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {Lighthouse} from '../../img'


const Container = styled.div`
    @media (min-width: 768px){
        display: none;
    }
    header{
        background-color: #5686B0;
        .menuBtn{
                font-size: 1.5rem;
                position: absolute;
                left: 10px;
                top: 10px;
                z-index: 200;
            .close{
                color: white;
            }
        }
        .menu{
            background-color: #5686B0;
            padding-top: 1rem;
            display: flex;
            flex-direction: column;
            height: 100vh;
            width: 100vw;
            nav{
                font-family: 'Montserrat';
                font-weight: 700;
                font-size: 1.2rem;
                margin-top: 1rem;
                ul{
                    display: flex;
                    flex-direction: column;
                    li{
                        list-style: none;
                        margin-bottom: 2rem;
                        color: #A9C1E2;
                        a{
                            text-decoration: none;
                            color: #A9C1E2;
                        }
                    }
                }
            }
            img{
                width: 75px;
                margin: auto;
                margin-top: 2rem;
            }
            .longIsland{
                margin-top: -1rem;
                margin-bottom: 1rem;
                li{
                    margin: .2rem;
                    font-size: 1rem;
                }
            }
        }
    }

`

const MobileHeader = () => {

    const [isMenuOpen,setMenuOpen] = useState(false);
    const [liSubmenu,setLiSubMenu] = useState(false);
    const [nySubMenu,setNySubMenu] = useState(false);
 
    return (
        <Container>
            <header>
                {
                isMenuOpen ?
                <>
                    <div className="menuBtn" onClick={()=>setMenuOpen(!isMenuOpen)}>
                        <i className={isMenuOpen?'fas fa-times close':'fas fa-bars'}></i>
                    </div>
                    <div className="menu animate__animated animate__fadeInDown">
                    <nav>
                        <ul>
                            <li><NavLink  activeStyle={{ color: '#CBD9F6' }} to="/"> HOME</NavLink></li>
                            <li><NavLink  to="/"> ABOUT</NavLink></li>
                            <li onClick={()=>setLiSubMenu(!liSubmenu)}>LONG ISLAND</li>
                            {liSubmenu?
                                    <ul className="longIsland animate__animated animate__fadeInLeft">
                                    <li><NavLink to="/">Annual exports by County</NavLink></li>
                                    <li><NavLink to="/">Exports by industry</NavLink></li>
                                    <li><NavLink to="/">Foreign Direct Investments</NavLink></li>
                                    <li><NavLink to="/">Economic Overview</NavLink></li>
                                </ul>
                                :
                                null
                            }
                            <li onClick={()=>setNySubMenu(!nySubMenu)}>NEW YORK</li>
                            {nySubMenu?
                                    <ul className="longIsland animate__animated animate__fadeInLeft">
                                    <li><NavLink onClick={()=>setMenuOpen(!isMenuOpen)} to="/newyork/export">NYS Export</NavLink></li>
                                    <li><NavLink to="/">NYS Import</NavLink></li>
                                    <li><NavLink to="/">Service Export</NavLink></li>
                                </ul>
                                :
                                null
                            }
                            <li><NavLink  to="/"> CONTACT</NavLink></li>
                            <li><NavLink  to="/"> OUR TEAM</NavLink></li>
                        </ul>
                    </nav>
                        <img src={Lighthouse} alt="lighthouse"/>
                    </div>
                </>
                :
                <div className="menuBtn" onClick={()=>setMenuOpen(!isMenuOpen)}>
                        <i className='fas fa-bars'></i>
                </div>
            }
            </header>
        </Container>
    );
};

export default MobileHeader;