import Botao from "../Botao"
import styles from './SecaoHero.module.css'

const SecaoHero = () => {
    return(
        <section  className={ styles.hero }>
            <header className={ styles.cabecalho }>
                <h1>
                    <img className={ styles.cabecalho__icone } loading='lazy' src="./logo.svg"/>
                </h1>

                <nav>
                    <ul className={ styles.cabecalho__lista }>
                        <li><a href='#sobre'>Sobre nós</a></li>
                        <li>•</li>
                        <li><a href='#servicos'>Serviços</a></li>
                        <li>•</li>
                        <li><a href='#endereco'>Endereço</a></li>
                    </ul>
                </nav>

                <a className={ styles.cabecalho__botao } href="#contato">
                    <Botao>Fale concosco</Botao>
                </a>
            </header>

            <main className={ styles.principal }>
                <div className={ styles.principal__aux }></div>
                
                <div className={ styles.principal__titulos }>
                    <h2 className={ styles.titulo }>Cuidando do seu negócio<br/>e do Meio Ambiente</h2>
                    <h2 className={ styles.tituloMobile }>Cuidando do seu<br/>negócio e do<br/>Meio Ambiente</h2>
                    <p className={ styles.subtitulo }>Conheça o nosso portifólio de serviços para apoiar empresas<br/>em suas iniciativas de sustentabilidade.</p>
                    <p className={ styles.subtituloMobile }>Conheça o nosso portifólio de serviços<br/>para apoiar empresas em suas<br/>iniciativas de sustentabilidade.</p>
                </div>
                
                <div className={ styles.principal__botoes }>
                    <a href="#contato">
                        <Botao>Fale concosco</Botao>
                    </a>
                    
                    <a href="#servicos">
                        <Botao secundario>Conheça os nossos serviços</Botao>
                    </a>
                </div>
            </main>
        </section>
    )
}

export default SecaoHero