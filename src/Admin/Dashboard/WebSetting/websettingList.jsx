import { useEffect, useState } from "react"
import { getServiceWebSettingData } from "../../../Service/WebSetting"

const WebSettingList = () => {
    console.log('tes')
    const [webSetting, setWebSetting] = useState([''])

    const WebSettingList = async () => {
        const data = await getServiceWebSettingData()
        setWebSetting(data)
    }

    useEffect(() => {
        WebSettingList()
    }, [])

    console.log('public', webSetting)

    return (
        <section>
            <div className="card">
                <div className="card-header">
                    <h3>WebSetting List</h3>
                </div>
                {
                    webSetting.map((web, index) =>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12 my-3">
                                    <h3>Information</h3>
                                    <span><strong>Name: </strong>{web.name}</span> <br />
                                    <span><strong>Email: </strong>{web.email}</span> <br />
                                    <span><strong>Location: </strong>{web.location}</span> <br />
                                    <span><strong>Phone: </strong>{web.phone}</span> <br />
                                    <span><strong>Heading: </strong>{web.heading1}</span> <br />
                                    <span><strong>Text: </strong>{web.text}</span> <br />
                                </div>
                            </div>
                            <div className="">

                                <span>Logo:
                                    <img src={web.logo} alt="logo not found" />
                                </span><br />

                                <span>Image:
                                    <img src={web.image} alt="image not found" />
                                </span><br />

                            </div>
                        </div>
                    )
                }

            </div>
        </section>
    )
}
export default WebSettingList