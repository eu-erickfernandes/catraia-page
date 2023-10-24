import LinkRede from "./LinkRede"
import styles from './ContainerLinksRedes.module.css'

// TODO
// -Corrigir a responsividade dos links de rede
const ContainerLinksRedes = () => {
    return(
        <div className={ styles.containerLinkRedes }>
            <LinkRede
                rede="instagram"
                url="https://www.instagram.com/catraia.ambiental/"
            />

            <LinkRede
                rede="whatsapp"
                url="https://whatsa.me/5568992085791"
            />

            <LinkRede
                rede="email"
                url="mailto:catraia.ambiental@gmail.com"
            />
        </div>
    )
}

export default ContainerLinksRedes