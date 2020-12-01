import React from 'react'

const Clients = () => {
  return (
    <section class="contact-section pb-100 pt-100" id="contact">
            <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-12">
                     <div class="section-title text-center">
                         <h2>Contact Us</h2>
                         <p>If you have any queries regarding your project or anything feel free to ask. We would love to hear from your side and reply to you as soon as possible.</p>
                         <div class="bar"></div>
                     </div>
                  </div>
                    <div class="col-lg-6">
                        <div class="contact-form">
                            <form id="contactForm">
                                <div class="form-group">
                                    <input type="text" name="name" id="name" class="form-control" required data-error="Please enter your name" placeholder="Name"/>
                                    <div class="help-block with-errors"></div>
                                </div>
                                
                                <div class="form-group">
                                    <input type="email" name="email" id="email" class="form-control" required data-error="Please enter your email" placeholder="Your Email"/>
                                    <div class="help-block with-errors"></div>
                                </div>

                                <div class="form-group">
                                 <input type="text" name="phone" id="phone" class="form-control" required data-error="Please enter your number or skype id" placeholder="Phone Number / Skype Id"/>
                                 <div class="help-block with-errors"></div>
                                 </div>
                                
                                <div class="form-group">
                                    <input type="text" name="msg_subject" id="msg_subject" class="form-control" placeholder="Your Subject"/>
                                </div>
                               
                                <div class="form-group">
                                    <textarea name="message" class="form-control" id="message" cols="30" rows="6" required data-error="Write your message" placeholder="Your Message"></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>

                                <div class="form-group">
                                    <label>Feel Free to Attach your Requirements</label><br/>
                                    <input type="file" name="file" id="file"/>
                                </div>

                                <div class="send-btn">
                                    <button type="submit" class="default-btn">
                                        Send Message
                                    </button>
                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                    <div class="clearfix"></div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="contact-image">
                            <img src="img/contact.png" alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Clients
