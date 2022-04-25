import React from 'react'
import Button from '../../../../Components/button/button'
import './CardNew.css'

const CardNew = () => {
  return (
    <>
    <div className="NewCard">
    <div className="cardAppoint Card">
            <div className="cardTop">
                <div className="LeftCard">
                <h2 className="date">12 May 2022</h2>
                <p className="time">16:00-17:25</p>
                <h1 className="approved"><span className="by">Approved By : </span>Name of the counsellor</h1>
                </div>
                <div className="RightCard">
                    <p className="tag">Type</p>
                </div>
                </div>
                <p className="request">Request :</p>
                <p className="requestDes">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, hic perspiciatis impedit quaerat asperiores aperiam minima, eius quod, molestiae voluptas sint numquam earum. Sint ut architecto repudiandae animi voluptas aut!
                </p>
            <div className="buttons">
            <div className="accept">
            <Button buttonStyle="btn-normal">Accept</Button>
            </div>
            <div className="reject">
            <Button buttonStyle="btn-normal">Reject</Button>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CardNew