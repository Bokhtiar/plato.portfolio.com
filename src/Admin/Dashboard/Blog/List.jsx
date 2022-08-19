import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getServiceBlogData } from "../../../Service/Blog"

const AdminBlogList = () => {
    /**blogs list show useState */
    const [blogs, setBlog] = useState([])

    /*data from blog service */
    const BlogListData = async() => {
        let data = await getServiceBlogData()
        setBlog(data)
    }
    

    /**blog deleted */
    const blogDelete = (id) => {
        axios.delete(`/admin/blog/${id}`).then((res)=> {
            BlogListData()
        }).catch((error) => {
            console.log(error)
        })
    }
    /**useEffect blog */
    useEffect(()=> {
        BlogListData()
    },[])

    return (
        <section>
            <div className="card">
                <div className="card-header form-inline">
                    <h3>Blog List Show</h3> &nbsp; <Link className="btn btn-primary" to="/admin/blog/create">Create Blog</Link>
                </div>
                <div className="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Index</th>
                                <th scope="col">Title</th>
                                <th scope="col">Category</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs.map((blog, index)=> 
                                    <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{blog.title}</td>
                                    <td>{blog.category ? blog.category.name : "deleted"}</td>
                                    <td>
                                        <Link to="" className="btn btn-sm btn-success">Show</Link>
                                        <button onClick={()=> blogDelete(blog._id)}  className="btn btn-sm btn-danger">Delete</button>
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

export default AdminBlogList