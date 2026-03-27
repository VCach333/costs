import './style.css'

function GeneralInput({ ident, type, placeholder, value, handleOnChange, label }) {

    return (
        <div className="form_control">
            <label htmlFor={ident}>{label}</label>
            <input
                id={ident}
                name={ident}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
            />
        </div>
    )
}

export default GeneralInput