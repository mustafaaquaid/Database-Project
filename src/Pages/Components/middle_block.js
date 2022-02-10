import React from 'react';
import'./middle_block.css';

function middle_block(props) {
  if(props.name === "Check_in")
  {
    return <div>
        <h3>Check Your Ticket</h3>
        <div className='C_in'>
        <form>
        <div className='Input_field'>
            <input type="text" name="cnic"  id="cnic" placeholder="Enter CNIC"></input>
            <input type="text" name="lname"  id="lname" placeholder="Last Name"></input>
          </div>
          <div className='submit_button'>
            <input type="submit" value="Check-in" id="submit"></input>
          </div>
          </form>
        </div>
    </div>;
  }
  else if(props.name === "Flight_Status")
  {
    return <div>
        <h3>Search for DHA Suffa Airways Flight Status</h3>
        <div className='F_status'>
        <form>
          <div className='Input_field'>
            <input type="text" name="from"  id="from" placeholder="From"></input>
            <input type="text" name="to"  id="to" placeholder="To"></input>
            </div>
            <div className='submit_button'>
              <input type="submit" value="Search Flight" id="submit"></input>
            </div>
          </form>
        </div>
    </div>;
  }
  else
  {
    return <div>
        <h3>Your previous and upcoming trips record</h3>
        <div className='M_trip'>
          <form>
          <div className='Input_field'>
            <input type="text" name="cnic"  id="cnic" placeholder="Enter CNIC"></input>
            <input type="text" name="lname"  id="lname" placeholder="Last Name"></input>
          </div>
          <div className='submit_button'>
            <input type="submit" value="Retrive Record" id="submit"></input>
          </div>
          </form>
        </div>
    </div>;
  }
}

export default middle_block;
