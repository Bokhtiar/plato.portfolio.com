import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate, useParams } from 'react-router-dom';

const ResumeCreate = () => {

    const id = useParams()
 
        const ResumeShow = async() =>{ 
            await axios.get(`/admin/resume/${id.id}`).then((response)=>{
                console.log(response.data.data)
                setTitle(response.data.data.title)
                setShort_des(response.data.data.short_des)
                setLong_des(response.data.data.long_des)
                setDate(response.data.data.date)
                setType(response.data.data.type)
            }).catch((error) => {
                console.log(error);
            })
        }

       
    
    
    /**navigate antoher page  redirect*/
    const navigate=useNavigate()

    /**form data useState */
    const [title, setTitle] = useState('')
    const [short_des, setShort_des] = useState('')
    const [type, setType] = useState('')
    const [date, setDate] = useState('')
    const [long_des, setLong_des] = useState('')


    /**form submit resume */
    const ResumeStore = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('title', title)
        formData.append('short_des', short_des)
        formData.append('type', type)
        formData.append('date', date)
        formData.append('long_des', long_des)


            axios.post('/admin/resume', formData).then((response)=>{
                console.log(response.data.message)
                navigate('/admin/resume')
            }).catch((error) => {
                console.log(error);
            })
    
        

    }
 

    /**useEffect */
    useEffect(()=>{
        ResumeShow()
    },[])

    return (
        <section>
            <div className="card">
                <div className="card-header">
                    <h3>Resume Create Form</h3>
                </div>

                <div className="card-body">
                    
                    <form action="" onSubmit={ResumeStore}>
                        <div className="row">
                            <div className="col-md-5 col-lg-5 col-sm-12 my-2">
                                <label htmlFor="">Title</label>
                                <input type="text" className="form-control" value={title} name="" placeholder="title here" id=""
                                    onChange={(e)=>{
                                        setTitle(e.target.value)
                                    }}
                                />
                            </div>
                                    
                            <div className="col-md-7 col-lg-7 col-sm-12 my-2">
                                <label htmlFor="">Short Description</label>
                                <input type="text" className="form-control" name="" value={short_des} placeholder="Short Des here" id=""
                                    onChange={(e)=>{
                                        setShort_des(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="col-md-7 col-lg-7 col-sm-12 my-2">
                                <label htmlFor="">Short Description</label>
                                <select className="form-control" value={type} name="" id=""
                                onChange={(e)=>{
                                    setType(e.target.value)
                                }}
                                >
                                    <option value="">Select Resumes</option>
                                    <option value="profession">Profession</option>
                                    <option value="edu">Education</option>
                                </select>
                            </div>

                            <div className="col-md-5 col-lg-5 col-sm-12 my-2">
                                <label htmlFor="">Year</label>
                                <input type="text" className="form-control" name="" value={date} placeholder="Year here" id=""
                                    onChange={(e)=>{
                                        setDate(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="col-md-12 col-lg-12 col-sm-12 my-2">
                                <label htmlFor="">Long Description</label>
                                <textarea name="" value={long_des} placeholder="Long Description" className="form-control" id="" cols="10" rows="4"
                                onChange={(e)=>{
                                    setLong_des(e.target.value)
                                }}
                                ></textarea>
                            </div>

                            <div className="text-center ml-auto mr-2">
                                <input className="btn btn-primary text-center" type="submit" name="" id="" />
                            </div>
                        </div> 
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ResumeCreate