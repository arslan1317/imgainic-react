import React from 'react'

const About = () => {
  return (
    <section class="about-section bg-color" id="about">
         <div class="container-fluid">
            <div class="row">
               <div class="col-lg-6 p-0">
                  <div class="about-image">
                     <img src="img/about/about-2.jpg" alt="image"/>
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="about-tab">
                     <h2>About Us</h2>
                     <div class="bar"></div>
                     <p>With extraordinary tech talent of web and mobile platforms, we fulfill the gap between the inventive ideas and technology world with excellent UI/UX layout. At Imaginic, we also offer a wide range of solutions, logo designing, website maintenance, and a lot more.</p>
                     <div class="tab about-list-tab">
                        <ul class="tabs">
                           <li>
                              <a href="#">
                              Our History
                              </a>
                           </li>
                           <li>
                              <a href="#">
                              Our Mission
                              </a>
                           </li>
                        </ul>
                        <div class="tab_content">
                           <div class="tabs_item">
                              <ul class="list">
                                 <li>
                                    <i class="flaticon-tick"></i>
                                    Delivered Quality Web Apps
                                 </li>
                                 <li>
                                    <i class="flaticon-tick"></i>
                                    Software Maintainance
                                 </li>
                                 <li>
                                    <i class="flaticon-tick"></i>
                                    Product Marketing
                                 </li>
                                 <li>
                                    <i class="flaticon-tick"></i>
                                    24/7 Support
                                 </li>
                                 <li>
                                    <i class="flaticon-tick"></i>
                                    Listen To Changes
                                 </li>
                              </ul>
                              <p>Fulfilling core requirements and business logic, while meeting deadlines is our history. We ran multiple tests on our product to ensure our customers will get fully optimized and ready to use applications.</p>
                              
                           </div>
                           <div class="tabs_item">
                              <ul class="list">
                                 <li>
                                    <i class="flaticon-tick"></i>
                                    Quality Softwares
                                 </li>
                                 <li>
                                    <i class="flaticon-tick"></i>
                                    Fast Track Your Business
                                 </li>
                                 <li>
                                    <i class="flaticon-tick"></i>
                                    Creative Web And Mobile Apps
                                 </li>
                                 <li>
                                    <i class="flaticon-tick"></i>
                                    Your Business Marketing
                                 </li>
                                 <li>
                                    <i class="flaticon-tick"></i>
                                    Fulfill Customer Needs
                                 </li>
                              </ul>
                              <p>Delivering high-quality, optimize software with all business requirements great UI/UX layout is one of our core mission. We ensure that our customers will get full support, maintenance while working with us.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  )
}

export default About
