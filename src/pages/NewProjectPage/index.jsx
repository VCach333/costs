/* styles import */
import './style.css'

/* components import */
import ProjectForm from '../../components/project/ProjectForm'

function NewProjectPage() {

    return (
        <div className="new_project_container">
            <h1>Criar Projeto</h1>
            <p>Crie seu Projeto para depois adicionar Serviços</p>
            <ProjectForm />
        </div>
    )
}

export default NewProjectPage