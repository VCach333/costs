/* hooks imports */
import { useState, useEffect } from 'react'

/* styles import */
import './style.css'

/* components import */
import GeneralInput from '../../Form/GeneralInput'
import GeneralSelect from '../../Form/GeneralSelect'
import SubmitButton from '../../Form/SubmitButton'

function ProjectForm({ handleSubmit, projectData, btnText }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {

        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        }).then(async (resp) => {

            const apiCategories = await resp.json()

            setCategories(apiCategories)

        }).catch(err => console.log(err))
    }, [])

    const submit = (e) => {

        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {

        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleSelect(e) {

        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
    }

    return (
        <>
            <form onSubmit={submit}>

                <GeneralInput
                    ident='projectNome'
                    type='text'
                    placeholder='ex.: Aquisição de Website'
                    label='nome'
                    handleOnChange={handleChange}
                    value={project.name}
                />

                <GeneralInput
                    ident='projectOrcamento'
                    type='number'
                    placeholder='ex.: 100000'
                    label='orçamento'
                    handleOnChange={handleChange}
                    value={project.budget}
                />

                <GeneralSelect
                    ident='projectCategoria'
                    label='Categoria'
                    options={categories}
                    handleOnChange={handleSelect}
                    value={project.category ? project.category.id : ''}
                />

                <SubmitButton
                    text={btnText}
                />

            </form>
        </>
    )
}

export default ProjectForm