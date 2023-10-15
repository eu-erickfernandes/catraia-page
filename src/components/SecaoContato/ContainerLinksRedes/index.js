import LinkRede from "./LinkRede"
import styles from './ContainerLinksRedes.module.css'

const ContainerLinksRedes = () => {
    return(
        <div className={ styles.containerLinkRedes }>
            <LinkRede
                rede="whatsapp"
                url="#"
            />

            <LinkRede
                rede="email"
                url="#"
            />
        </div>
    )
}

export default ContainerLinksRedes