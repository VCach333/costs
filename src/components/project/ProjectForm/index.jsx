/* styles import */
import './style.css'

/* components import */
import GeneralInput from '../../Form/GeneralInput'
import GeneralSelect from '../../Form/GeneralSelect'
import SubmitButton from '../../Form/SubmitButton'

function ProjectForm({ btnText }) {

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
                    options={[
                        {
                            textContent: 'Planejamento',
                            value: 'planejamento'
                        },
                        {
                            textContent: 'Administração',
                            value: 'administracao'
                        }
                    ]}
                />

                <SubmitButton
                    text={btnText}
                />

            </form>
        </>
    )
}

export default ProjectForm