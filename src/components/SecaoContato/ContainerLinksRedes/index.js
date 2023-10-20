import LinkRede from "./LinkRede"
import styles from './ContainerLinksRedes.module.css'

// TODO
// -Corrigir a responsividade dos links de rede
const ContainerLinksRedes = () => {
    return(
        <div className={ styles.containerLinkRedes }>
            <LinkRede
                rede="instagram"
                url="#"
            />

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