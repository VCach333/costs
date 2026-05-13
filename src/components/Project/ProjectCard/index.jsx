/* style import */
import './style.css'

/* icons import */
import { FaEdit, FaTrash } from 'react-icons/fa'


function ProjectCard({ id, name, budget, category, handleRemove }) {

    return (
        // <div className='projects_content'>

            <div className="project_card">

                <div className="project_card_header">
                    <h4>{name}</h4>
                </div>

                <div className="project_card_content">

                    <blockquote>
                        Orçamento: <span>{budget} Kz</span>
                    </blockquote>

                    <blockquote>
                        Categoria: <span>{category}</span>
                    </blockquote>

                </div>

                <div className="project_card_action">
                    <button>
                        <FaTrash />
                    </button>
                    <button>
                        <FaEdit />
                    </button>
                </div>

            </div>

        // </div>
    )
}

export default ProjectCard