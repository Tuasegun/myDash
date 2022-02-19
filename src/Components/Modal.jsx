import React,{useState, useEffect} from 'react';
import {AiOutlineCloseSquare} from 'react-icons/ai'
import { FaTruck } from 'react-icons/fa';
import TrackerComponent from './TrackerComponent';
import styled from 'styled-components'

const Modal = ({setOpenModal}) => {
  
  

  return (
  <ModalStyle>
    <div className="overlay">
    </div>
    <div className="modalContent">
        <div className="closeButton" onClick={() => setOpenModal(false)}>
          <AiOutlineCloseSquare/>
        </div>
        <div className="trackerLoading">
        <TrackerComponent/> 
          </div>    
          <div>
          <div className='truckDetails'>
            <div className='truckId profile'>
                <FaTruck className='truckIcon'/>
               <div className="plateNum ">
                   <p className='top-text'>ET-272-KJA</p>
                   <p className='bottom-text'>Toyota Highlander 2004</p>
               </div>
            </div>

            <div className="location">
                <p className='top-text'>Lagos</p>
                <p className='bottom-text'>Start Location</p>
            </div>

            <div className="location">
                <p className='top-text'>Abuja</p>
                <p className='bottom-text'>Destination</p>
            </div>

            <div className="status">
                <p className='top-text'>In Transit</p>
                <p className='bottom-text'>Status</p>
            </div>
        </div>
          </div>  
    </div>  
  </ModalStyle>
  );
};



const ModalStyle = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-top: 1.6875rem;
  padding-bottom: 2rem;
  

  .modalContent{
    width: 54.5%;
    position: relative;
    height: 55%;
    padding: 1.438em 1.1813em 3.055em 3.68em;
    background-color: #FFFFFF;
    overflow: auto;
    @media(max-width: 750px){
      width: 100%;
      max-width: 100vw;
      height: 90vh;
      top: 20vh;
      padding-top: 3rem;
    }
      .closeButton{
        font-size: 1.4em;
        font-weight: 600;
        color: #200E32;
        position: absolute;
        right: 0;
      }

    

      .truckDetails{
            display: flex;
            margin-top: 1em;
            justify-content: space-between;
            background-color: #FFFFFF;
            align-items: center;
            padding: 1.5em 1.544em 2.125em 2.388em;
        }

        .profile{
            display: flex;
            column-gap: 0.5em;
            justify-content: center;
            align-items: center;
        }

        .truckIcon{
            color: #000819DB;
            font-size: 2.45em;
            transform: scaleX(-1);
        }
        .top-text{
            font-size: 1em;
            font-weight: 600;
            line-height: 1.5em;
            color: #0A0A0A;
        }

        .bottom-text{
            color: #7A8395;
            font-size: 0.875em;
        }
  }
`


export default Modal;
