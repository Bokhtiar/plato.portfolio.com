import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container">
            <a class="navbar-brand" href="index.html"><i class='uil uil-user'></i> Marvel</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a href="#about" class="nav-link"><span data-hover="About">About</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#project" class="nav-link"><span data-hover="Projects">Projects</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#resume" class="nav-link"><span data-hover="Resume">Resume</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link"><span data-hover="Contact">Contact</span></a>
                    </li>
                </ul>

                <ul class="navbar-nav ml-lg-auto">
                    <div class="ml-lg-4">
                      <div class="color-mode d-lg-flex justify-content-center align-items-center">
                        <i class="color-mode-icon"></i>
                        Color mode
                      </div>
                    </div>
                </ul>
            </div>
        </div>
      </nav>

       {/* ABOUT  */}
      <section class="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
          <div class="container">
              <div class="row">
                  
                  <div class="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                      <div class="about-text">
                          <small class="small-text">Welcome to <span class="mobile-block">my portfolio website!</span></small>
                          <h1 class="animated animated-text">
                              <span class="mr-2">Hey folks, I'm</span>
                                  <div class="animated-info">
                                      <span class="animated-item">Marvel Sann</span>
                                      <span class="animated-item">Web Designer</span>
                                      <span class="animated-item">UI Specialist</span>
                                  </div>
                          </h1>

                          <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>
                          
                          <div class="custom-btn-group mt-4">
                            <a href="#" class="btn mr-lg-2 custom-btn"><i class='uil uil-file-alt'></i> Download Resume</a>
                            <a href="#contact" class="btn custom-btn custom-btn-bg custom-btn-link">Get a free quote</a>
                          </div>
                      </div>
                  </div>

                  <div class="col-lg-5 col-md-12 col-12">
                      <div class="about-image svg">
                          <img src="./frontend/images/undraw/undraw_software_engineer_lvl5.svg" class="img-fluid" alt="svg image"/>
                      </div>
                  </div>

              </div>
          </div>
      </section>
       {/* PROJECTS  */}
      <section class="project py-5" id="project">
          <div class="container">
                  
                  <div class="row">
                    <div class="col-lg-11 text-center mx-auto col-12">

                        <div class="col-lg-8 mx-auto">
                          <h2>Things I have designed for digital media agencies</h2>
                        </div>

                        <div class="owl-carousel owl-theme">
                          <div class="item">
                            <div class="project-info">
                              <img src="./frontend/images/project/project-image01.png" class="img-fluid" alt="project image"/>
                            </div>
                          </div>

                          <div class="item">
                            <div class="project-info">
                              <img src="./frontend/images/project/project-image02.png" class="img-fluid" alt="project image"/>
                            </div>
                          </div>

                          <div class="item">
                            <div class="project-info">
                              <img src="./frontend/images/project/project-image03.png" class="img-fluid" alt="project image"/>
                            </div>
                          </div>

                          <div class="item">
                            <div class="project-info">
                              <img src="./frontend/images/project/project-image04.png" class="img-fluid" alt="project image"/>
                            </div>
                          </div>

                          <div class="item">
                            <div class="project-info">
                              <img src="./frontend/images/project/project-image05.png" class="img-fluid" alt="project image"/>
                            </div>
                          </div>
                        </div>

                    </div>
                  </div>
          </div>
      </section>

      
    </div>
  );
}

export default App;
