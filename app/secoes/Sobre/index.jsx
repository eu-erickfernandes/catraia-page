import styles from './Sobre.module.css'

const Sobre = () => {
    return(
        <section id='sobre' className={ styles.sobre }>
            <header className={ styles.sobre__imagemMobile }>
                <h2 className='secao__titulo'>Um pouco da nossa história</h2>
            </header>

            <img className={ styles.sobre__imagem } src='./foto-equipe.png' alt='Foto da equipe da Catraia' loading='lazy'/>

            <main className={ styles.sobre__principal }>
                <h2 className={ `secao__titulo ${ styles.sobre__titulo }` }>Um pouco da nossa história</h2>

                <img className={ styles.sobre__icone } src='./icones-sobre/clock.svg' alt='Ícone' loading='lazy'/>
                <p className={ styles.sobre__paragrafo }>Desde 2020, vabilizamos atividades voltadas ao desenvolvimento socioeconômico, ambiental e gestão sustentável dos recursos naturais.</p>

                <img className={ styles.sobre__icone } src='./icones-sobre/compass.svg' alt='Ícone' loading='lazy'/>
                <p className={ styles.sobre__paragrafo }>Realizamos projetos com foco em sociobiodiversidade, estudos de licenciamento ambiental, inventário florestal, monitoramento e levantamento da fauna, educação ambiental, treinamentos, capacitações e oficinas participativas, além de relatórios e produtos técnicos ambientais.</p>

                <img className={ styles.sobre__icone } src='./icones-sobre/hands.svg' alt='Ícone' loading='lazy'/>
                <p className={ styles.sobre__paragrafo }>Movidos pela ética e compromisso no desempenho das nossas funções, priorizamos o respeito à vida em quaisquer circustâncias.</p>
            </main>
        </section>
    )
}

export default Sobre