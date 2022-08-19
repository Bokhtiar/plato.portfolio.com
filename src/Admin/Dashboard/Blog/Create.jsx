import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getServiceCategoryData } from "../../../Service/Category"

const BlogCreate = () => {
    const navigate = useNavigate()
    /**categories useState */
    const [categories, setCategory] = useState([])
    /**blog data from service */
    const CategoryList = async() => {
        let data = await getServiceCategoryData()
        setCategory(data)
    }
    /**form submit useState */
    const [title, setTitle] = useState('')
    const [category, setCategoryForm] = useState('')
    const [short_des, setShort_des] = useState('')
    const [image, setImage] = useState('')
    const [long_des, setLong_des] = useState('')

    const changeHandlerImage = (e) => {
		setImage(e.target.files[0]);
	}

    const blogSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append('title', title)
        formData.append('category', category)
        formData.append('short_des', short_des)
        formData.append('long_des', long_des)
        formData.append('image', image)

        axios.post('/admin/blog/', formData).then((res) => {
            console.log(res)
            navigate('/admin/blog')
        }).catch((error)=> {
            console.log(error);
        })
    }


    /**useEffect */
    useEffect(()=> {
        CategoryList()
    },[])
    return (
        <section>
            <div className="card">
                <div className="card-header">
                    <h3>Blog Create</h3>
                </div>
                <div className="card-body">
                    <form action="" onSubmit={blogSubmit}>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-12">
                                <label htmlFor="">Title</label>
                                <input type="text" className="form-control" placeholder="title" name="" id=""
                                onChange={(e)=> {
                                    setTitle(e.target.value)
                                }}
                                />
                            </div>

                            <div className="col-md-6 col-lg-6 col-sm-12">
                                <label htmlFor="">Select Category</label>
                                <select name="category" className="form-control"  id=""
                                onChange={(e)=> {
                                    setCategoryForm(e.target.value)
                                }}
                                >
                                    <option value="">Select item</option>
                                    {
                                        categories.map((cat, index)=> 
                                            cat.type == "blog" ?
                                                <option value={cat._id}>{cat.name}</option>
                                            :""
                                        )
                                    }
                                </select>
                            </div>

                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <label htmlFor="">Blog Short Description</label>
                                <input type="text" className="form-control" name="" id="" 
                                onChange={(e)=> {
                                    setShort_des(e.target.value)
                                }}
                                />
                            </div>

                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <label htmlFor="">Blog Image</label>
                                <input type="file" className="form-control" name="" id=""
                                onChange={changeHandlerImage}
                                />
                            </div>

                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <label htmlFor="">Blog Description</label>
                                <textarea name="long_des" className="form-control" id="" cols="30" rows="10"
                                onChange={(e)=> {
                                    setLong_des(e.target.value)
                                }}
                                ></textarea>
                            </div>

                            <div className="text-center my-3">
                                <input type="submit" value="submit" className="btn btn-sm btn-primary" name="" id="" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default BlogCreate