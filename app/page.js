import Hero from "./secoes/Hero"
import Servicos from "./secoes/Servicos"
import Sobre from "./secoes/Sobre"
import Mapa from "./secoes/Mapa"
import Contato from "./secoes/Contato"

const Home = () => {
  return (
    <>
      <Hero />
      <Sobre />
      <Servicos />
      <Mapa />
      <Contato />
    </>
  )
}

export default Home