import React from 'react'

const Navbar = () => {
  return (
    <div class="navbar-area navbar-two">
         <div class="fria-responsive-nav">
            <div class="container">
               <div class="fria-responsive-menu">
                  <div class="logo">
                     <a class="navbar-brand" href="#">
                        <i class="fas fa-project-diagram"></i><p> <span class="imagnic">Imaginic</span> <br/> <span class="solution">Solution</span></p>
                     </a>
                  </div>
               </div>
            </div>s
         </div>
         <div class="fria-nav">
            <div class="container">
               <nav class="navbar navbar-expand-md navbar-light">
                  <a class="navbar-brand" href="#">
                     <i class="fas fa-project-diagram"></i><p> <span class="imagnic">Imaginic</span> <br/> <span class="solution">Solution</span></p>
                  </a>
                  <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                     <ul class="navbar-nav" id="top-menu">
                        <li class="nav-item">
                           <a href="#home" class="nav-link scroll">Home</a>
                        </li>
                        <li class="nav-item">
                           <a href="#about" class="nav-link scroll">About</a>
                        </li>
                        <li class="nav-item">
                           <a href="#services" class="nav-link scroll">Services</a>
                        </li>
                        <li class="nav-item">
                           <a href="#portfolio" class="nav-link scroll">Portfolio </a>
                        </li>
                        <li class="nav-item">
                           <a href="#success" class="nav-link scroll">Projects </a>
                        </li>
                        <li class="nav-item">
                           <a href="#pricing" class="nav-link scroll">Pricing </a>
                        </li>
                        <li class="nav-item">
                           <a href="#testimonial" class="nav-link scroll">Testimonial</a>
                        </li>
                        <li class="nav-item">
                           <a href="#contact" class="nav-link scroll">Contact</a>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
         </div>
      </div>
  )
}

export default Navbar
