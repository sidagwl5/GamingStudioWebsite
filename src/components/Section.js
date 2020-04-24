import React, { Component } from 'react'
import * as navigate from "./navigate";
import {Link} from "react-scroll";

export default class Section extends Component {
  render() {
    return (
      <div className = "section-main">
        
          <div className = "section-submain1">

              <div>
              </div>

              <div>
              </div>

              <div>
              </div>

              <div>
              </div>

              <div>            
              </div>    
          </div>

          <div className = "section-submain2">

              <h1 className = "content rellax" data-rellax-speed = "3"> <span>za</span> studio</h1>
              <span data-rellax-speed = "2" className = "whiteLine rellax"></span>
              <p className = "content rellax" data-rellax-speed = "1">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>

              <navigate.Link style = {{border : "1px white solid"}} className = "link animated infinite heartBeat delay-1s" to = ""><button>explore</button></navigate.Link>
          </div>  

          <div className = "section-submain3">
              
              <div className = "section-part1">
              <Link className = "link" to = "about-main" duration = {1000} smooth><button>About</button></Link>
              <Link className = "link" to = "contact-main" duration = {1000} smooth><button>Contact</button></Link>
              <Link className = "link" to = "technology-main" duration = {1000} smooth><button>technology</button></Link>
              <Link className = "link"  duration = {1000} smooth><button>Games</button></Link>
              </div>
  
          </div>        
      </div>
    )
  }
}
