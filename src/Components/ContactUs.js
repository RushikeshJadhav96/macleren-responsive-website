import React from "react";
import "../CSS/Contact.css";
import TextField from "@mui/material/TextField";

function ContactUs() {
  return (
    <div>
      <div className="Contact">
        <div className="ContactDetails">
          <h1 className="contactheading">Contact Us</h1>
          <div>
            <h6>Phone Number</h6>
            <p>+91 8376273672</p>
          </div>

          <div>
            <h6>Email Address</h6>
            <p>xyz@gmail.com</p>
          </div>

          
        </div>

        <div className="contactform">
          <h6>Contact Form</h6>
          <TextField id="outlined-basic" label="Full Name" variant="outlined"  className="fullname"/>
          <br /><br />
          <TextField id="outlined-basic" label="Email ID" variant="outlined" className="emailID" />
          <br /><br ></br>
          <TextField
            id="outlined-multiline-static"
            label="Type your Message Here"
            multiline
            rows={4}
            defaultValue="Default Value"
            className="TextFeild"
          /><br></br><br/>
          <button type="button" class="btn btn-primary Contactbtn">Submit</button>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;
