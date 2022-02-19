import React, {useContext} from 'react';
import { BsSearch,  BsThreeDotsVertical } from 'react-icons/bs';
import { FaTruck } from 'react-icons/fa';
import styled from 'styled-components'
import Modal from './Modal';
const VehicleTable = () => {
    const [close, setClose] = React.useState(false);
    const toggleNav = () => setClose(!close);
    
  return (
      <>
     {close &&  <Modal setOpenModal={setClose} />}
    <VehicleTableStyle>        
        <div className="tableHeader">
            <div className='tableHeaderNav'>
                    <ul className="tableHeaderList">
                        <li className="tablelistItem">ALL VEHICLES</li>
                        <li className="tablelistItem">TRUCKS</li>
                        <li className="tablelistItem">TRAILERS</li>
                        <li className="tablelistItem">TANKERS</li>
                    </ul>
            </div>
            <div>
                <BsSearch className='searchIcon' />
            </div>
        </div>

        <div className="truckContainer">
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

            <div className="status">
                <p className='top-text'>In Transit</p>
                <p className='bottom-text'>Status</p>
            </div>

            <div className="driverDetails profile">
                <img src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="driverImage" className="driverImage" />
                <div className="driverName">
                    <p className='top-text' >Johnson C</p>
                    <p className='bottom-text'>Transporter</p>
                </div>
            </div>

            <div className="shipStatus">
                    <button className='transit'><div className='redDot'></div>In transit</button>
                    <p className='track-link'>Track Shipment</p>
            </div>

            <div className="menu" onClick={toggleNav}>
            <BsThreeDotsVertical className='menuIcon'/>
            </div>
        </div>
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

            <div className="status">
                <p className='top-text'>In Transit</p>
                <p className='bottom-text'>Status</p>
            </div>

            <div className="driverDetails profile">
                <img src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="driverImage" className="driverImage" />
                <div className="driverName">
                    <p className='top-text' >Johnson C</p>
                    <p className='bottom-text'>Transporter</p>
                </div>
            </div>

            <div className="shipStatus">
                    <button className='transit'><div className='redDot'></div>In transit</button>
                    <p className='track-link'>Track Shipment</p>
            </div>

            <div className="menu">
            <BsThreeDotsVertical className='menuIcon'/>
            </div>
        </div>

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

            <div className="status">
                <p className='top-text'>In Transit</p>
                <p className='bottom-text'>Status</p>
            </div>

            <div className="driverDetails profile">
                <img src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="driverImage" className="driverImage" />
                <div className="driverName">
                    <p className='top-text' >Johnson C</p>
                    <p className='bottom-text'>Transporter</p>
                </div>
            </div>

            <div className="shipStatus">     
            <button className='transit'><div className='redDot'></div>In transit</button>
                    <p className='track-link'>Track Shipment</p>
            </div>

            <div className="menu">
            <BsThreeDotsVertical className='menuIcon'/>
            </div>
        </div>


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

            <div className="status">
                <p className='top-text'>In Transit</p>
                <p className='bottom-text'>Status</p>
            </div>

            <div className="driverDetails profile">
                <img src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="driverImage" className="driverImage" />
                <div className="driverName">
                    <p className='top-text' >Johnson C</p>
                    <p className='bottom-text'>Transporter</p>
                </div>
            </div>

            <div className="shipStatus">
                   <button className='transit'><div className='redDot'></div>In transit</button>
                    <p className='track-link'>Track Shipment</p>
            </div>

            <div className="menu">
            <BsThreeDotsVertical className='menuIcon'/>
            </div>
        </div>
        </div> 
    </VehicleTableStyle>
    </>
  );
};

export default VehicleTable;

const VehicleTableStyle = styled.div`
    margin-top: 2.3em;
    background-color: #F6F8FB;
    padding: 0em 0.813em 0em 0.813em;
    .tableHeader{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0em 2.56em 0em 1.25em;
            max-width: 80%;
            border-bottom: 0.1em solid #70707034;
           @media(max-width:450px){
            padding: 0em 1.2em 0em 1.25em;
           }
        }

        .tableHeaderList{
            display: flex;
            list-style: none;
            .tablelistItem{
                padding: 2.3em 0.8em;
                font-size: 0.75em;
                color: #9BA3A0;
                font-weight: medium;
                :hover{
                    color: #386CE2;
                    font-weight: 600;
                    border-bottom: 0.4em solid #386CE2;
                }
            }
        }

        .searchIcon{
            font-size: 1.25em;
            color:  #0B0314C6;
            @media(max-width: 500px){
                display: none;
            }
        }
        .truckContainer{
            @media(max-width:768px){
            
            }
        }
        .truckDetails{
            display: flex;
            margin-top: 1em;
            justify-content: space-between;
            background-color: #FFFFFF;
            align-items: center;
            padding: 1.5em 1.544em 2.125em 2.388em;

            @media(max-width:768px){
                font-size: 0.9em;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 0.5em; 

            }

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

        .driverImage{
            height: 2.81em;
            width: 2.81em;
            object-fit: cover;
            border-radius: 3.125em;
        }

        .shipStatus{
                display: flex;
                flex-direction: column;
                align-items: center;
                column-gap: 2em;
                margin-top: 0.5em;
                .transit{
                    border: 0.1em solid #C9D1DA;
                    padding: 0.5em 1em;
                    border-radius: 1.0em;
                    background-color: transparent;
                    font-size: 1em;
                    font-weight: 600;
                    line-height: 1.5em;
                    color: #0A0A0A;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    column-gap: 0.5em;
                }
                .track-link{
                    font-size: 0.875em;
                    color: #7A8395;
                    line-height: 2.3em;
                    text-decoration: underline;
                }
            
        }   
        .menuIcon{
            color: #0A0A0A;
            font-weight: 600;
            font-size: 1.3em;   

        }

        .redDot{
            padding: 0.3em 0.3em;
            background-color: #2FA072;
            border-radius:3.125em;
        }

`