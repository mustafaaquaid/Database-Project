import React from 'react'
import './BookingForm.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useParams } from 'react-router-dom';

function BookingForm(props) {
  const prams = useParams();
  return (
    <div className='Formpage_body'>
        <Header />
        <div className='ticket_booking'>
            <div className='Flight_details'>
                <div className='fromTo'>
                <p><span>From: </span><i>{ prams.from }</i></p>
                <p><span>To:   </span><i>{ prams.to }</i></p>
                </div>
                <div className='rem_details'>
                <p><span>Class: </span><i>{ prams.class }</i></p>
                <p><span>Fare:  </span><i>{ prams.fare }</i></p>
                </div>
            </div>
            <form>
                <input type="text" name="fName"  id="fName" placeholder="First Name"></input>
                <input type="text" name="lName"  id="lName" placeholder="Last Name"></input> <br></br>
                <input type="text" name="passportNo"  id="passportNo" placeholder="passportNo"></input>
                <input type="text" name="Age"  id="Age" placeholder="Age"></input> <br></br>
                <input type="submit" value="Book Now" id="bookIt"></input>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default BookingForm;