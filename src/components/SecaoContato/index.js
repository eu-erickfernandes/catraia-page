import styles from './SecaoContato.module.css'

// TODO
// -Colocar a imagem e ajustar num container

const SecaoContato = () => {
    return(
        <section className={ styles.contato } id="contato">
            <h2 className={ `secao__titulo ${ styles.contato__titulo }` }>Fale concosco</h2>

            <form className={ styles.contato__formulario }>
                <h3 className={ styles.contato__subtitulo }>Diretamente para o nosso e-mail</h3>

                <div>
                    <label>Nome completo</label>
                    <input />
                </div>

                <div>
                    <label>E-mail</label>
                    <input />
                </div>

                <div>
                    <label>Sua mensagem</label>
                    <textarea></textarea>
                </div>

                <button>Enviar</button>
            </form>
        </section>
    )
}

export default SecaoContato