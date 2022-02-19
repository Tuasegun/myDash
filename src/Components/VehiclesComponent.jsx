  import React from 'react';
  import styled from 'styled-components'
  import Navbar from './Navbar';
  import Hero from './Hero'
  import VehicleTable from './VehicleTable';

  const VehiclesComponent = () => {
    return (
      <VehicleStyle>
          <Hero greeting="Vehicles" subtext="Manage and Track All Vehicles On The IPI Network"/>
          <VehicleTable/>   
        </VehicleStyle>
    );
  };

  const VehicleStyle = styled.div`
      
      background-color: #F0F3F5;
      
  `

  export default VehiclesComponent;
