import axios from "axios";

export const getServiceAboutData = async() =>{
    let data = [];
    await axios.get('/admin/about')
    .then(response => {
        data = response.data.data
        console.log('about', data)
    })
    return data
}

export const getServiceAboutShowData = async(id) =>{
    let data = [];
    await axios.get(`/admin/about/${id}`)
        .then(response => {
            data = response.data.data[0]
            console.log('about',data)
        })
    return data
}