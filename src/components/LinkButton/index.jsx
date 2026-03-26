/* styles import */
import './style.css'

function LinkButton({to, content}) {

    return(
        <>
            <a href={to}>
                {content}
            </a>
        </>
    )
}

export default LinkButton