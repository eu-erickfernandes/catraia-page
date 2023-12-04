import ContainerServicos from './ContainerServicos'
import styles from './Servicos.module.css'

const Servicos = () => {
    return(
        <section id='servicos' className={ styles.servicos }>
            <div className={ styles.servicos__containerTitulo }>
                <h2 className={ `secao__titulo ${ styles.servicos__titulo }` }>Nossos serviços</h2>
            </div>

            <ContainerServicos />
        </section>
    )
}

export default Servicos