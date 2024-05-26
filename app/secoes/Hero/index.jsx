import Botao from "@/componentes/Botao"
import styles from './Hero.module.css'
import Cabecalho from "./Cabecalho"
import Image from "next/image"

const Hero = () => {
    const imageStyle = {
        objectFit: 'cover', 
        objectPosition: 'center',
        zIndex: '-1'
    }

    return(
        <section  className={ styles.hero }>
            <Image
                alt="Imagem de fundo"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkE+b4DwABagEiQgOlogAAAABJRU5ErkJggg=="
                fill={true}
                placeholder="blur"
                priority={true}
                src='/fundo.png'
                style={imageStyle}
            />

            <Cabecalho />
            
            <main className={ styles.principal }>
                <div className={ styles.principal__aux }></div>
                
                <div className={ styles.principal__titulos }>
                    <h2 className={ styles.titulo }>Conservando a natureza,<br/>conectando comunidades e<br/>inspirando um futuro sustentável</h2>
                    <h2 className={ styles.tituloMobile }>Conservando a natureza, conectando comunidades e inspirando um futuro sustentável</h2>

                    <p className={ styles.subtitulo }>Conheça o nosso portfólio de serviços para apoiar empresas<br/>em suas iniciativas de sustentabilidade.</p>
                    <p className={ styles.subtituloMobile }>Conheça o nosso portfólio de serviços<br/>para apoiar empresas em suas<br/>iniciativas de sustentabilidade.</p>
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

export default Hero