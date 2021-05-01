import React from 'react';
import { useMediaQuery } from 'react-responsive';

import './navbarStyles.css';

import logo from '../../images/logo.png';
import title from '../../images/title.png';
import userAvatar from '../../images/userAvatar.png';
import searchIcon from '../../images/searchIcon.png';
import burger from '../../images/hamburgerIcon.png';

const handleClick = () => window.open('/', '_self');

function Navbar( {onOpen} ) {

    const isSmallScreen = useMediaQuery({ query: '(max-width: 1190px)' });

    return (
        <div className='navbarContainer'>
            <div className='navMenu' >
                <img src={logo} alt='logo' className='logoImg' />

                <div className='menuButtonGroup'>
                    <img src={title} alt='title' className='titleImg' />
                    { 
                    isSmallScreen ? 
                        <button className='menuBtn' onClick={()=> onOpen()}>
                            <img src={burger} alt='menu' className='burgerIcon' />
                        </button>
                    :
                    <>
                        <button className='menuBtn'>
                            Home
                        </button>
                        <button className='menuBtn'>
                            About
                        </button>
                        <button className='menuBtn'>
                            Courses
                        </button>
                        <button className='menuBtn'>
                            Events
                        </button>
                        <button className='menuBtn'>
                            Blog
                        </button>
                        <button className='menuBtn'>
                            Contact
                        </button>
                    </>
                    }
                </div>
            </div>

            <div className='userMenu'>
                <div className='userButtonGroup'>

                    <button className='menuBtn'>
                        <img src={userAvatar} alt='user_avatar' className='avatar icon' />
                    </button>
                    |
                    <button className='menuBtn'>
                        <img src={searchIcon} alt='search_icon' className='search icon' />
                    </button>

                </div>
                
                <button className='applyBtn' onClick={()=> handleClick()}>
                    APPLY NOW
                </button>
            </div>
        </div>
    )
}

export default Navbar;