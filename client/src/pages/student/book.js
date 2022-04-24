import React, { Component, useState } from "react";
import Button from "../../Components/button/button";
import './book.css'
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom"
import DateTimePicker from 'react-datetime-picker';

const Book = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
    <div className="bookppoint">
        <form>
            <h1>Enter Details</h1>
            <div className="datetime">
              <h2>Select Date & Time : </h2>
            <DateTimePicker onChange={onChange} value={value} calendarIcon="Pick Date" yearPlaceholder="yyyy" monthPlaceholder="mm" dayPlaceholder="dd"/>
            </div>
            <div className="description">
              <h2 className="reason">Describe the reason breifly: </h2>
              <input type="p" name="Description" id="Description" />
            </div>
            <div className="submitButton">
              <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
    </>
  )
}

export default Book