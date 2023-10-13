import ContainerServicos from './ContainerServicos'
import styles from './SecaoServicos.module.css'

const SecaoServicos = () => {
    return(
        <section id='servicos' className={ styles.servicos }>
            <div className={ styles.servicos__containerTitulo }>
                <h2 className={ `secao__titulo ${ styles.servicos__titulo }` }>Nossos serviços</h2>
                <p className={ styles.servicos__subtitulo }>Encontre no nosso portifólio a solução ideal para você</p>
            </div>

            <ContainerServicos />
        </section>
    )
}

export default SecaoServicos