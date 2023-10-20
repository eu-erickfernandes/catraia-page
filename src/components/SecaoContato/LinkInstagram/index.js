import styles from './LinkInstagram.module.css'

const LinkInstagram = () => {
    return(
        <a className={ styles.linkInstagram } href='https://www.instagram.com/catraia.ambiental/' target='_blank'>
            <img className={ styles.link__icone } src='./icones-redes/instagram.svg' alt='Ícone'/>
        </a>
    )
}

export default LinkInstagram