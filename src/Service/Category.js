import axios from "axios";

export const getServiceCategoryData = async() =>{
    let data = [];
    await axios.get('/admin/category')
    .then(response => {
        data = response.data.data
    })
    return data
}
