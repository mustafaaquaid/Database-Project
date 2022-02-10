import React from 'react';
import './Home.css';
import Header from './Components/Header.js';
import Block from './Components/middle_block.js'
import { useState } from 'react';
import sm from './safety_measures.jpg';
import nt from './next_trip.jpg';
import flexibility from './flexibility.jpg';
import comfy from './comfy.jpg';
import Footer from './Components/Footer.js';


function Home() {
  const [choosen_one, stateName] = useState('My_Trip');
  const For_My_Trip= 'My_Trip';
  const for_Check_in= 'Check_in';
  const for_Flight_Status= 'Flight_Status';
  
  const handleClick1 = () => {
    stateName(For_My_Trip);
  }

  function handleClick2(){
    stateName(for_Check_in);
  }
  
  function handleClick3(){
    stateName(for_Flight_Status);
  }

  return <div className='Home_Body'>
    <div className='black_shade'>
      <Header />
      <div className='part1'>
      <p>Guaranteed flexibility to over</p>
        <p>140 Destinations</p>
        <div className='part1_span'><span>Fares From PKR 67,400</span></div>
        <div className='part1_a'><a href='/BookNow'>Book now</a></div>
      </div>
      <div className='Lists'>
        <ul className='List_part1'>
          <li className='My_Trip'><a href='#' onClick={handleClick1}>My Trips</a></li>
          <li className='Check_in'><a href='#'onClick={handleClick2}>Check-in</a></li>
          <li className='Flight_Status'><a href='#' onClick={handleClick3}>Flight Status</a></li>
        </ul>
      </div>
      <div className='Lists_Connected'>
        <Block name={choosen_one}/>
      </div>
      <div className='last_part'>
        <h2>Travel safely with us</h2>
        <span>As one of the largest and most experienced global airlines throughout the COVID-19 crisis, you can rely on us to take you on your next journey safely.</span>
        <br></br>
        <div className='lp_1'>
        <img src={sm} alt="Safety measures PIC"></img>
          <p>Safety measures</p>
        </div>
        <div className='lp_2'>
        <img src={nt} alt="Next Trip PIC"></img>
        <p>Plan your next trip</p>
        </div>
        <div className='lp_3'>
        <img src={flexibility} alt="flexibility PIC"></img>
        <p>Guaranteed flexibility</p>
        </div>
        <div className='lp_4'>
        <img src={comfy} alt="Safety measures PIC"></img>
        <p> !----------! </p>
        </div>
        <br></br>
      </div>
      <div className='home_footer'>
        <Footer />
      </div>
    </div>
  </div>
  ;
}

export default Home;

