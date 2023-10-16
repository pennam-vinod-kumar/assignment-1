import { Component } from "react";
import { TbSettings2 } from "react-icons/tb";
import { VscDashboard } from "react-icons/vsc";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { TbReportMoney } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { MdOutlineLiveHelp } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDown } from "react-icons/ai";
import {FiMenu} from 'react-icons/fi'
import {RiCloseCircleFill} from 'react-icons/ri'
import DashBoardItem from "../DashBoardItem"
import './index.css'
let menuList=[
    {id:1,name:"Product",image:<MdOutlineProductionQuantityLimits className="category-icon"/>},
    {id:2,name:"Customers",image:<LuContact className="category-icon"/>},
    {id:3,name:"Income",image:<TbReportMoney className="category-icon"/>},
    {id:4,name:"Promote",image:<CiSettings className="category-icon"/>},
    {id:5,name:"Help",image:<MdOutlineLiveHelp className="category-icon"/>}
]
class DashBoard extends Component {

    state = {displayNavbar: false}

    onClickMenu = () => {
      this.setState(prevState => ({
        displayNavbar: !prevState.displayNavbar,
      }))
    }
  
    onClickCross = () => {
      this.setState({displayNavbar: false})
    }
    render() {
        const {displayNavbar}=this.state
    return (
        <div>
        <div className="dashboard-bg">
            <div>
                <div className="dashboard">
                    <TbSettings2 className="dashboard-icon"/>
                    <h1>Dashboard</h1>
                </div>
                <div>
                    <div className="sub-dashboard">
                        <VscDashboard className="category-icon"/>
                        <p>DashBoard</p>
                    </div>
                <div>
                    {menuList.map(each=>(
                    <DashBoardItem details={each}/>
                ))}
                </div>
                </div>
            </div>
            <div className="active-section">
                <div className="user">
                <CgProfile className="category-icon"/>
                <div>
                    <p>Evano</p>
                    <p>Project Manager</p>
                </div>
                </div>
                <AiOutlineDown/>
            </div>
        </div>
        <div className="responsive-container">
        <button
              onClick={this.onClickMenu}
              className="cross-icon-btn"
              type="button"
            >
              <FiMenu className="menu-icon" />
        </button>
        {displayNavbar && (
            <>
              <div className="header-navbar-tabs-container">
                  {menuList.map(each=> 
                    <p>{each.name}</p>)}
              </div>
              <div className="header-navbar-tabs-container">
                <button
                  onClick={this.onClickCross}
                  className="cross-icon-btn"
                  type="button"
                >
                  <RiCloseCircleFill className="cross-icon" />
                </button>
              </div>
            </>
          )}
          </div>
          </div>
    )
    }

}
export default DashBoard