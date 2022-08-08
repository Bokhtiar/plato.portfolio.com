import React, { useEffect, useState } from 'react'
import { getServiceResumData, getServiceResumProfessionData } from '../../Service/resume'

export default function Index() {

  const [resumes, setResume] = useState([])

  /*profession data show rsume api service resume*/
  const ResumeData = async () => {
    const data = await getServiceResumData()
    setResume(data)
  }

  useEffect(() => {
    ResumeData()
  }, [])



  return (
    <div>
      {/* FEATURES */}
      <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-12">
              <h2 className="mb-4">Experiences</h2>
              <div className="timeline">
                {
                  resumes.map((resume, index) =>
                    resume.type == "profession" ?
                      <div className="timeline-wrapper">
                        <div className="timeline-yr">
                          <span> <img className='icon-expe' src={resume.image} alt="svg image" />   </span>
                        </div>
                        <div className="timeline-info">
                          <h3><span>{resume.title}</span><small>{resume.short_des}</small></h3>
                          <p>{resume.long_des}.</p>
                        </div>
                      </div>
                      : ""
                  )
                }
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span><img className='icon-expe' src="./frontend/img/web.png" alt="svg image" /></span>
                  </div>
                  <div className="timeline-info">
                    <h3><span>UX Designer</span><small>Digital Ace</small></h3>
                    <p>Fusce rutrum augue id orci rhoncus molestie. Nunc auctor dignissim lacus vel iaculis.</p>
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
    </div>
  )
}
