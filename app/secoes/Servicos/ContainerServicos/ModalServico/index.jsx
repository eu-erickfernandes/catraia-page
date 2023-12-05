'use client'

import { useRouter } from 'next/navigation'
import styles from './ModalServico.module.css'

const ModalServico = ({ nome, texto }) => {
    const router = useRouter()
    
    const className = `${ styles.modalServico } backdrop`

    const fechaModal = (e) => {
        e.target.classList.contains('backdrop') ? router.push('/', {scroll: false}) : null
    }

    return(
        <div className={ className } onClick={ fechaModal }>
            <div className={ styles.modal__conteudo }>

                <h4 className={ styles.servico__nome }>{ nome }</h4>

                {texto.map((paragrafo, index) => (
                    <p key={ index } className={ styles.servico__paragrafo }>{ paragrafo }</p>
                ))}
            </div>
        </div>
    )
}

export default ModalServico