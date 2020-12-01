import React from 'react'

const Testimonials = () => {
  return (
    <section class="clients-section pb-100 pt-100" id="testimonial">
         <div class="container">
            <div class="section-title">
               <h2>What <span>Clients</span> Say <span>About</span> Us</h2>
               <p>We received an excellent response from all our customer's and they are the actual reasons for our strengths. We want to thank them all for their support and love.</p>
               <div class="bar"></div>
            </div>
            <div class="clients-slider owl-carousel owl-theme">
               <div class="clients-item">
                  <div class="icon">
                     <i class="flaticon-left-quotes-sign"></i>
                  </div>
                  <p>The app is fully optimized and user friendly, with great color combination and UI/UX. My customers love this app and I have received great feedback from their side. I am very satisfied with the services of Imaginic, management is so helpful and they listen to my changes frequently. I wish them very good luck for their upcoming future.</p>
                  <div class="clients-content">
                     <h3>Moris Jacker</h3>
                  </div>
               </div>
               <div class="clients-item">
                  <div class="icon">
                     <i class="flaticon-left-quotes-sign"></i>
                  </div>
                  <p>The website was completed by Imaginic following all my requirements. It is user friendly and they delivered the whole deployed website. Management is supportive and they listen to change requirements. My customers are just loving the website. They are very competent and have done a great job.</p>
                  <div class="clients-content">
                     <h3>Alex Maxwel</h3>
                  </div>
               </div>
               <div class="clients-item">
                  <div class="icon">
                     <i class="flaticon-left-quotes-sign"></i>
                  </div>
                 <p>We have been dealing with Imaginic to develop an application over the last few months. The team has been reliable and give builds on time. We received a great response and a detailed description of the product.</p>
                  <div class="clients-content">
                     <h3>Edmond Halley</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
  )
}

export default Testimonials
