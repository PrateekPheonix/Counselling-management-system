import React from 'react'
import UpcomingCard from '../student/components/CardUpcoming/upcomingCard'
import CardNew from './components/card/CardNew'
import './dashboardAdmin.css'
import NameDisplay from './components/NameDisplay/NameDisplay'
import Button from '../../Components/button/button'

const DashboardAdmin = () => {
  return (
    <>
    <div className="adminDashborad">
    <div className="tabs">
        <h1>Name</h1>
        <p>Admin</p>
       <Tabs className="parentNav">
         <Tab label="Students" className="childNav">
           <div>
             <NameDisplay/>
           </div>
         </Tab>
         <Tab label="Counsellor" className="childNav">
           <div>
             <p className="counsellor">Counsellor</p>
             <p className="counsellor">Counsellor</p>
             <p className="counsellor">Counsellor</p>
             <p className="counsellor">Counsellor</p>
             <p className="counsellor">Counsellor</p>
             <p className="counsellor">Counsellor</p>
             <p className="counsellor">Counsellor</p>
             <p className="counsellor">Counsellor</p>
           </div>
         </Tab>
         <Tab label="New Requests" className="childNav">
           <div className="cardnew">
             <CardNew/>
           </div>
         </Tab>
         <Tab label="Appointments">
           <div>
             <UpcomingCard/>
           </div>
         </Tab>
       </Tabs>
       <div className="logout">
                <Button >Logout</Button>
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

export default DashboardAdmin