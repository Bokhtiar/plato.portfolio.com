import { useState } from "react"
import { getServiceResumData } from "../../../Service/resume"

const ResumeList = () => {

    const [resumes, setResumes] = useState([])
    
    const resumeServiceData = async() => {
        const data = await getServiceResumData()
        setResumes(data)
    }

    useState(()=>{
        resumeServiceData()
    },[])

    return (
        <section>
            <div className="card">
                <div className="card-header">
                    <h3>Resume List</h3>
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
                                        <a className="btn btn-sm btn-danger" href="">Delete</a>
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