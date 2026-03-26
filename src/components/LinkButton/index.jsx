/* styles import */
import './style.css'

/* packages import */
import { Link } from 'react-router-dom'

function LinkButton({ to, content }) {

    return (
        <>
            <Link to={to}>
                {content}
            </Link>
        </>
    )
}

export default LinkButton