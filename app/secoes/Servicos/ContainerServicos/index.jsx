import CardServico from './CardServico'
import styles from './ContainerServicos.module.css'

// TODO
// - Fazer modais
const ContainerServicos = () => {
    const json = require('./servicos.json')
    const servicos = json.servicos

    return(
        <div className={ styles.containerServicos }>
            { servicos.map((servico) => (
                <CardServico 
                    key={ servico.nome }
                    nome={ servico.nome }
                    srcImg={ servico.srcImg }
                    srcIcone={ servico.srcIcone }
                    lista={ servico.lista }
                />
            )) }
        </div>
    )
}

export default ContainerServicos