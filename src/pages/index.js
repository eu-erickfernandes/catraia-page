import SecaoHero from "@/components/SecaoHero"
import SecaoServicos from "@/components/SecaoServicos"
import SecaoSobre from "@/components/SecaoSobre"
import SecaoMapa from "@/components/SecaoMapa"
import SecaoContato from "@/components/SecaoContato"

// TODO
// -Icone da aba
// -Formulario e e-mail funcionar 

const Home = () => {
  return (
    <>
      <SecaoHero/>
      <SecaoSobre/>
      <SecaoServicos/>
      <SecaoMapa/>
      <SecaoContato/>
    </>
  )
}

export default Home