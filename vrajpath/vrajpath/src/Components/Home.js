import React from 'react'
import "./style.css"

import middle from "./images/circle.svg"
import cir from "./images/circ.png"
import half from "./images/half.png"
import line from "./images/linebold.png"
import facebook from "./images/facebook.svg"
import map from "./images/map.png"
import first from "./images/client.png"
import second from "./images/path2983.svg"
import third from "./images/Rectangle.svg"
import fourth from "./images/cli2.svg"
import insta from "./images/instagram.svg"
import lkd from "./images/linkedin.svg"
import utube from "./images/youtube.svg"
import twitter from "./images/twitter.svg"



const Home = () => {
  return (
   <>
    <div class="container mt-8">
    <div class="jumbotron ">
      <p class="lead text-center" id='co' ><strong id='col'>COLLABORATION</strong> <br /> for Productive <strong id='col'>Integrated Solutions</strong></p>
      {/* <h1 class="display-4 text-center"></h1> */}
    </div>
  </div>
   


  <div class="text-center">
  <img src={middle} class="rounded" alt=""/>
</div>
   


















   
 


    
  <div class="text-center">

  <img id='first' src={cir} class="rounded" alt=""/>
  
{/* DIFFERENT COLUMS FOR SOCIAL ICON  */}
<div className="cont">
<ul>
<li><img  src={facebook} alt="" /> </li>
  <li><img  src={insta} alt="" /> </li>
 

<li><img  src={lkd} alt="" /> </li>


<li><img  src={utube} alt="" /> </li>

<li><img  src={twitter} alt="" /> </li>
 
</ul>

</div>



</div>  

<div id="second">
    
    <div class="text-center">
    <img src={half} class="rounded" alt=""/>
   
  </div>
  </div> 

  <div class="text-center">
    
    <hr />
  </div>



  <div class="container">
      <div class="row">
          <div class="col-md-4 text-center">
            <h2 id='bigger'>45+</h2>
     <p>Growing Businesses <br /> With us</p>
          </div>
          <div class="col-md-4 text-center">
              
            <h2 id='bigger2'>68+</h2>
            <p class=" pr">Project Delivered <br />On Time</p>
          </div>
          <div class="col-md-4 text-center">
              
            <h2 id='bigger3'>120+</h2>
      <p>Indian & Abroad <br /> Clients Coverage</p>
          </div>
        </div>
        </div>


        <div class="container mt-8">
    <div class="jumbotron ">
      <p class="lead text-center"  >Continue To</p>
      <h1 class="display-4 text-center"><strong>Grow With Technology</strong></h1>
    </div>
  </div>

  <div class="text-center">
  <img id='round' src={line} class="rounded" alt=""/>
  
</div>


{/* FLEX BOX FOR THE CONTENT  */}






<div id='sec1' class="d-flex text-center">
  <div class="p-2 flex-fill"><h2>Facility Support</h2>
  <div id='alig'><h2>in industry </h2></div>
  <div id='alig1'><h2>Growth </h2></div>
  
  
  
  
  
  </div>
 

  <div class="p-2 flex-fill">

  <div className='te'> Everyone's needs are different. That's why, from the </div>
  <div className='te'> moment you will get connect with us , it will become</div>
   <div className='te'> easier to know you and your requirements personally,</div>
    <div className='te'> providing smart, easy solutions for your business to </div>
    <div className='te'>  boost development and success in industry.</div>



  </div>

</div>


<div id='sec' class="d-flex text-center mt-9">
  <div class="p-2 flex-fill"><h2>More And Better  </h2>
  <div id='alig'><h2>Services and </h2></div>
  <div id='alig1'><h2>Solutions </h2></div>
  
  
  
  
  
  </div>
 

  <div class="p-2 flex-fill ">

  <div className='te'> We know there are times when you may want   </div>
  <div className='te'> additional help to upgrade your business. So we made</div>
   <div className='te'> it easy for you in terms with better services and</div>
    <div className='te'> solutions for your successful business.  </div>
  </div>
</div>


<div id='sec' class="text-center">
  <h2>OUR <strong>CLIENTS</strong></h2>
  
</div>

<div  class="text-center">

<div class="card-group" id='backc'>
  <div class="card" id='backc'>
  <img id='backcin'  src={first} class="rounded" alt=""/>
 
  </div>
  <div class="card" id='backc'>
    <img id='backco' src={second} class="card-img-top" alt="..."/>
    
  </div>
  <div class="card" id='backc'>
    <img id='backc' src={third} class="card-img-top" alt="..."/>
  
  </div>
  <div class="card" id='backc'>
    <img id='backc' src={fourth} class="card-img-top" alt="..."/>
  
  </div>
</div>
</div>

<div id='ti' class="text-center">
<p>“Majority of the companies are outsourcing their development work to other IT <br /> companies so that they can focus on business. We have a strong development team <br /> who do it on contract basis.”</p>
  
</div>

<div id='sec' class="text-center">
  <h2> <strong>ANKIT KUMAR SHARMA</strong> <br /></h2>
  <p id='fond'>FOUNDER OF VRAJPATH</p> 
  
</div>


{/* MESSAGE  */}

<div class="d-flex">
  <div class="p-2 w-100">
  <img id='map' src={map} class="rounded" alt=""/>
  </div>
  <div id='cont' class="p-2 flex-shrink-1">
    <h1>Contact. <br /> Get in touch</h1>

    <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name*</label>
    <input type="text" class="form-control" id="inputEmail4" required/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Email*</label>
    <input type="email" class="form-control" id="inputEmail4" required/>
  </div>

  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" required rows="3"></textarea>
</div>


  <div class="col-12">
    <button type="submit" class="btn btn-dark">Send a Message</button>
  </div>
</form>
  </div>
</div>






















   
   </>
  )
}

export default Home
