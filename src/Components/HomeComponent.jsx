import React, {useContext} from 'react';
import { DashboardContext } from '../Context/DashboardContext';
import styled from 'styled-components'
import Navbar from './Navbar';
import Hero from './Hero'
import DataCards from './DataCards';
import { Monthly } from './ChartComponent';
import { Yearly } from './ChartComponent';
const HomeComponent = () => {
     const {dates, setDates } = useContext(DashboardContext)
        
    return (    
  <HomeComponentStyle>
  
      <Hero greeting="Good Evening, " name="SegunFunmi" subtext="Glad to have you back, here’s an overview of your operations today"/>
      
       <div className="homeWrapper">
         <DataCards/>
         <div className="recordTabs">
            <div className="shipments">
            <h3>Shipments</h3>
            <p>Shipping is going pretty well today, Here’s what we have</p>
            </div>
            
            <div className="dates">
            <ul className="datesList">
            <li onClick={()=>setDates(2)} className={dates === 2 ?"active":"datesListItem"}>1D</li>
            <li onClick={()=>setDates(3)} className={dates === 3 ? "active" : "datesListItem"}>5D</li> 
            <li onClick={()=>setDates(1)} className={dates === 1 ? "active" : "datesListItem"}>1M</li>
            <li onClick={()=>setDates(4)} className={dates === 4 ? "active" : "datesListItem"}>1Y</li>
            <li onClick={()=>setDates(5)} className={dates === 5 ? "active" : "datesListItem"}>Max</li>
            </ul>  
            </div> 
         
        </div> 
         </div> 
         {dates === 1 && <Monthly/>}
        {dates === 4 && <Yearly/>} 
      </HomeComponentStyle>
      )
      
};

export default HomeComponent;

const HomeComponentStyle = styled.div`
   width: 100%;
    height: 100vh;
    background-color:#F0F3F5;
    .homeWrapper{
        width: 100%;
    }
    
    .recordTabs{
        display: flex;
        justify-content: space-between;
        padding-top: 2.0em;
        padding-bottom: 0.8em;

                @media(max-width: 780px){
                    flex-direction: column;
                }
        .shipments{
            h3{
                font-size: 1.25em;
                color: #222222;
                line-height: 1.9em;
            }
            p{
                color:#01133C93;
                font-size: 0.87em;
                line-height: 1em;
            }
        }
        .dates{
            padding: 0em 0em;
            .datesList{
                display: flex;
                justify-content: space-between;
                list-style: none;
                background-color: #FDFDFD;
                height: 3.1em;
                padding: 0.4em 2.477em;
                /* align-content: center; */
                border-radius: 1em;
              
            }
            .datesListItem{
                padding: 1em 1em 1em 1em;
                font-size: 0.875em;
                color: #00173788;
                :hover{
                    background-color: #386CE2;
                    color: #FFFFFF;
                    font-weight: bold;
                }
                
            }
            .active{
                padding: 1em 1em 1em 1em;
                font-size: 0.875em;
                background-color: #386CE2;
                color: #FFFFFF;
                font-weight: bold;
            }
        }
     }

`