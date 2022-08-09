import { useEffect, useState } from "react"
import { getServiceProjectData } from "../../../Service/Project"
import {Link} from 'react-router-dom'

const ProjectList = () => {
    /*project data set*/
    const [projects, setProject] = useState([''])

    /*project service data retrive */
    const ProjectListData = async() => {
        const data = await getServiceProjectData()
        setProject(data)
    }

    /*useEffect */
    useEffect(() => {
        ProjectListData()
    }, [])
    console.log(projects)

    return (
        <section>
            <div className="card">
                <div className="card-header form-inline">
                    <h3>Project List</h3> <Link className="ml-5 btn btn-primary" to="">Create Project</Link>
                </div>
                <div className="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Category</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                projects.map((project, index) => 
                                    <tr>
                                        <th scope="row">{project.title}</th>
                                        <td>{project.category ? project.category.name: ""}</td>
                                        <td>
                                            <Link to={`/admin/project/${project._id}`} className="btn btn-sm btn-primary">Show</Link>
                                            <button className="btn btn-sm btn-danger">Delete</button>
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

export default ProjectList