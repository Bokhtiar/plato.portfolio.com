import React from 'react'
import { Link } from 'react-router-dom'
import { getWebSettingSingleData } from '../Service/WebSetting'
import ContactCreate from './Contact/Create'
import { useState, useEffect } from 'react'
import Resume from './Resume/Resume'
import Project from './Project/Project'


export default function Index() {


  const [webSetting, setWebSetting] = useState([])

  const webSettingSingleData = async() =>{
      const data = await getWebSettingSingleData()
      setWebSetting(data)
  }
  useEffect(()=>{
      webSettingSingleData()
  },[])


  return (
    
    <div>
        {/* ABOUT  */}
        <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-8 col-md-12 col-12 d-flex align-items-center">
                        <div className="about-text">
                            <small className="small-text">{webSetting.heading1}</small>
                            <h1 className="animated animated-text">
                                <span className="mr-2">Hey folks, I'm</span>
                                    <div className="animated-info">
                                        <span className="animated-item" style={{ fontSize: "22px" }}>Bokhtiar Toshar</span>
                                        <span className="animated-item" style={{ fontSize: "22px" }}>Full Stack Laravel Developer</span>
                                        <span className="animated-item" style={{ fontSize: "22px" }}>Mern Stack Developer</span>
                                    </div>
                            </h1>

                            <p>{webSetting.text}.</p>
                            
                            <div className="custom-btn-group mt-4">
                                <a href="#" className="btn mr-lg-2 custom-btn"><i className='uil uil-file-alt'></i> Download Resume</a>
                                <a href="#contact" className="btn custom-btn custom-btn-bg custom-btn-link">Get a free quote</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="about-image svg">
                            <img src={webSetting.image} className="img-fluid" alt="svg image"/>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* resumes */}
        <Resume></Resume>
        {/* project  */}
        <Project></Project>
        {/* contact */}
        <ContactCreate></ContactCreate>
   
    </div>
  )
}
