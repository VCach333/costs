/* styles import */
import './style.css'

function ProjectForm() {

    return(
        <>
            <form>
                <div>
                    <input type="text" placeholder="nome" />
                </div>
                <div>
                    <input type="number" placeholder="orçamento" />
                </div>
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