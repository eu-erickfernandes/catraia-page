import styles from './LinkRede.module.css'

const LinkRede = ({ rede, url }) => {
    const className = `${ styles.linkRede } ${ styles[rede] }`
    
    return(
        <a className={ className } href={ url } target='_blank'>
            <img className={ styles.rede__icone } src={`./icones-redes/${rede}.svg`} alt={`Ícone ${rede}`} loading='lazy' />
        </a>
    )
}

export default LinkRede