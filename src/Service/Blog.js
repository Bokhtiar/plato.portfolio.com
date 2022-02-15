import axios from "axios";

export const getServiceBlogData = async() =>{
    let data = [];
    await axios.get('https://fakestoreapi.com/products')
    .then(response => {
        data = response.data
    })
    return data
}

export const getServiceSingleBlog = async(props) =>{
    let singleBlog = [];
    console.log(props);
    await axios.get(`https://fakestoreapi.com/products/${props}`)
        .then(response => {
            singleBlog = response.data
            console.log('service',singleBlog)
        })
    return singleBlog
}