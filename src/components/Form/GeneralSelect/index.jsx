/* styles import */
import './style.css'

function GeneralSelect({ident, value, handleOnChange, options, label}) {

    return(
        <div className="form_control">
            <select name={ident} id={ident} onChange={handleOnChange} value={value || ''}>
                <option selected disabled>{label}</option>
                {options.map((opt) => (
                    <option value={opt.id} key={opt.id} >{opt.name}</option>
                ))}
            </select>
        </div>
    )
}

export default GeneralSelect