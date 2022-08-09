import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getServiceSingleContact } from "../../../Service/Contact"

const ContactShow = () => {
/*find id */
const id = useParams()


/*contact information for usestate */
const [contact, setContact] = useState('')

/*id ways information findout */
const ContactShowData = async()=>{
    const data = await getServiceSingleContact(id)
    setContact(data)
}

/*useEffect */
useEffect(()=>{
    ContactShowData()
},[])
console.log(contact)

    return(
        <section>
            <div className="card">
                <div className="card-header">
                    <h3>Contact Details</h3>
                </div>

                <div className="card-body">
                    <section>
                        <span><strong>Name: </strong> {contact.name} </span> <br />
                        <span><strong>Email: </strong> {contact.email} </span><br />
                        <span><strong>Subject: </strong> {contact.subject} </span><br />
                        <span><strong>Text: </strong> {contact.text} </span><br />
                    </section>
                </div>
            </div>
        </section>
    )
}
export default ContactShow