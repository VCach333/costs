/* hook & utils import */
import { useLocation } from 'react-router-dom'

/* component import */
import Message from "../../layouts/Message"

function ProjectPage() {

    const location = useLocation()

    let message = ''
    if (location.state) {

        message = location.state.message
    }

    return (

        <div>
            <h1>ProjectPage</h1>
            
            {message &&
                <Message msg={message} type='success' />
            }
        </div>
    )
}

export default ProjectPage