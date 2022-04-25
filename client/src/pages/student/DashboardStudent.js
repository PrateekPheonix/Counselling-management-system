import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Components/button/button'
import LeftNav from './components/nav/dashboardNav'
import upcomingCard from './components/CardUpcoming/upcomingCard'
import Nocard from './components/nocard/nocard'
import './DashboardStudent.css'

const DashboardStudent = () => {
  return (
    <>
    <div className="DashboardStudent">
      <div className="tags">
      <h1>Name</h1>
      <p>Student</p>
    <Tabs className="parentNav">
         <Tab label="Students" className="childNav">
           <div>

           </div>
         </Tab>
         <Tab label="Counsellor" className="childNav">
           
         </Tab>
       </Tabs>
       <div className="logout">
          <Link to="/login"><Button >Logout</Button></Link>
        </div>
      </div>
    </div>
    </>
  )
}
class Tabs extends React.Component{
  state ={
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {

    this.setState({ activeTab: tab });
  };
  render(){
    
    let content;
    let buttons = [];
    return (
      <div className='Flex'> 
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
         
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="tab-content">{content}</div>
        
      </div>
    );
  }
}

const TabButtons = ({buttons, changeTab, activeTab}) =>{
   
  return(
    <div className="tab-buttons">
    {buttons.map(button =>{
       return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
    })}
    </div>
  )
}

const Tab = props =>{
  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
export default DashboardStudent