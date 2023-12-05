import LinkRede from "./LinkRede"
import styles from './ContainerLinksRedes.module.css'

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
                rede="linkedin"
                url="https://br.linkedin.com/in/catraia-solu%C3%A7%C3%B5es-ambientais-282202212"
            />

            <LinkRede
                rede="email"
                url="mailto:catraia.ambiental@gmail.com"
            />
        </div>
    )
}

export default ContainerLinksRedes