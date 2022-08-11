import axios from "axios";

export const getServiceCategoryData = async() =>{
    let data = [];
    await axios.get('/admin/category')
    .then(response => {
        data = response.data.data
    })
    return data
}

//user for category
export const getServiceUserCategoryData = async() =>{
    let data = [];
    await axios.get('/user/category')
    .then(response => {
        data = response.data.data
    })
    return data
}

