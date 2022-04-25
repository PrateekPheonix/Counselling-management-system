import React from 'react'
import './card.css'

const Card = ({ upcoming }) => {
  return (
    <>
    <div className="Card">
    <div className="cardAppoint cardUpcoming">
            <div className="cardTop">
                <div className="cardLeft">
                <h2 className="date">12 May 2022</h2>
                <p className="time">16:00-17:25</p>
                <h1 className="approved"><span className="by">Requested By :</span>Name of the counsellor</h1>
                </div>
                <div className="cardRight">
                    <p className="tag">Type</p>
                </div>
                </div>
                <p className="request">Request :</p>
                <p className="requestDes">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, hic perspiciatis impedit quaerat asperiores aperiam minima, eius quod, molestiae voluptas sint numquam earum. Sint ut architecto repudiandae animi voluptas aut!
                </p>
        </div>
    </div>
    </>
  )
}

export default Card