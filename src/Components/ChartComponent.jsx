import styled from 'styled-components'
import Chart from './Chart'
import { MonthlyUsers } from '../Data';
import { YearlyUsers } from '../Data';

export const Monthly = () => {
    return(
    <Chartcontainer>
    <div className='chartStat'>
      <div className='stat-wrap'>
          <p className='stat-text'>SHIPMENT</p>
          <p className='stat-amount'>60,000</p> 
      </div>
      <div className='stat-wrap'>
          <p className='stat-text'>ACTIVE VEHICLES</p>
          <p className='stat-amount'>237,889</p>
      </div>
      <div>
      
      </div>      
  </div>   
   <Chart 
      data={MonthlyUsers}
      grid
      datakey="shipment"
      datakey2="truck"
  />

  </Chartcontainer>   
)
}

export const Yearly = () => {
    return(
    <Chartcontainer>
    <div className='chartStat'>
      <div className='stat-wrap'>
          <p className='stat-text'>SHIPMENT</p>
          <p className='stat-amount'>23,360,00</p> 
      </div>
      <div className='stat-wrap'>
          <p className='stat-text'>ACTIVE VEHICLES</p>
          <p className='stat-amount'>4,237,889</p>
      </div>
      <div>
      
      </div>      
  </div>   
   <Chart 
      data={YearlyUsers}
      grid
      datakey="shipment"
      datakey2="truck"
  />

  </Chartcontainer>   
)
}


const Chartcontainer = styled.div`
        background-color: #FFFFFF;   
        padding: 2em;
        overflow: scroll;
        .chartStat{
            display: flex;
            column-gap: 9.4em;
            @media(max-width: 700px){
                flex-direction: column;
            } 

            .stat-text{
                color: #01133C89;
                font-size: 0.75em;
                line-height: 0.9em;
            }
            .stat-amount{
                color: #01133C;
                font-size: 1.5em;
                font-weight: bold;
                line-height: 1.9em;
            }
        }
` 
