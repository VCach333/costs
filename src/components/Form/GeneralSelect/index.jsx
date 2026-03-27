/* styles import */
import './style.css'

function GeneralSelect({ident, value, handleOnChange, options, label}) {

    return(
        <div className="form_control">
            <select name={ident} id={ident}>
                <option selected disabled>{label}</option>
                {options.map(opt => (
                    <option value={opt.value}>{opt.textContent}</option>
                ))}
            </select>
        </div>
    )
}

export default GeneralSelect