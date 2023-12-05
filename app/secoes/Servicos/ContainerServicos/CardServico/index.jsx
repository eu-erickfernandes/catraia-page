import Link from 'next/link'
import styles from './CardServico.module.css'
import iconeItem from './item-lista.svg'
import Botao from '@/componentes/Botao'

const CardServico = ({ id, nome, srcImg, srcIcone, lista }) => {
    return (
        <div className={ styles.cardServico }>
            <div className={ styles.servico__conteudo }>
                <img className={ styles.servico__imagem } src={ srcImg } alt={ nome } loading='lazy'/>
                
                <div className={ styles.servico__containerTitulo }>
                    <img className={ styles.servico__icone } src={ srcIcone } alt={ nome } loading='lazy'/>
                    <h3 className={ styles.servico__nome }>{ nome }</h3>
                </div>

                <ul className={ styles.servico__lista }>
                    { lista.map((item) => (
                        <li key={ item }>
                            <img src={ iconeItem.src } alt='Serviço' loading='lazy'/>
                            { item }
                        </li>
                    )) }
                </ul>
            </div>

            <div className={ styles.servico__rodape }>
                <Link href={`/?dialog=${id}`} scroll={false}>
                    <Botao secundario>Ver mais</Botao>
                </Link>
            </div>
        </div>
    )
}

export default CardServico