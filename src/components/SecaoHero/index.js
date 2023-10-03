import Botao from "../Botao"

const SecaoHero = () => {
    return(
        <section>
            <header>
                <h1>
                    SEÇÃO HERO
                    {/* <img /> */}
                </h1>

                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Sobre nós</a></li>
                    <li><a href='#'>Serviços</a></li>
                    <li><a href='#'>Serviços</a></li>
                </ul>

                <Botao>Fale concosco</Botao>
            </header>

            <main>
                <div>
                    <h2>Cuidando do seu negócio e do Meio Ambiente</h2>
                    <p>Conheça o nosso portifólio de serviços para apoiar empresas em suas iniciativas de sustentabilidade.</p>
                </div>

                <div>
                    <Botao>Fale concosco</Botao>
                    <Botao>Conheça os nossos serviços</Botao>
                </div>
            </main>
        </section>
    )
}

export default SecaoHero