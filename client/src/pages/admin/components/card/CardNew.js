import React, {useState} from 'react'
import Button from '../../../../Components/button/button'
import './CardNew.css'
import { useNavigate, Link } from "react-router-dom"

const CardNew = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <>
    <div className="NewCard">
    <div className="cardAppoint Card">
            <div className="cardTop">
                <div className="LeftCard">
                <h2 className="date">12 May 2022</h2>
                <p className="time">16:00-17:25</p>
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
            <div className="assignTo">
              <p className="assign">Assigned To:</p>
              <form action="">
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="submit" value="Send" />
              </form>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CardNew