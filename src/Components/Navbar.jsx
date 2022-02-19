import React from 'react';
import styled from 'styled-components'
import {AiOutlineBell} from 'react-icons/ai'
import {HiMenuAlt4} from 'react-icons/hi'

const Navbar = ({}) => {
    
  return (
  <NavStyle>
    <div className="navWrapper">
    

    <div className='notifContainer'>
    <AiOutlineBell className='notifIcon'/>
    <span></span>
    </div>
       <div className="vertLine" />
    <div className="profilePicture">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="profile-image" alt="image" />
    </div>   
    </div>  
  </NavStyle>);
};

export default Navbar;

const NavStyle = styled.div`
    width:100%;
    .navWrapper{
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }
    .profilePicture{   
        border-radius: 50px;
        
        .profile-image{
        height: 3.688em;
        width: 3.688em;
        object-fit: cover;
        border-radius: 3.125em;
    }
    }
    .vertLine{
        border-color: #C3CDD6;
        height: 2.824em;
        background-color: red;
        border-style: solid;
        border-width: 0.08em;
        margin-left: 10px;
        margin-right: 10px; 
    }

    .notifContainer{
        background-color: #1C16160B;
        padding: 1.2em 1.3em;
        border-radius: 2em;
        position: relative;
        .notifIcon{
            font-size: 1.3em;

        }
        span{
            font-size: 4em;
            background-color: #EE9C30;
            width: 0.5em;
            height: 0.5em;
            font-size: 0.9em;
            position: absolute;
            top: 1.12em;
            right: 1.54em; 
            display: flex;
            justify-content: center;
            align-content: center;
            border-radius: 50%;
        }
    }
`