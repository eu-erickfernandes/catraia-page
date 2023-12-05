import Hero from "./secoes/Hero"
import Servicos from "./secoes/Servicos"
import Sobre from "./secoes/Sobre"
import Mapa from "./secoes/Mapa"
import Contato from "./secoes/Contato"

const Home = ({ searchParams }) => {
  const dialog = searchParams.dialog

  return (
    <>
      <Hero />
      <Sobre />
      <Servicos dialog={ dialog } />
      <Mapa />
      <Contato />
    </>
  )
}

export default Home