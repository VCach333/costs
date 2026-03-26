/* styles imports */
import './style.css'

/* assets import */
import saving from '../../assets/saving.svg'

/* components import */
import LinkButton from '../LinkButton'

function Home() {

    return(
        <>
            <div className="home_container">
                <h1>Bem-vindo ao <span>Costs</span></h1>
                <p>Gerencie os seus Projetos e seus Serviços</p>
                <LinkButton to='/projects/new' content='Novo Projeto' />
                <img src={saving} alt="Costs" />
            </div>
        </>
    )
}

export default Home