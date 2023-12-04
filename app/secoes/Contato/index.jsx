import ContainerLinksRedes from './ContainerLinksRedes'
import LinkInstagram from './LinkInstagram'
import styles from './Contato.module.css'
import Input from '@/componentes/Input'
import Botao from '@/componentes/Botao'

const Contato = () => {
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
                    <LinkInstagram />
                    <ContainerLinksRedes/>
                </div>
            </div>
        </section>
    )
}

export default Contato