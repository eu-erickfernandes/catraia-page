import styles from './Input.module.css'

const Input = ({ type, name, label, required, placeholder }) => {
    return(
        <div className={ styles.grupo }>
            <label className={ styles.label } htmlFor={ `campo-${name}` }>{ label }</label>

            {type != 'textarea' && <input
                id={ `campo-${name}` }
                className={ styles.input }
                type={ type }
                name={ name }
                required={ required }
                placeholder={ placeholder }
            />}

            {type == 'textarea' && <textarea
                id={ `campo-${name}` }
                className={ styles.textarea }
                type={ type }
                name={ name }
                required={ required }
                minLength={ 10 }
            ></textarea>}
        </div>
    )
}

export default Input