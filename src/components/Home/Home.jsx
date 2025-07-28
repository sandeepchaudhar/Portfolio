// Home.jsx
import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { TypeAnimation } from "react-type-animation";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
 function Home() {

useGSAP(()=>{
  let tl1=gsap.timeline();
  tl1.from(".line1",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line2",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line3",{
    y:80,
    duration:1,
    opacity:0
  })
  gsap.from(".righthome img",{
    x:200,
    duration:1,
    opacity:0
  })
})
  return (
    <div id='home'>
       <div className="lefthome">
        <div className="homedetails">
            <div className="line1">I'M</div>
             <div className="line2">SANDEEP CHAUDAHRY</div>
              <div className="line3"> 
              <TypeAnimation
  sequence={[
    "WEB DEVELOPER",
    1000,
    "SOFTWARE DEVELOPER",
    1000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>



</div>
 <a href="/sandeep_chaudahry_cv.pdf" target="_blank" rel="noopener noreferrer">
  <button className="hire-btn">HIRE ME</button>
</a>



</div> 
</div> 
        <div className="righthome">
 <img src={man} alt=''/>

        </div>



    </div>
  )
}

export default Home
