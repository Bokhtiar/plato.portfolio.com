import { useEffect, useState } from "react"
import { getServiceContactData } from "../../../Service/Contact"
import {Link} from 'react-router-dom'
import axios from "axios"

const ContactList = () => {

    /*Contact list usestate*/
    const [contacts, setContact] = useState([''])

    /*service from data for  contact list */
    const contactListData = async () => {
        const data = await getServiceContactData()
        setContact(data)
    }


    /*contact destroy */
    const destroyContact = async(id) => {
        axios.delete(`/admin/contact/${id}`).then((response)=>{
            console.log(response.data.message)
            contactListData()
        }).catch((error)=>{
            console.log(error);
        })
    }


    /*useEffect*/
    useEffect(() => {
        contactListData()
    }, [])

    


    return (
        <section>
            <div className="card">
                <div className="card-header">
                    <h3>List of Contact</h3>
                </div>

                <div className="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Index</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((contact, index) => 
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.subject}</td>
                                    <td>
                                        <Link to={`/admin/contact/${contact._id}`} className="btn btn-sm btn-info text-light">View</Link>
                                        <button onClick={()=>destroyContact(contact._id)} className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
export default ContactList