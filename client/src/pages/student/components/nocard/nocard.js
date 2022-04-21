import React from 'react'
import Button from '../../../../Components/button/button'
import './nocard.css'

const Nocard = () => {
  return (
    <>
    <div className="nocard">
        <h1 className="noAppoint">No Upcoming Appointments!</h1>
        <h2 className="noAppoint">(All the approved requests will be displayed here)</h2>
        <div className="bookNowCard">
            <h1 className="book">Book One now!</h1>
            <p className="book">Seek expert help from our therapists for coping with isolation and COVID-related stress and worry. Consult with experts to learn effective strategies for restful sleep and good sleep health.</p>
            <div className="bookNowBot">
                <p className="timeperiod"><span className="consult">Consultation time: </span>50 Mins</p>
                <Button buttonStyle="btn-normal">Book Session</Button>
            </div>

        </div>
    </div>
    </>
  )
}

export default Nocard