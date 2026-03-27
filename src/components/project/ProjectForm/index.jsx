/* styles import */
import './style.css'

/* components import */
import GeneralInput from '../../Form/GeneralInput'

function ProjectForm() {

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

                <div>
                    <select>
                        <option disabled selected>Categoria</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Criar</button>
                </div>
            </form>
        </>
    )
}

export default ProjectForm