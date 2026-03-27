/* hooks imports */
import { useState, useEffect } from 'react'

/* styles import */
import './style.css'

/* components import */
import GeneralInput from '../../Form/GeneralInput'
import GeneralSelect from '../../Form/GeneralSelect'
import SubmitButton from '../../Form/SubmitButton'

function ProjectForm({ btnText }) {

    const [categories, setCategories] = useState([])

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

    return (
        <>
            <form>

                <GeneralInput
                    ident='projectNome'
                    type='text'
                    placeholder='ex.: Aquisição de Website'
                    label='nome'
                />

                <GeneralInput
                    ident='projectOrcamento'
                    type='number'
                    placeholder='ex.: 100000'
                    label='orçamento'
                />

                <GeneralSelect
                    ident='projectCategoria'
                    label='Categoria'
                    options={categories}
                />

                <SubmitButton
                    text={btnText}
                />

            </form>
        </>
    )
}

export default ProjectForm