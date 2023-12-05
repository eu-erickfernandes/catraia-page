'use client'

import { useRouter } from 'next/navigation'
import styles from './ModalServico.module.css'
import Link from 'next/link'

const ModalServico = ({ nome, texto, icone }) => {
    const router = useRouter()
    
    const className = `${ styles.modalServico } backdrop`

    const fechaModal = (e) => {
        e.target.classList.contains('backdrop') ? router.push('/', {scroll: false}) : null
    }

    return(
        <div className={ className } onClick={ fechaModal }>
            <div className={ styles.modal__conteudo }>
                <Link
                    className={ styles.modal__fechar } 
                    href='/' 
                    scroll={ false }
                >
                    <img src="./icones-servicos/fechar.svg" alt="" />
                </Link>

                <div className={ styles.conteudo__cabecalho }>
                    <img className={ styles.servico__icone } src={ icone  } alt={ nome } />
                    <h4 className={ styles.servico__nome }>{ nome }</h4>
                </div>

                {texto.map((paragrafo, index) => (
                    <p key={ index } className={ styles.servico__paragrafo }>{ paragrafo }</p>
                ))}
            </div>
        </div>
    )
}

export default ModalServico