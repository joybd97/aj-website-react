import React from 'react';


const Contact = () => {
    return (
        <div>
        <h1 className='products'>Contact Us</h1>
        <section className="space-top space-extra-bottom">
        <div className="container">

           <div className="tab-content" id="nav-contactTabContent">
              <div className="tab-pane fade show active" id="nav-GermanyAddress" role="tabpanel" aria-labelledby="nav-GermanyAddress-tab">
                 <div className="row">
                    <div className="col-lg-12 mb-30">
                       <div className="contact-box contact-info">
                          <h3 className="contact-box__title h4">Office Address</h3>
                          <p className="contact-box__text">Visit our office or Communicate with us</p>
                          <div className="contact-box__item">
                             <div className="contact-box__icon"></div>
                             <div className="media-body">
                                <h4 className="contact-box__label">Phone Number & Email</h4>
                                <p className="contact-box__info">+8801925776767<br/> +8801670070222<a href="mailto:info@ajassociates.cloud">info@ajassociates.cloud</a></p>
                             </div>
                          </div>
                          <div className="contact-box__item">
                             <div className="contact-box__icon"></div>
                             <div className="media-body">
                                <h4 className="contact-box__label">Our Office Address</h4>
                                <p className="contact-box__info">House-7, Road-5, Block-I, Flat-5A
                                Banani, Dhaka-1213 <br/> Dhaka-1213</p>
                             </div>
                          </div>
                          <div className="contact-box__item">
                             <div className="contact-box__icon"></div>
                             <div className="media-body">
                                <h4 className="contact-box__label">Official Work Time</h4>
                                <p className="contact-box__info">9:00am - 6:00pm ( Sun - Thu ) <br/> Fri, Sat & Holiday Closed</p>
                             </div>
                          </div>
                          <div className="contact-box__item">
                             <div className="contact-box__icon"></div>
                             <div className="media-body">
                                <h4 className="contact-box__label"> <h4>On Google Map</h4></h4>
                                <div className="footer-map"><iframe title="office location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.839386900228!2d90.40261721478487!3d23.788733084570467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70d9b5b78dd%3A0xe938d0652ca2e4a4!2sBANANI%20SOCIETY!5e0!3m2!1sen!2sbd!4v1656997279582!5m2!1sen!2sbd" width="600" height="400" loading="lazy"></iframe></div>
                             </div>
                          </div>
                       </div>
                    </div>
                    
                 </div>
              </div>
           </div>
        </div>
     </section>
      

        </div>
    );
};

export default Contact;