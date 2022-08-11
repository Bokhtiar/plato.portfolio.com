import axios from "axios";

export const getServiceProjectData = async() =>{
    let data = [];
    await axios.get('/admin/portfolio')
    .then(response => {
        data = response.data.data
    })
    return data 
}

export const getServiceSingleProject = async(props) =>{
    let data = [];
    console.log(props);
    await axios.get(`/admin/portfolio/${props.id}`)
        .then(response => {
            data = response.data.data
            console.log('service',data)
        })
    return data
}

//user project data

export const getServiceUserProjectData = async() =>{
    let data = [];
    await axios.get('/user/portfolio')
    .then(response => {
        data = response.data.data
    })
    return data 
}

export const getServiceSingleUserProject = async(id) =>{
    let data = [];
    await axios.get(`/user/portfolio/${id}`)
        .then(response => {
            data = response.data.data[0]
            console.log('project',data)
        })
    return data
}