import styles from './Botao.module.css'

const Botao = ({ children, secundario }) => {
    const className = secundario ? `${ styles.botao } ${ styles.secundario }` : `${ styles.botao }`
    
    return (
        <button className={ className }>{ children }</button>
    )
}

export default Botao