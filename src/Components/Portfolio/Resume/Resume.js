import React from 'react'

export default function Index() {
  return (
    <div>
            {/* FEATURES */}
            <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12">
                        <h2 className="mb-4">Experiences</h2>



                        <div className="timeline">
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                        <span> <img className='icon-expe' src="./frontend/images/logo.jpg"  alt="svg image"/>   </span>
                                </div>
                                <div className="timeline-info">
                                        <h3><span>Project Manager</span><small>Best Studio</small></h3>
                                        <p>Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.</p>
                                </div>
                            </div>

                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span><img className='icon-expe' src="./frontend/img/web.png"  alt="svg image"/></span>
                                </div>
                                <div className="timeline-info">
                                    <h3><span>UX Designer</span><small>Digital Ace</small></h3>
                                    <p>Fusce rutrum augue id orci rhoncus molestie. Nunc auctor dignissim lacus vel iaculis.</p>
                                </div>
                            </div>

                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2016</span>
                                </div>
                                <div className="timeline-info">
                                    <h3>UI Freelancer</h3>
                                    <p>Sed fringilla vitae enim sit amet cursus. Sed cursus dictum tortor quis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                </div>
                            </div>
                            
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2014</span>
                                </div>
                                <div className="timeline-info">
                                    <h3>Junior Designer<small>Crafted Co.</small></h3>
                                    <p>Cras scelerisque scelerisque condimentum. Nullam at volutpat mi. Nunc auctor ipsum eget magna consequat viverra.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <h2 className="mb-4 mobile-mt-2">Educations</h2>

                        <div className="timeline">
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                        <span>2017</span>
                                </div>
                                <div className="timeline-info">
                                        <h3><span>Mobile Web</span><small>Master Design</small></h3>
                                        <p>Please tell your friends about Tooplate website. That would be very helpful. We need your support.</p>
                                </div>
                            </div>

                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2015</span>
                                </div>
                                <div className="timeline-info">
                                    <h3><span>User Interfaces</span><small>Creative Agency</small></h3>
                                    <p><a rel="nofollow" href="https://www.facebook.com/tooplate">Tooplate</a> is a great website to download HTML templates without any login or email.</p>
                                </div>
                            </div>
                            
                            <div className="timeline-wrapper">
                                <div className="timeline-yr">
                                    <span>2013</span>
                                </div>
                                <div className="timeline-info">
                                    <h3><span>Artwork Design</span><small>New Art School</small></h3>
                                    <p>You can freely use Tooplate's templates for your business or personal sites. You cannot redistribute this template without a permission.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </section>



        <section id="contact" class="contact my-5">
        <div class="container">
  
          <div class="row justify-content-center" data-aos="fade-up">
  
            <div class="col-lg-10">
  
              <div class="info-wrap">
                <div class="row">
                  <div class="col-lg-4 info">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street<br/>New York, NY 535022</p>
                  </div>
  
                  <div class="col-lg-4 info mt-4 mt-lg-0">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@example.com<br/>contact@example.com</p>
                  </div>
  
                  <div class="col-lg-4 info mt-4 mt-lg-0">
                    <i class="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 51<br/>+1 5589 22475 14</p>
                  </div>
                </div>
              </div>
  
            </div>
  
          </div>
  
          <div class="row mt-5 justify-content-center" data-aos="fade-up">
            <div class="col-lg-10">
              <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
  
          </div>
  
        </div>
      </section>
    </div>
  )
}
