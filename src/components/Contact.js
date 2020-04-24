import React, { Component } from 'react'
import video from "../My Video26.mp4"
import ReactPlayer from "react-player";

export default class Contact extends Component {
  render() {
    return (
      <div className = "contact-main">

        <div data-aos = "fade-right" className = "contact-submain1">

               <div className = "contact-part1">
               </div> 

               <div className = "contact-part2">

                 <h1>Contact <span style = {{color : "orange"}}>us</span></h1>

                 <div>
                 <label for = "email">Email: </label>
                 <input type = "text" id = "email" placeholder = "Enter email.." />
                 </div>

                 <div>
                 <label for = "name">Name: </label>
                 <input type = "text" id = "name" placeholder = "Enter your name.." />
                 </div>

                 <div>
                 <label for = "subject">Subject: </label>
                 <input type = "text" id = "subject" placeholder = "Enter subject.." />
                 </div>

                 <div>
                 <label for = "phone">Phone: </label>
                 <input type = "number" id = "phone" placeholder = "Enter phone number...." />
                 </div>

                 <div>
                 <label for = "message">Message: </label>
                 <textarea type = "text" id = "message" placeholder = "Enter body" />
                 </div>

                 <button>Send</button>
               </div>   
     
        </div>
      </div>
    )
  }
}
