import React from 'react'

const Footer = () => {
  return (
    <section class="footer-section pt-100 pb-70">
      <div class="container">
       <div class="subscribe-area">
          <div class="row align-items-center">
             <div class="col-lg-6 col-md-6">
                <div class="subscribe-content">
                   <h2>Join Our Newsletter</h2>
                   <p>Subscribe to our newsletter to get our latest news, discounts, product details and much more.</p>
                </div>
             </div>
             <div class="col-lg-6 col-md-6">
                <form class="newsletter-form">
                   <input type="email" class="input-newsletter" placeholder="Enter your email" name="EMAIL" required autocomplete="off"/>
                   <button type="submit">
                   Subscribe Now
                   </button>
                   <div id="validator-newsletter" class="form-result"></div>
                </form>
             </div>
          </div>
       </div>
       <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
             <div class="single-footer-widget">
                <div class="footer-heading">
                   <h3>About Us</h3>
                </div>
                <p>We ensure to fulfill the gap between ideas and the technology world. At Imaginic, you will get extremely scalable, optimize mobile and web apps for all your business needs.</p>
                <ul class="footer-social">
                   <li>
                      <a href="https://www.facebook.com/imaginicsolution">
                      <i class="flaticon-facebook"></i>
                      </a>
                   </li>
                   <li>
                      <a href="#">
                      <i class="flaticon-twitter"></i>
                      </a>
                   </li>
                   <li>
                      <a href="#">
                      <i class="flaticon-pinterest"></i>
                      </a>
                   </li>
                   <li>
                      <a href="#">
                      <i class="flaticon-instagram"></i>
                      </a>
                   </li>
                </ul>
             </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
             <div class="single-footer-widget">
                <div class="footer-heading">
                   <h3>Menu</h3>
                </div>
                <ul class="footer-quick-links">
                   <li>
                      <a href="#home" class="scroll">Home</a>
                   </li>
                   <li>
                      <a href="#about" class="scroll">About</a>
                   </li>
                   <li>
                      <a href="#services" class="scroll">Services</a>
                   </li>
                   <li>
                      <a href="#portfolio" class="scroll">Portfolio </a>
                   </li>
                   <li>
                      <a href="#pricing" class="scroll">Pricing </a>
                   </li>
                   <li>
                      <a href="#testimonial" class="scroll">Testimonial</a>
                   </li>
                   <li>
                      <a href="#contact" class="scroll">Contact</a>
                   </li>
                </ul>
             </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
             <div class="single-footer-widget">
                <div class="footer-heading">
                   <h3>Contact</h3>
                </div>
                <div class="footer-info-contact">
                   <i class="flaticon-phone-call"></i>
                   <h3>Phone</h3>
                   <span><a href="https://wa.me/00447438964535?text=I'm%20interested%20in%20your%20services" target="_blank">0044-7438-964535</a></span>
                </div>
                <div class="footer-info-contact">
                   <i class="flaticon-envelope"></i>
                   <h3>Email</h3>
                   <span><a href="mailto:info@imaginic-solution.com?subject=Imaginic Solution" target="_blank">info@imaginic-solution.com</a></span>
                </div>
                <div class="footer-info-contact">
                   <i class="flaticon-pin"></i>
                   <h3>Address</h3>
                   <span>32 st Kilda Road, Melbourne VIC, 3004 Australia</span>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div class="lines">
       <div class="line"></div>
       <div class="line"></div>
       <div class="line"></div>
    </div>
 </section>
  )
}

export default Footer
