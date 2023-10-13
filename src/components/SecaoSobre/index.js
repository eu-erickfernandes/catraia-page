import styles from './SecaoSobre.module.css'

const SecaoSobre = () => {
    return(
        <section id='sobre' className={ styles.sobre }>
            <img className={ styles.sobre__imagem } src='./foto-equipe.png' alt='Foto da equipe da Catraia' />

            <main className={ styles.sobre__principal }>
                <h2 className={ `secao__titulo ${ styles.sobre__titulo }` }>Um pouco da nossa história</h2>

                <p>Desde 2020, vabilizamos atividades voltadas ao desenvolvimento socioeconômico, ambiental e gestão sustentável dos recursos naturais.</p>

                <p>Realizamos projetos com foco em sociobiodiversidade, estudos de licenciamento ambiental, inventário florestal, monitoramento e levantamento da fauna, educação ambiental, treinamentos, capacitações e oficinas participativas, além de relatórios e produtos técnicos ambientais.</p>

                <p>Movidos pela ética e compromisso no desempenho das nossas funções, priorizamos o respeito à vida em quaisquer circustâncias.</p>
            </main>
        </section>
    )
}

export default SecaoSobre