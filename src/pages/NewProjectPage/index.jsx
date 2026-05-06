/* hooks & utils import */
import { useNavigate } from 'react-router-dom'

/* styles import */
import './style.css'

/* components import */
import ProjectForm from '../../components/project/ProjectForm'

function NewProjectPage() {

    const navigate = useNavigate()

    function createProject(project) {

        /* initialize cost & services */
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then((response) => {
            response.json()
        }).then(data => {
            console.log(data)
            navigate('/projects', {message: 'Projeto Cadastrado'})
        }).catch(err => console.log(err))
    }

    return (
        <div className="new_project_container">
            <h1>Criar Projeto</h1>
            <p>Crie seu Projeto para depois adicionar Serviços</p>
            <ProjectForm handleSubmit={createProject} btnText='Criar Projeto' />
        </div>
    )
}

export default NewProjectPage