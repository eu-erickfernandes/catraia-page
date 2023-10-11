import Head from "next/head"
import "../styles/reset.css"
import "../styles/global.css"

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Catraia Soluções Ambientais</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}


export default App