import React, { Component, useState } from "react";
import Button from "../../Components/button/button";
import './book.css'
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom"
import DateTimePicker from 'react-datetime-picker';

const Book = () => {
  return (
    <>
    <div className="bookAppoint">
        <form>
            <h1>Enter Details</h1>
            <div className="datetime">
                <DateTimePicker calendarAriaLabel="Toggle calendar"/>
            </div>
        </form>
    </div>
    </>
  )
}

export default Book