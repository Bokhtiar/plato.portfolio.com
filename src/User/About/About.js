import React from 'react'

export default function About() {
  return (
    <div style={{ marginTop: "100px" }}>
    <section id="about-us" className="about-us">
      <div className="container">

        <div className="row no-gutters my-3">
          <div className=" col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right">
          <img className='' src="./frontend/images/logo.jpg"  alt="svg image"/>
          </div>
          <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
              <h3 data-aos="fade-up">Voluptatem dignissimos provident quasi</h3>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
              <div className="row">
                <div className="col-md-6 icon-box" data-aos="fade-up">
                  <i className="bx bx-receipt"></i>
                  <h4>Corporis voluptates sit</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-cube-alt"></i>
                  <h4>Ullamco laboris nisi</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-images"></i>
                  <h4>Labore consequatur</h4>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-shield"></i>
                  <h4>Beatae veritatis</h4>
                  <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


    <section id="services" class="services my-5">
      <div class="container">
        <h1 className='text-center'>Awesome Quality Services</h1>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="icon-box" data-aos="fade-up">
              <div class="icon"><i class="bi bi-briefcase"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="bi bi-card-checklist"></i></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="bi bi-bar-chart"></i></div>
              <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="bi bi-binoculars"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><i class="bi bi-brightness-high"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><i class="bi bi-calendar4-week"></i></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>
        </div>

      </div>
    </section>

 
    <section id="skills" className="skills my-5">
      <div className="container">

        <div className="section-title text-center" data-aos="fade-up">
          <h2>MY <strong>SKILLS</strong></h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6" data-aos="fade-up">

            <div className="progress">
              <span className="skill">HTML <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="100" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div className="progress">
              <span className="skill">PHP <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">WordPress/CMS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Photoshop <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

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


    <section id="clients" className="clients">
      <div className="container">

        <div className="section-title text-center" data-aos="fade-up">
          <h2>Our <strong>Clients</strong></h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row no-gutters clients-wrap clearfix" data-aos="fade-up">

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img src="./frontend/img/clients/client-1.png" className="img-fluid" alt=""/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img src="./frontend/img/clients/client-2.png" className="img-fluid" alt=""/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img src="./frontend/img/clients/client-3.png" className="img-fluid" alt=""/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img src="./frontend/img/clients/client-4.png" className="img-fluid" alt=""/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img src="./frontend/img/clients/client-5.png" className="img-fluid" alt=""/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img src="./frontend/img/clients/client-6.png" className="img-fluid" alt=""/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img src="./frontend/img/clients/client-7.png" className="img-fluid" alt=""/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img src="./frontend/img/clients/client-8.png" className="img-fluid" alt=""/>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}
