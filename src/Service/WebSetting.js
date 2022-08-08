import axios from "axios";

export const getServiceWebSettingData = async() =>{
    let data = [];
    await axios.get('/admin/websetting')
    .then(response => {
        data = response.data.data
    })
    return data
}


/*user */
export const getWebSettingSingleData = async() =>{
    let data = [];
    let id ="62f0db2bcfaa18f22c8b18e3"
    await axios.get(`/user/websetting/${id}`)
    .then(response => {
        data = response.data.data[0]
    })
    return data
}
