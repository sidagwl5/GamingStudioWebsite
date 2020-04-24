import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className = "about-main">
         
         <div data-aos = "fade-right" className = "about-submain1">

             <div className = "about-part1">

                 <h1>about us</h1>
                 <p>
                 ZA Studio is mobile app and game development company that offers development and publishing solutions from concept, 
                 development to app discovery. We have worked on diverse projects with a global customer base.
                 Offering over 50 million global user base and years of experience across all major platforms including iOS, 
                 Android, Amazon, Facebook, Web and PC etc. We are a trusted partner for top tier mobile studios from around the world.
                 </p>
             </div>    

             <div className = "about-part2">
                 <img src = "https://twinfinite.net/wp-content/uploads/2018/08/Devil-May-Cry.jpg" />
             </div>

         </div>

      </div>
    )
  }
}
