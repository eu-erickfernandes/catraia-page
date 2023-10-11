import Botao from "../Botao"
import styles from './SecaoHero.module.css'

const SecaoHero = () => {
    return(
        <section  className={ styles.hero }>
            <header className={ styles.cabecalho }>
                <h1>
                    <img src="./logo.svg"/>
                </h1>

                <nav>
                    <ul className={ styles.cabecalho__lista }>
                        <li><a href='#'>Home</a></li>
                        <li>•</li>
                        <li><a href='#'>Sobre nós</a></li>
                        <li>•</li>
                        <li><a href='#'>Serviços</a></li>
                    </ul>
                </nav>

                <Botao>Fale concosco</Botao>
            </header>

            <main className={ styles.principal }>
                <div className={ styles.principal__titulos }>
                    <h2>Cuidando do seu negócio<br/>e do Meio Ambiente</h2>
                    <p>Conheça o nosso portifólio de serviços para apoiar empresas<br/>em suas iniciativas de sustentabilidade.</p>
                </div>
                
                <div className={ styles.principal__botoes }>
                    <Botao>Fale concosco</Botao>
                    <Botao secundario>Conheça os nossos serviços</Botao>
                </div>
            </main>
        </section>
    )
}

export default SecaoHero