import React, {useContext} from 'react';
import styled from 'styled-components'
import {FaTruck, FaLifeRing, FaFileInvoiceDollar} from 'react-icons/fa'
import {BsFillPeopleFill, BsFillPersonFill, BsFillBarChartFill, BsFillCreditCard2FrontFill, BsGearFill} from 'react-icons/bs'
import { DashboardContext } from '../Context/DashboardContext';
import {MdOutlineStackedLineChart} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import {IoCloseCircleOutline} from 'react-icons/io5'

const Sidebar = ({open, setOpen}) => {
    const {sidebar, setSidebar} = useContext(DashboardContext)
    
  return (
  <SidebarStyle open={open}>
     
          <div className="logo">
              <h1 className="logo-text">IPI<span className='purple-dot'>.</span></h1>
          </div>
          <div className="menu">
              <div className="menu-title">MAIN MENU</div>
              <ul className='menuItems'>
                    <li onClick={()=>setSidebar(1) || setOpen(!open) } className={sidebar === 1 ? "activeList" : "menuItemList"}><AiFillHome className='menuListIcon'/> Home</li>
                    <li onClick={()=>setSidebar(2) || setOpen(!open)} className={sidebar === 2 ? "activeList" : "menuItemList"}><FaTruck className='menuListIcon truckIcon'/> Vehicles</li>
                    <li onClick={()=>setSidebar(3) || setOpen(!open)} className={sidebar === 3 ? "activeList" : "menuItemList"}><BsFillPeopleFill className='menuListIcon'/> Transporters</li>
                    <li onClick={()=>setSidebar(4) || setOpen(!open)} className={sidebar === 4 ? "activeList" : "menuItemList"}><BsFillPersonFill className='menuListIcon'/> Customers</li>
                    <li onClick={()=>setSidebar(5) || setOpen(!open)} className={sidebar === 5 ? "activeList" : "menuItemList"}><MdOutlineStackedLineChart className='menuListIcon'/> Shipments</li>

              </ul>
          </div>
          <div className="menu">
              <div className="menu-title">INTERNAL TOOLS</div>
              <ul className='menuItems'>
                    <li onClick={()=>setSidebar(6) || setOpen(!open) } className={sidebar === 6 ? "activeList" : "menuItemList"}><FaFileInvoiceDollar className='menuListIcon'/> Invoices</li>
                    <li onClick={()=>setSidebar(7) || setOpen(!open)} className={sidebar === 7 ? "activeList" : "menuItemList"}><BsFillBarChartFill className='menuListIcon'/> Analytics</li>
                    <li onClick={()=>setSidebar(8) || setOpen(!open)} className={sidebar === 8 ? "activeList" : "menuItemList"}><BsFillCreditCard2FrontFill className='menuListIcon'/> Payments</li>
                    <li onClick={()=>setSidebar(9) || setOpen(!open)} className={sidebar === 9 ? "activeList" : "menuItemList"}><BsGearFill className='menuListIcon'/> Settings</li> 
              </ul>
              <ul className="menuItems">
              <li onClick ={() =>{setOpen(!open)}}  className='closeSidebar'><IoCloseCircleOutline className="menuListIcon" /> Close</li>
              </ul>
          </div>

        
         
      {/* <div className="logout">
              <p className='logoutText'>Logout</p>
          </div> */}
  </SidebarStyle>
  );
};

export default Sidebar;

const SidebarStyle = styled.div`
    flex: 1;
    padding: 2.438em 1em;
    width: auto;
    z-index: 1000;
    height: 100vh;
    position: fixed;
    background-color: #FFFFFF;
    @media (max-width: 768px) {
        width: 100vw;
        max-width: 100vw;
        display: ${(props) => props.open ? "block" : "none"};
        background-color: #fff;
    }

    .logo{
        padding: 0em 1.625em;
        padding-bottom: 1.2em;
        .logo-text{
            font-style: normal;
            font-weight: bold;
            letter-spacing: 0em;
            opacity: 1;
            color: #151619;
            font-size: 1.6em;
        }
        .purple-dot{
            color:#386CE2;
            top:0.5em;
            font-size: 2.0em;
        }
    }
    .menu{
        .menu-title{
            padding: 0em 1.62em;
            font-size: 0.75em;
            color: #7A8395;
        }
        .menuItems{
            list-style: none;
            padding: 2em 0em;
        }
        .menuItemList{
            width: 14.8em;
            padding: 1em 1.6em;
            font-style: normal;
            color: #011B57BF;
            align-items: center;
            font-size: 0.875em;
            display: flex;
            align-items: center;
            cursor: pointer;
            .menuListIcon{
                font-size: 1.3em;
                margin-right: 0.71em;
                cursor: pointer;
            }
            :hover{
               border-radius: 1.5em;
                color: #fff;
                background-color: #386CE2;
                cursor: pointer;
            }

        }
        .activeList{
            width: 14.8em;
            padding: 1em 1.6em;
            font-style: normal;
            border-radius: 1.5em;
            color: #fff;
            background-color: #386CE2;
            align-items: center;
            font-size: 0.875em;
            display: flex;
            align-items: center;
            cursor: pointer;
            
            .menuListIcon{
                font-size: 1.3em;
                margin-right: 0.71em;
            }
        }

        .truckIcon{
                transform: scaleX(-1);
            }
    }

    .closeSidebar{
        cursor: pointer;    
        width: 14.8em;
        padding: 1em 1.6em;
        font-style: normal;
        border-radius: 1.5em;
        color: #fff;
        background-color: #386CE2;
        align-items: center;
        font-size: 0.875em;
        display: none;
        align-items: center;
        
        .menuListIcon{
                font-size: 1.3em;
                margin-right: 0.71em;
            }
        
        @media (max-width: 768px) {
            display: flex;
        }
    }

    /* .logout{
        padding: 0em 0em;
        display: flex;
        justify-content: center;
        background-color: #011B570B;
        color: #000000;
        font-size: 0.875em;
        
        .logoutText{
            cursor: pointer;

        }
    } */

`