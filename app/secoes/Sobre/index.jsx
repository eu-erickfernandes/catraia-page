import Image from 'next/image'
import styles from './Sobre.module.css'

const Sobre = () => {
    return(
        <section id='sobre' className={ styles.sobre }>
            <header className={ styles.sobre__imagemMobile }>
                <h2 className='secao__titulo'>Um pouco da nossa história</h2>
            </header>

            <Image
                alt='Equipe Catraia'
                className={ styles.sobre__imagem }
                height={1000}
                quality={100}
                src='/foto-equipe.png'
                width={1000}
            />

            <main className={ styles.sobre__principal }>
                <h2 className={ `secao__titulo ${ styles.sobre__titulo }` }>Um pouco da nossa história</h2>

                <img className={ styles.sobre__icone } src='./icones-sobre/clock.svg' alt='Ícone' loading='lazy'/>
                <p className={ styles.sobre__paragrafo }>Desde 2020 viabilizamos atividades voltadas ao desenvolvimento socioeconômico, ambiental e gestão sustentável dos recursos naturais.</p>

                <img className={ styles.sobre__icone } src='./icones-sobre/compass.svg' alt='Ícone' loading='lazy'/>
                <p className={ styles.sobre__paragrafo }>Realizamos projetos com foco em estudos socioambientais, licenciamento ambiental, inventário florestal, monitoramento e levantamento da fauna, educação ambiental, treinamentos, capacitações e oficinas participativas, além de relatórios e produtos técnicos ambientais.</p>

                <img className={ styles.sobre__icone } src='./icones-sobre/hands.svg' alt='Ícone' loading='lazy'/>
                <p className={ styles.sobre__paragrafo }>Movidos pela ética e compromisso no desempenho das nossas funções, priorizamos o respeito à vida em quaisquer circustâncias.</p>
            </main>
        </section>
    )
}

export default Sobre