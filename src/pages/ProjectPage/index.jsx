/* hook & utils import */
import { useLocation } from 'react-router-dom'

/* style import */
import './style.css'

/* component import */
import Message from "../../layouts/Message"
import LinkButton from '../../components/LinkButton'

function ProjectPage() {

    const location = useLocation()

    let message = ''
    if (location.state) {

        message = location.state.message
    }

    return (

        <div className='projects_container'>
            
            <div className='projects_header'>
                <h1>Meus Projetos</h1>
                <LinkButton to='/projects/new' content='Novo Projeto' />
            </div>
            
            {message &&
                <Message msg={message} type='success' />
            }

            <div className='projects_content'>
                <p>projetos</p>
            </div>
        </div>
    )
}

export default ProjectPage