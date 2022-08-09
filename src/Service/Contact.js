import axios from "axios";

export const getServiceContactData = async() =>{
    let data = [];
    await axios.get('/admin/contact')
    .then(response => {
        data = response.data.data
    })
    return data
}


export const getServiceSingleContact = async(props) =>{
    let singleContact = [];
    const id = props.id
    await axios.get(`/admin/contact/${id}`)
        .then(response => {
            singleContact = response.data.data
        })
    return singleContact
}