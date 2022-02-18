import './FormCSs.css'
import Popup from "reactjs-popup";
import Card from "../Card/Card";
import {useState} from "react";
import './ProgressButton.css'
import ProgressButton from "react-progress-button";
import {useNavigate} from "react-router-dom";


const Form = () => {

const navigate = useNavigate();
const handleClick =  () => {
       const promise = new Promise(function(resolve, reject) {
           setTimeout(resolve, 3000)

       })
    setTimeout(() => navigate("/"), 4000)
    return promise
}

    return (
    <div className='form-section'>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Enter your name"/>
        <label htmlFor="email">Email</label>
        <input type="text" name="name" placeholder="Enter your email"/>
        <label htmlFor="message">Message</label>
        <textarea maxLength="200" name="message" placeholder="Send a message!" />
        <ProgressButton onClick={handleClick}>Send</ProgressButton>
    </div>
    )}

export default Form