import { useEffect, useState } from "react"
import { getServiceAboutData } from "../../../Service/About"
import { Link } from "react-router-dom"
import axios from "axios"

const AboutList = () => {
    /**about list show */
    const [abouts, setAbout] = useState([''])
    const AboutListData = async() => {
        const data = await getServiceAboutData()
        setAbout(data)
    }
    /**useEffect */
    useEffect(()=> {
        AboutListData()
    },[])

    /**delete */
    const AboutDelete = (id) => {
        axios.delete(`/admin/about/${id}`)
            .then((res) => {
                console.log(res.data.message)
                AboutListData()
            }).catch((error)=> {
                console.log(error)
            })
    }

    return (
        <section>
            <div className="card">
                <div className="card-header form-inline">
                    <h3>About List</h3> <Link className="ml-2 btn btn-sm btn-primary" to="/admin/about/create">Create About</Link>
                </div>
                <div className="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                abouts.map((about, index) => 
                                    <tr>
                                        <th>{about.title}</th>
                                        <td>
                                            <Link className="btn btn-sm btn-primary" to={`/admin/about/edit/${about._id}`}  >Edit</Link>
                                            <button onClick={()=> AboutDelete(about._id)} className="btn btn-sm btn-danger ml-2">Delete</button>
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
export default AboutList