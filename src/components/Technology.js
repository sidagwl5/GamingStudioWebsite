import React, { Component } from 'react'

export default class Technology extends Component {
  render() {
    return (
      <div className = "technology-main">

          <h1>Technologies used</h1>
           
           <div data-aos = "fade-right" className = "technology-submain">

               <div className = "technology-part">
                   <img src = "https://www.stickpng.com/assets/images/584830e8cef1014c0b5e4aa0.png" />
               </div>
               
               <div className = "technology-part">
                   <img src = "https://upload.wikimedia.org/wikipedia/commons/8/8a/Official_unity_logo.png" /> 
               </div>

               <div className = "technology-part">
                   <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Unreal_Engine_Logo.svg/1200px-Unreal_Engine_Logo.svg.png" />
               </div>

               <div className = "technology-part">
                   <img src = "https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/prjhmvsxpnmbwzc2so3z" />
               </div>
             
           </div>    
      </div>
    )
  }
}
