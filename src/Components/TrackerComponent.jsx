import {useEffect, useState} from 'react';
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs';
import {ReactComponent as LoaderSvg } from '../assets/42.svg'
import map from '../assets/map.png'

const TrackerComponent = () =>{
    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined)

    useEffect(() => {
      
      setTimeout(() => {
        setCompleted(true);
        setLoading(true)
      }, 5000)

      
    }, [])
    

    
    return(
      <TrackerStyle>
      {!completed ? (
       <>
       {!loading ? (
         <>
          <div className='modalHeader'>
          <h3 className='modalHeaderh3'>Tracking Vehicle</h3>
          <p className='modalHeaderP'>Please hold on. Locating Vehicle on IPI Network</p>
        </div>
         <div className='loadingContainer'>
         
         <div className="profile">
                <img src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="driverImage" className="driverImage" />
                <div className="driverName">
                    <p className='top-text' >Johnson C</p>
                    <p className='bottom-text'>Transporter</p>
                </div>
                
            </div>
           <div className="loadBar">
                <LoaderSvg/>
            </div>
            <></>
         </div>
      </>
      ) : (
         <div>
           Ewooo
         </div>
       ) }
       </>
       ) : (
        <div className='completed'>
        <div className='modalHeader'>
          <h3 className='modalHeaderh3'>Location Found</h3>
          <p className='modalHeaderP'>Vehicle has been successfully located</p>
        </div>

        <div className='completeId'>
        
        <div className='left-side'>
        <div className="profile carDetails">
                <img src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="driverImage" className="driverImage" />
                <div className="driverName">
                    <p className='top-text' >Johnson C</p>
                    <p className='bottom-text'>Transporter</p>
                </div>    
        </div>
        
        <div className='carDetails'>
        <p className='top-text'  >Maryland, Nigeria</p>
        <p className='bottom-text'>Current location</p>
        </div>
        <div className='carDetails'>
        <p className='top-text'  >36 MINS</p>
        <p className='bottom-text'>Time spent so far</p>
        </div>
        </div>
        <div className="imgContainer">
        <img src={map} alt="" />   
        </div>
        </div>

        </div>
      )}
       </TrackerStyle>     
      )   
}

export default TrackerComponent

const TrackerStyle = styled.div `
           .modalHeader{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;


        .modalHeaderh3{
          font-size: 1.375em;
          font-weight: 600;
          line-height: 2em;
          font-style: normal;
        }
        .modalHeaderP{
          color: #01133C93;
          font-size: 0.875em;
          line-height: 0.9em;
          font-style: normal;
        }        

      }
          
        .loadingContainer{
            display: flex;
            align-items: center;
            padding: 3.625em 18.66em 5em 0em;

            @media(max-width: 740px){
              flex-direction: column;
            }
        }

       .profile{
            flex: 1;
            display: flex;
            column-gap: 0.5em;
            justify-content: center;
            align-items: center;

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
        
    } 
    
       
       .loadBar{
            display: flex;
            justify-content: center;
            padding-left: 0.2em 0.2em ;
            width: 100%;
            flex: 3;
       }

       .completeId{
            padding: 2.563em 5.813em  3.602em   3.569em;
            display: flex;
            column-gap: 4em;

            @media(max-width: 950px){
              flex-direction: column;
            }
       }
        
       .left-side{
        @media(max-width: 740px){
              display: grid;
              grid-template-column: repeat(3, 1fr);
            }
       }

       .imgContainer{
            height: 17.3em; 
            width: 60%;
              img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
            @media(max-width: 740px){
              width: 90%;
            }
        }

        .carDetails{
            padding: 1.43em 4.87em 1.43em 0em;

        }
`