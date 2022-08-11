import { Link } from "react-router-dom"
import {useEffect, useState} from "react"
import { getServiceCategoryData } from "../../../Service/Category"
import axios from "axios"


const CategoryList = () => {

    /**category list show useState */
    const [categories, setCategory] = useState([''])
    
    /**data form service */
    const CategoryListData = async() => {
        const data = await getServiceCategoryData()
        setCategory(data)
        console.log("cat",data)
    }

    /**category remove */
    const removeCategory = (id) =>{
        axios.delete(`/admin/category/${id}`)
            .then((response)=>{
                console.log(response.data.data)
                CategoryListData()
            }).catch((error)=> {
                console.log(error)
            })
    }
    /**ueEffect */
    useEffect(()=> {
        CategoryListData()
    },[])
    
    return (
        <section>
            <div className="card">
                <div className="card-header form-inline">
                    <h3>Category List</h3> <Link className=" ml-5 btn btn-primary" to="/admin/category/create">Create Category</Link>
                </div>

                <div className="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Type</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.map((cat, index) => 
                                <tr>
                                    <th scope="row">{cat.name}</th>
                                    <td>{cat.image}</td>
                                    <td>{cat.type}</td>
                                    <td>
                                        <a href="" className="btn btn-sm btn-primary">Edit</a>
                                        <button onClick={()=>removeCategory(cat._id)} className="btn btn-sm btn-danger">Delete</button>
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
export default CategoryList