import styles from './Mapa.module.css'
import pin from './pin.svg'

const Mapa = () => {
    return (
        <a href="https://maps.app.goo.gl/eVhx5xjTafipePmL7" target='_blank'>
            <section className={ styles.mapa } id='endereco'>
                <div className={ styles.mapa__containerTitulo }>
                    <img className={ styles.mapa__icone } src={ pin.src } alt='Endereço' loading='lazy'/>
                    <h2 className="secao__titulo">Nosso endereço</h2>
                </div>

                <div className={ styles.mapa__endereco }>
                    <p>Rua General Vieira de Melo, 588</p>
                    <p>•</p>
                    <p>Conjunto Esperança</p>
                    <p>•</p>
                    <p>Rio Branco - AC</p>
                </div>
            </section>
        </a>
    )
}

export default Mapa