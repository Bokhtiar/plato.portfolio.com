import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getServiceSingleUserProject } from "../../Service/Project"

const ProjectDetail = () => {

    const {id} = useParams()
    const [project, setProject] = useState([])

    const ProjectDetailData = async() => {
        const data = await getServiceSingleUserProject(id)
        setProject(data)
    }

    useEffect(()=> {
        ProjectDetailData()
    },[])
    return (
        <section className="container" style={{ marginTop: "100px" }}>
           <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
            </nav>

            <section className="row">
                <div className="col-md-4 col-lg-4 col-sm-12">
                    <img src={project.image} height="300px" width="100%" alt="" />
                </div>
                <div className="col-md-8 col-lg-8 col-sm-12">
                    <h4>{project.title}</h4> 
                    <p>
                    <strong>Category :</strong> {project.category ? project.category.name : "portfolio"} <br />
                    <strong> Project Url :</strong> {project.project_url} <br />
                    <strong> Project Duration :</strong> {project.start_time} <br />
                    <strong> Project Description :</strong> {project.body} <br />
                    
                    
                    </p>
                </div>
            </section>
        </section>
    )
}
export default ProjectDetail