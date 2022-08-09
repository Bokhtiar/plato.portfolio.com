import { useState } from "react"
import { getServiceResumData } from "../../../Service/resume"
import {Link} from 'react-router-dom'
import axios from "axios"

const ResumeList = () => {

    const [resumes, setResumes] = useState([])
    
    /*servie retrive data */
    const resumeServiceData = async() => {
        const data = await getServiceResumData()
        setResumes(data)
    }

    /*destroy funtion resume */
    const resumeDelete = (id) => {
        axios.delete(`/admin/resume/${id}`).then((response) => {
            console.log(response.data.message)
            resumeServiceData()
        }).cache((error)=>{
            console.log(error);
        })
    }


    useState(()=>{
        resumeServiceData()
    },[])

    return (
        <section>
            <div className="card">
                <div className="card-header form-inline">
                    <h3>Resume List</h3> <Link className="ml-5 btn btn-primary text-light" to="/admin/resume/create">Resume Create</Link>
                </div>
                <div className="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Short Description</th>
                                <th scope="col">Type</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                resumes.map((resume, index) => 
                                <tr>
                                    <td>{resume.title}</td>
                                    <td>{resume.short_des}</td>
                                    <td>{resume.type}</td>
                                    <td>
                                        <a className="btn btn-sm btn-success" href="">Edit</a>
                                        <button className="btn btn-sm btn-danger" onClick={()=>resumeDelete(resume._id)}>Delete</button>
                                    </td>
                                </tr>
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default ResumeList