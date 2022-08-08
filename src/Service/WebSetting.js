import axios from "axios";

export const getServiceWebSettingData = async() =>{
    let data = [];
    await axios.get('/admin/websetting')
    .then(response => {
        data = response.data.data
    })
    return data
}