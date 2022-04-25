import React from 'react'
import Navbar from './Components/Nav/navbar'
import Button from '../../Components/button/button'
import { Link } from 'react-router-dom'
import Card from './Components/card/card'

const DashboardCounsellor = () => {
  return (
    <>
    <div className="DashboardCounsellor">
    <div className="tabs">
        <h1>Name</h1>
        <p>Counsellor</p>
       <Tabs className="parentNav">
         <Tab label="Upcoming Appointments" className="childNav">
           <div>
             <Card/>
           </div>
         </Tab>
         <Tab label="Past Apppointments" className="childNav">
           <div>
             <Card/>
           </div>
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


export default DashboardCounsellor