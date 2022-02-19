import React, {useContext} from 'react';
import styled from 'styled-components'
import HomeComponent from '../Components/HomeComponent';
import VehiclesComponent from '../Components/VehiclesComponent';
import Sidebar from '../Components/Sidebar';
import { DashboardContext } from '../Context/DashboardContext';
import { DashboardProvider } from '../Context/DashboardContext';
import {HiMenuAlt4} from 'react-icons/hi'
import Navbar from '../Components/Navbar';


const Home = () => {
  const {sidebar} = useContext(DashboardContext)
   const [open, setOpen] = React.useState(false)

  return (<HomeStyle>
      
      <Sidebar open={open} setOpen={setOpen}/>

       <div className='HomeContainer'>
      <div className="header">
      <HiMenuAlt4 onClick={()=> setOpen(!open)} className="mobileIcon"/>
      <Navbar/>
      </div>
      {sidebar === 1 && <HomeComponent/>}
      {sidebar === 2 && <VehiclesComponent/>}
      {sidebar === 3 && <HomeComponent/>}
      {sidebar === 4 && <HomeComponent/>}
      {sidebar === 5 && <HomeComponent/>}
      {sidebar === 6 && <HomeComponent/>}
      {sidebar === 7 && <HomeComponent/>}
      </div> 
    </HomeStyle>
  )
};

export default Home;

const HomeStyle = styled.div`
    display: flex;

    .HomeContainer{
      flex:8;
      background-color: #F0F3F5;
      padding: 1.88em 4.25em 1.21em 20.75em;
      @media(max-width:745px){
        padding: 1.8em 0.5em;      
      }
    }

    .header{
      display: flex;
      align-items: center;
    }

    .mobileIcon {
                font-size: 1.5rem;
                cursor: pointer;
                display: none;

                @media (max-width: 768px) {
                    display: block;
                }
            }
`