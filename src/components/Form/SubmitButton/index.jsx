import './style.css'

function SubmitButton({ text }) {

    return (
        <div>
            <button className="btn" type="submit">{text}</button>
        </div>
    )
}

export default SubmitButton