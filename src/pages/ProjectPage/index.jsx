/* hook & utils import */
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* style import */
import './style.css'

/* component import */
import Message from "../../layouts/Message"
import LinkButton from '../../components/LinkButton'
import ProjectCard from '../../components/Project/ProjectCard'

function ProjectPage() {

    const location = useLocation()
    const [projects, setProjects] = useState([])

    let message = ''
    if (location.state) {

        message = location.state.message
    }

    useEffect(() => {

        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {

            //console.log(data)
            setProjects(data)

        }).catch(err => console.log(err))

    }, [])

    return (

        <div className='projects_container'>

            <div className='projects_header'>
                <h1>Meus Projetos</h1>
                <LinkButton to='/projects/new' content='Novo Projeto' />
            </div>

            {message &&
                <Message msg={message} type='success' />
            }

            <div className="projects_content">

                {projects.length > 0 &&

                    projects.map(project => (


                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            name={project.projectNome}
                            budget={project.projectOrcamento}
                            category={project.category.name}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default ProjectPage