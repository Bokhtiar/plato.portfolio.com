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
    <div style={{ marginTop: "100px" }}>
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
                          <span> {resume.date}   </span>
                        </div>
                        <div className="timeline-info">
                          <h3><span>{resume.title}</span><small>{resume.short_des}</small></h3>
                          <p>{resume.long_des}.</p>
                        </div>
                      </div>
                      : ""
                  )
                }


              </div>
            </div>

            <div className="col-lg-6 col-12">
              <h2 className="mb-4 mobile-mt-2">Educations</h2>

              <div className="timeline">
                {
                  resumes.map((edu, index) => 
                    edu.type == "edu" ? 
                    <div className="timeline-wrapper">
                    <div className="timeline-yr">
                      <span>{edu.date}</span>
                    </div>
                    <div className="timeline-info">
                      <h3><span>{edu.title}</span><small>{edu.short_des}</small></h3>
                      <p>{edu.long_des}.</p>
                    </div>
                    </div>
                    : ""
                  )
                }

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
