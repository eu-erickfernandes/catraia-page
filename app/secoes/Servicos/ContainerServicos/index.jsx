import { Fragment } from 'react'
import CardServico from './CardServico'
import styles from './ContainerServicos.module.css'
import ModalServico from './ModalServico'

const ContainerServicos = ({ dialog }) => {
    const json = require('./servicos.json')
    const servicos = json.servicos

    return(
        <div className={ styles.containerServicos }>
            { servicos.map((servico) => (
                <Fragment key={ servico.id }>
                    <CardServico 
                        id={ servico.id }
                        nome={ servico.nome }
                        srcImg={ servico.srcImg }
                        srcIcone={ servico.srcIcone }
                        lista={ servico.lista }
                    />

                    {dialog == servico.id &&
                        <ModalServico
                            nome={ servico.nome }
                            icone={ servico.srcIcone }
                            texto={ servico.texto }
                        />
                    }
                </Fragment>
            )) }
        </div>
    )
}

export default ContainerServicos