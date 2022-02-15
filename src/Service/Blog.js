import axios from "axios";
export const getServiceBlogData = async() =>{
    let data = [];
    await axios.get('https://fakestoreapi.com/products')
    .then(response => {
        data = response.data
    })
    return data
}