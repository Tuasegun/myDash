import React from 'react';
import { BsPeopleFill, BsPersonFill } from 'react-icons/bs';
import { MdOutlineStackedLineChart } from 'react-icons/md';
import styled from 'styled-components'

const DataCards = () => {
    return (
  
  <DataCardStyle>
      <div className="regCustomers">
          <div className="customerNumbers">
            <p className='registeredtitle'>Registered Customers</p>
            <p className="registerednumbers">389.2k</p>
            <p className="dailyStats">3487 Joined today</p>
          </div>
          <div className="customerIcon">
            <BsPersonFill  className="personIcon"/>
          </div>
      </div>
      <div className="regCustomers transporters">
          <div className="customerNumbers">
            <p className='registeredtitle'>Registered Transporters</p>
            <p className="registerednumbers">15.6M</p>
            <p className="dailyStats">3467 Onboarded today</p>
          </div>
          <div className="customerIcon peopleIcon">
            <BsPeopleFill className="personIcon"/>
          </div>
      </div>
      <div className="regCustomers shipment">
          <div className="customerNumbers">
            <p className='registeredtitle'>Total Shipments</p>
            <p className="registerednumbers">348.9k</p>
            <p className="dailyStats">3467 Joined today</p>
          </div>
          <div  className="customerIcon statIcon">
            <MdOutlineStackedLineChart className="personIcon"/>
          </div>
      </div>
  </DataCardStyle>
  );
};


export default DataCards;

const DataCardStyle = styled.div`
    width: 100%;
    padding-top: 1.563em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19.62em, 1fr)); 
    gap: 2em;
    .regCustomers{
        position: relative;
        display: flex;
        justify-content: space-between;
        background-color: #FFFFFF;
        width: auto;
        transition: background-color 0.4s ease,
                    padding 0.8s linear;
        .customerNumbers{
            padding: 2.25em 1.688em;
        }

        .registeredtitle{
            font-size: 0.75em;
            color: #01133C89;
            text-transform: uppercase;
            line-height: 0.85em;
        }

        .registerednumbers{
            font-size: 2em;
            color: #01133C;
            font-weight: bold;
            font-style: normal;
            line-height: 2.2em;
        }

        .dailyStats{
            font-size:0.88em;
            color: #01133C;
            font-style: normal;
            line-height: 1em;
          
        }
        :hover{
            background: #386CE2;
            color: #FFFFFF;
            .dailyStats,.registerednumbers,.registeredtitle{
                color: white;
            }
        }
       
    }

    .customerIcon{
        position: absolute;
        bottom: 0;
        right: 0;
        color: #FFFFFFE6;
        background:#386CE2;
        font-size: 1.25em;
        padding: 1.1em 1em 1em 1.4em;
        border-top-left-radius: 10em;
        
        .personIcon{
            font-size: 1.1em;           
        }
    }
    .peopleIcon{    
            background-color:#0FC4AF;
        }
    .statIcon{
        background-color: #DE387E;
    } 

    .transporters{
        :hover{
            background-color:#0FC4AF;
        }
    }

    .shipment{
        :hover{  
        background: #DE387E;
        }
    }  
`