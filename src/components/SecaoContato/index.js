import Botao from '../Botao'
import Input from '../Input'
import ContainerLinksRedes from './ContainerLinksRedes'
import styles from './SecaoContato.module.css'

// TODO
// -compontentizar o link do instagram
// -Hover do link do instagram
// -Colocar bg image do link e o icone dentro

const SecaoContato = () => {
    return(
        <section className={ styles.contato } id="contato">
            <h2 className={ `secao__titulo ${ styles.contato__titulo }` }>Fale concosco</h2>

            <div className={ styles.contato__container }>
                <form className={ styles.contato__formulario }>
                    <h3 className={ styles.contato__subtitulo }>Diretamente para o nosso e-mail</h3>
                    
                    <Input 
                        name="nome" 
                        type="text" 
                        label="Nome completo" 
                        placeholder="Ex: Franklin Farias" 
                        required
                    />
                    
                    <Input 
                        name="email" 
                        type="email" 
                        label="E-mail" 
                        placeholder="Ex: franklinfarias@gmail.com" 
                        required
                    />
                    
                    <Input 
                        name="mensagem" 
                        type="textarea" 
                        label="Sua mensagem" 
                        required
                    />

                    <Botao>Enviar</Botao>
                </form>

                <div className={ styles.contato__redes }>
                    <a href='https://www.instagram.com/catraia.ambiental/' target='_blank'>
                        <img className={ styles.linkInstagram } src='./instagram.png' alt='Instagram'/>
                    </a>

                    <ContainerLinksRedes/>
                </div>
            </div>

        </section>
    )
}

export default SecaoContato