import { getWebSettingSingleData } from "../../Service/WebSetting"
import { useState, useEffect } from "react"
import axios from "axios"

import {useNavigate, Link } from 'react-router-dom';

const ContactCreate = () => {
    /*navigate */
    const navigate=useNavigate()
    
    /*websetting*/
    const [webSetting, setWebSetting] = useState([])

    const webSettingSingleData = async() =>{
        const data = await getWebSettingSingleData()
        setWebSetting(data)
    }

    /*contact from */
    const [name, setName] = useState([''])
    const [email, setEmail] = useState([''])
    const [subject, setSubject] = useState([''])
    const [text, setText] = useState([])

    const ContactStore =(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('subject', subject)
        formData.append('text', text)

        axios.post('/user/contact', formData).then((response)=>{
            console.log(response.data.message)
            navigate('/')
        }).catch((error) => {
            console.log(error);
        })
    }


    /*useEffect using function*/
    useEffect(()=>{
        webSettingSingleData()
    },[])

    return (
        <section style={{ marginTop: "100px" }}>
            <section id="contact" class="contact my-5">
                <div class="container">

                    <div class="row justify-content-center" data-aos="fade-up">

                        <div class="col-lg-10">

                            <div class="info-wrap">
                                <div class="row">
                                    <div class="col-lg-4 info">
                                        <i class="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p>{webSetting.location}</p>
                                    </div>

                                    <div class="col-lg-4 info mt-4 mt-lg-0">
                                        <i class="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>{webSetting.email}</p>
                                    </div>

                                    <div class="col-lg-4 info mt-4 mt-lg-0">
                                        <i class="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p>{webSetting.phone}</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="row mt-5 justify-content-center" data-aos="fade-up">
                        <div class="col-lg-10">
                            <form action="" method="post" onSubmit={ContactStore}>
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required 
                                            onChange={(e)=>{
                                                setName(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required 
                                        onChange={(e)=>{
                                            setEmail(e.target.value)
                                        }}
                                        />
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required
                                    onChange={(e)=>{
                                        setSubject(e.target.value)
                                    }}
                                    />
                                </div>
                                <div class="form-group mt-3">
                                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required
                                    onChange={(e)=>{
                                        setText(e.target.value)
                                    }}
                                    ></textarea>
                                </div>
                                <div class="text-center"><button style={{ background: "#f03c02", color:"white", borderRadius:"5px", border:"none", padding: "10px" }} type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </section>
    )
}
export default ContactCreate