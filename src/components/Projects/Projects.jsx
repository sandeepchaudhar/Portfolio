import React from 'react'
import Card from '../Card/Card'
import "./Projects.css" 
import  recomnd from "../../assets/recomnd.png"
import  sorting from "../../assets/sorting.png"
import  va from "../../assets/va.png"
import   AI from "../../assets/AI.png"
import   car from "../../assets/car.png"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Projects() {
useGSAP(()=>{
  gsap.from("#para",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:"#para",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
  gsap.from(".slider",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".slider",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
   
})




 
  return (
    <div id='projects' >
      <h1 id='para'>2+ YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        <Card title="MOVIE RECOMMENDATION SYSTEM" image={recomnd}/>
        <Card title="VIRTUAL ASSISTANT" image={va}/>
        <Card title="SORTING ALGORITHM" image={sorting}/>
        <Card title="AI CHATBOT" image={AI}/>
        <Card title="CAR PRICE PREDICTION" image={car}/>

        </div>
      </div>

       
  )
}
export default Projects
