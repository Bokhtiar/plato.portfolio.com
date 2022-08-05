import axios from "axios";

export const getServiceResumData = async() =>{
    let data = [];
    await axios.get('/user/resume')
    .then(response => {
        data = response.data.data
    })
    return data
}