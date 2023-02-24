import React from 'react'
import "./style.css"
import service3 from "./images/service3.png"
import micservice from  "./images/micservices.png"
import comser from  "./images/comservice.png"
import { motion } from "framer-motion"

export const MyComponent = ({ isVisible }) => (
    <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
)



const Services = () => {
  return (
   <>
   
   <div class="container mt-8">
    <div class="jumbotron ">
     <h1 > <p class="lead text-center" id='ser' ><strong>make</strong></p></h1>
    </div>
  </div>


  <div class="card-group">
  <div class="card">
  <img id='ser1'  src={comser} class="rounded" alt=""/>
    <div class="card-body" id='whiteback'>
      <h5 class="card-title" id='whiteback'> <strong id='whiteback'>  Mobile and Web <br />Application Development</strong></h5>
      <p class="card-text" id='whiteback'>Trusted provider of custom mobile and web application development services, delivering cutting-edge solutions to clients across industries.</p>
      <p class="card-text" ><small class="text-muted"></small></p>
    </div>
  </div>
  <div class="card">
     <img id='ser1' src={micservice} class="rounded" alt=""/>
    <div class="card-body" id='whiteback'>
      <h5 class="card-title" id='whiteback'><strong id='whiteback'> Business Development <br /> And Digital Marketing</strong></h5>
      <p class="card-text" id='whiteback'>comprehensive services designed to help clients achieve their growth goals. With a focus on effective strategies and innovative solutions.</p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
  <div class="card">
     <img id='ser1' src={service3} class="rounded" alt=""/>
    <div class="card-body" id='whiteback'>
      <h5 class="card-title" id='whiteback'><strong id='whiteback'>Quality assurance and <br /> Security Audits</strong></h5>
      <p class="card-text" id='whiteback'>Expert quality assurance and security audits for reliable and secure systems. we deliver comprehensive assessments to guarantee the safety.</p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
</div>
   
   
   
   
   
   
   
   
   </>
  )
}

export default Services
