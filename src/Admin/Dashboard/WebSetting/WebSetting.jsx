import { useState } from "react"
import axios from "axios";
import {useNavigate, Link } from 'react-router-dom';

const WebSetting = () => {
    /*navigate */
    const navigate=useNavigate()

    /*form data */
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [heading1, setHeading1] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    const [text, setText] = useState('')
    const [logo, setLogo] = useState('')
    const [image, setImage] = useState('')

    const changeHandlerLogo = (e) => {
		setLogo(e.target.files[0]);
	};

    const changeHandlerImage = (e) => {
		setImage(e.target.files[0]);
	};

    /*form submit websetting */
    const settingStore = async(e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('location', location)
        formData.append('heading1', heading1)
        formData.append('text', text)
        formData.append('logo', logo)
        formData.append('image', image)

        await axios.post('/admin/websetting', formData)
                    .then(({data})=>{
                        console.log(data.message)
                        navigate("/websetting/list")
                    }).catch((res)=> {
                        console.log(res.data.message)
                    })
        

    }

    return(
        <section>
            <div className="card">
                <div className="card-header form-inline">
                    <h3>WebSetting</h3> <Link className="btn btn-primary ml-5" to="/web-setting-list">List Websetting</Link>
                </div>
                <div className="card-body">
                    <form action="" onSubmit={settingStore}>
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-12 my-2">
                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                    <input type="text" className="form-control" placeholder="name" name="" id=""
                                    onChange={(e)=>{
                                        setName(e.target.value)
                                    }}
                                    />
                                </div>
                            </div>

                            <div className="col-md-8 col-lg-8 col-sm-12 my-2">
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input type="text" className="form-control" placeholder="email" name="" id="" 
                                    onChange={(e)=> {
                                        setEmail(e.target.value)
                                    }}
                                    />
                                </div>
                            </div>

                            <div className="col-md-8 col-lg-8 col-sm-12 ">
                                <div className="form-group">
                                    <label htmlFor="">Heading One</label>
                                    <input type="text" className="form-control" placeholder="Heading one" name="" id="" 
                                        onChange={(e)=> {
                                            setHeading1(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-4 col-sm-12 ">
                                <div className="form-group">
                                    <label htmlFor="">Phone Number</label>
                                    <input type="text" className="form-control" placeholder="phone" name="" id="" 
                                    onChange={(e) => {
                                        setPhone(e.target.value)
                                    }}
                                    />
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-4 col-sm-12 ">
                                <div className="form-group">
                                    <label htmlFor="">Location</label>
                                    <input type="text" className="form-control" placeholder="Location" name="" id="" 
                                    onChange={(e)=> {
                                        setLocation(e.target.value)
                                    }}
                                    />
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-4 col-sm-12 ">
                                <div className="form-group">
                                    <label htmlFor="">Logo</label>
                                    <input type="file" className="form-control" name="" id="" 
                                    onChange={changeHandlerLogo}
                                    />
                                </div>
                            </div>


                            <div className="col-md-4 col-lg-4 col-sm-12 ">
                                <div className="form-group">
                                    <label htmlFor="">Image</label>
                                    <input type="file" className="form-control" name="" id=""
                                    onChange={changeHandlerImage}
                                    />
                                </div>
                            </div>

                            <div className="col-md-12 col-lg-12 col-sm-12 ">
                                <div className="form-group">
                                    <label htmlFor="">Text</label>
                                    <textarea name="" className="form-control" id="" cols="10" rows="5"
                                    onChange={(e)=> {
                                        setText(e.target.value)
                                    }}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="text-center">
                                <input type="submit" className="btn btn-primary" name="" id="" />
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default WebSetting