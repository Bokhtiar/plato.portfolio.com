import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AboutCreate = () => {

    /**navigate */
    const navigate = useNavigate()
   

    /**useStates form about */
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [about1, setAbout1] = useState('')
    const [about2, setAbout2] = useState('')
    const [about3, setAbout3] = useState('')
    const [about4, setAbout4] = useState('')
    
    const changeHandlerImage = (e) => {
		setImage(e.target.files[0]);
	}
    /**form submit */
    const aboutStore = (e) => {
        e.preventDefault()
 
        const formData = new FormData()
        formData.append("title", title)
        formData.append("body", body)
        formData.append("about1", about1)
        formData.append("about2", about2)
        formData.append("about3", about3)
        formData.append("about4", about4)
        formData.append("image", image)

        axios.post('/admin/about', formData)
            .then((res)=> {
                console.log(res.data.message)
                navigate('/admin/about')
            }).catch((error)=> {
                console.log(error)
            })
    }

    return(
        <section>
            <div className="card">
                <div className="card-header">
                    <h3>About Create Form</h3>
                </div>
                <div className="card-body">
                    <form action="" onSubmit={aboutStore}>
                    <div className="row">
                        <div className="col-md-4 col-lg-4">
                            <label htmlFor="">Image</label>
                            <input type="file" name="" className="form-control" id=""
                            onChange={changeHandlerImage}
                            />
                        </div>
                        <div className="col-md-8 col-lg-8">
                            <div className="row">
                                <div className="col-md-12 col-lg-12">
                                    <label htmlFor="">Title</label>
                                    <input type="text" placeholder="title" className="form-control" name="" id="" 
                                    onChange={(e)=> {
                                        setTitle(e.target.value)
                                    }}
                                    />
                                </div>
                                <div className="col-md-12 col-lg-12">
                                    <label htmlFor="">Body</label>
                                    <textarea name="" className="form-control" id="" cols="5" rows="2"
                                    onChange={(e)=> {
                                        setBody(e.target.value)
                                    }}
                                    ></textarea>
                                </div>

                                <div className="col-md-6 col-lg-6 my-2">
                                    <label htmlFor="">About1</label>
                                    <textarea name="" className="form-control" id="" cols="5" rows="2"
                                    onChange={(e)=> {
                                        setAbout1(e.target.value)
                                    }}
                                    ></textarea>
                                </div>

                                <div className="col-md-6 col-lg-6 my-2">
                                    <label htmlFor="">About2</label>
                                    <textarea name="" className="form-control" id="" cols="5" rows="2"
                                    onChange={(e)=> {
                                        setAbout2(e.target.value)
                                    }}
                                    ></textarea>
                                </div>

                                <div className="col-md-6 col-lg-6 my-2">
                                    <label htmlFor="">About3</label>
                                    <textarea name="" className="form-control" id="" cols="5" rows="2"
                                    onChange={(e)=> {
                                        setAbout3(e.target.value)
                                    }}
                                    ></textarea>
                                </div>

                                <div className="col-md-6 col-lg-6 my-2">
                                    <label htmlFor="">About4</label>
                                    <textarea name="" className="form-control" id="" cols="5" rows="2"
                                    onChange={(e)=> {
                                        setAbout4(e.target.value)
                                    }}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <input type="submit" name="" value="Update" className="btn btn-primary" id="" />
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default AboutCreate