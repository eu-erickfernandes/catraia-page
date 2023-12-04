import styles from './Cabecalho.module.css'

const Cabecalho = () => {
    return(
        <header className={ styles.cabecalho }>
            <h1>
                <img className={ styles.cabecalho__icone } loading='lazy' src="./logo.svg"/>
            </h1>

            <menu className={ styles.cabecalho__menuNav }>
                <li>
                    <a href='#sobre'>Sobre nós</a>
                </li>

                <li>•</li>

                <li>
                    <a href='#servicos'>Serviços</a>
                </li>

                <li>•</li>

                <li>
                    <a href='#endereco'>Endereço</a>
                </li>

                <li>•</li>

                <li>
                    <a href='#contato'>Fale conosco</a>
                </li>
            </menu>

            <menu className={ styles.cabecalho__menuRedes }>
                <li>
                    <a href="#" target='_blank'>
                        <img src="./icones-redes/whatsapp.svg" alt="" />
                    </a>
                </li>

                <li>
                    <a href="#" target='_blank'>
                        <img src="./icones-redes/instagram.svg" alt="" />
                    </a>
                </li>
            </menu>
        </header>
    )
}

export default Cabecalho