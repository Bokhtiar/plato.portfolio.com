import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getServiceSingleProject } from "../../../Service/Project"

const ProjectShow = () => {

    const id = useParams()

    /*proejct useState */
    const [project, setProject] = useState('')

    /**signle project details show */
    const ProjectShowData = async() => {
        const data = await getServiceSingleProject(id)
        setProject(data)
    }

    /*useEffect*/
    useEffect(()=> {
        ProjectShowData()
    }, [])

    console.log(project)
    return (
        <section> 
            <div className="card">
                <div className="card-header">
                    <h3>Project Details</h3>
                </div>
                <div className="card-body my-4">
                    <span><strong>Title: </strong> {project.title}</span> <br />
                    <span><strong>Project url: </strong> {project.project_url}</span> <br />
                    <span><strong>Client Name: </strong> {project.client_name}</span> <br />
                    <span><strong>Title: </strong> {project.title}</span> <br />
                </div>
            </div>
        </section>
    )
}
export default ProjectShow