import styles from './LinkRede.module.css'

const LinkRede = ({ rede, url }) => {
    const className = `${ styles.linkRede } ${rede}`
    return(
        <a className={ className } href={ url }>
            <img className={ styles.rede__icone } src={`./icones-redes/${rede}.svg`} alt={`Ícone ${rede}`} />
        </a>
    )
}

export default LinkRede