import axios from "axios";
import { useState } from "react"
import {useNavigate, Link } from 'react-router-dom';
import { getServiceCategoryData } from "../../../Service/Category"

const ProjectCreate = () => {
    //*navigate */
    const navigate=useNavigate()
    
    /*category useState */
    const [categories, setCategory] = useState([])

    /*form data useState*/
    const changeHandlerImage = (e) => {
		setImage(e.target.files[0]);
	};

    const [title, setTitle] = useState('')
    const [category, setCategoryfrom] = useState('')
    const [project_url, setProject_url] = useState('')
    const [client_name, setClient_name] = useState('')
    const [start_time, setStart_time] = useState('')
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')

    const ProjectStore  = async(e)=> {
        e.preventDefault()
        const formData = new FormData()

        formData.append('title', title)
        formData.append('category', category)
        formData.append('project_url', project_url)
        formData.append('client_name', client_name)
        formData.append('start_time', start_time)
        formData.append('image', image)
        formData.append('body', body)

        await axios.post('/admin/portfolio', formData)
                .then((response) => {
                    console.log(response.data.message)
                    navigate('/admin/project')
                }).catch((error) => {
                    console.log(error);
                })
    }

    /*category list show*/
    const CategoryListData = async()=>{
        const data = await getServiceCategoryData()
        setCategory(data)
    }

   

    /**useEffect */
    useState(()=> {
        CategoryListData()
    })

    return (
        <section>
            <div className="card">
                <div className="card-header">
                    <h3>Project Create</h3>
                </div>
                <div className="card-body">
                    <form action="" onSubmit={ProjectStore}>
                    <div className="row">
                        <div className="col-md-4 my-2">
                            {title}
                            <label htmlFor="">Title</label>
                            <input type="text" className="form-control" placeholder="Title type here" name="" id=""
                                onChange={(e)=> {
                                    setTitle(e.target.value)
                                }}
                            />
                        </div>

                        <div className="col-md-8 my-2">
                            <label htmlFor="">Select Category</label>
                            <select name="" className="form-control" id=""
                                onChange={(e)=> {
                                    setCategoryfrom(e.target.value)
                                }}
                            >
                                {
                                    categories.map((cat, index) =>
                                     <option value={cat._id}>{cat.name}</option>
                                    )
                                }
                               
                            </select>
                        </div>

                        <div className="col-md-4 my-2">
                            <label htmlFor="">Project Url</label>
                            <input type="text" className="form-control" placeholder="Project Url type here" name="" id=""
                                onChange={(e)=> {
                                    setProject_url(e.target.value)
                                }}
                            />
                        </div>

                        <div className="col-md-4 my-2">
                            <label htmlFor="">Project Client</label>
                            <input type="text" className="form-control" placeholder="Project Client type here" name="" id=""
                                onChange={(e)=> {
                                    setClient_name(e.target.value)
                                }}
                            />
                        </div>

                        <div className="col-md-4 my-2">
                            <label htmlFor="">Project Start and End Time</label>
                            <input type="text" className="form-control" placeholder="project start time and end time" name="" id=""
                                onChange={(e)=> {
                                    setStart_time(e.target.value)
                                }}
                            />
                        </div>
                        
                        <div className="col-md-12 my-2">
                            <label htmlFor="">Project Image</label>
                            <input  type="file" 
                                    className="form-control"
                                onChange={changeHandlerImage}
                            />
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="">Body</label>
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="body type here"
                            onChange={(e)=> {
                                setBody(e.target.value)
                            }}
                            >

                            </textarea>
                        </div>

                        <div className="ml-auto my-2">
                            <input type="submit" className="btn btn-primary" name="" id="" />
                        </div>

                    </div>
                    </form>
                </div>
            </div> 
        </section>
    )
}
export default ProjectCreate