/* hook & utils import */
import { useLocation } from 'react-router-dom'

/* style import */
import './style.css'

/* icons import */
import { FaEdit, FaTrash } from 'react-icons/fa'

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
                
                <div className="project_card">
                    
                    <div className="project_card_header">
                        <h4>Nome do Projeto</h4>
                    </div>

                    <div className="project_card_content">

                        <blockquote>
                            Orçamento: <span>2000</span>
                        </blockquote>

                        <blockquote>
                            Categoria: <span>Categoria</span>
                        </blockquote>

                    </div>

                    <div className="project_card_action">
                        <button>
                            <FaTrash />
                        </button>
                        <button>
                            <FaEdit git/>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProjectPage