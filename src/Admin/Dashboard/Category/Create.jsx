import axios from 'axios'
import {useState} from 'react'
import {useNavigate, Link } from 'react-router-dom';

const CategoryCreate = () => {
    /*navigate */
    const navigate=useNavigate()
    /*form data */
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [type, setType] = useState('')
    
    const changeHandlerImage = (e) => {
		setImage(e.target.files[0]);
	}

    const CategoryCreate = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('image', image)
        formData.append('type', type)
 
        axios.post('/admin/category', formData)
            .then((response)=> {
                console.log(response.data.message)
                navigate('/admin/category')
            })

    }


    return (
        <section>
            <div className="card">
                <div className="card-header">
                    <h3>Category Create</h3>
                </div>
                <div className="card-body">
                    <form action="" onSubmit={CategoryCreate}>
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <label htmlFor="">Name</label>
                            <input type="text" className='form-control' placeholder="name" name="" id=""
                            onChange={(e)=> {
                                setName(e.target.value)
                            }}
                            />
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <label htmlFor="">Category Type</label>
                            <select name="" className='form-control' id=""
                            onChange={(e)=> {
                                setType(e.target.value)
                            }}
                            >
                                <option value="blog">Blog</option>
                                <option value="project">Project</option>
                            </select>
                            
                        
                        </div>

                        <div className="col-md-12 col-lg-12 my-2">
                            <label htmlFor="">Image</label>
                            <input type="file" name="" className='form-control' id="" 
                            onChange={changeHandlerImage}
                            />
                        </div>

                        <div className="col-md-12 text-center ml-atuo my-2">
                            <input type="submit" name="" className='btn btn-primary' id="" />
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default CategoryCreate