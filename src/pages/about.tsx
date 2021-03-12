import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import AboutTemplate from 'templates/About'

// const About = () => <AboutTemplate />

export default function AboutPage() {
  return <AboutTemplate />
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)
  console.log(pages)
  return {
    props: {}
  }
}

// export default About

// getStaticPaths : serve para gerar as urls em build time, exemplo: /about ou /trip/petropolis
// getStaticProps : serve para buscar dados da página (props), exemplo um heading, um body, lembrando que é um build time = estático
// getServerSideProps : serve para buscar dados da página (props) = runtime = toda requisição

// # Pouca gente utiliza
// getInitialProps : serve para buscar dados da página (props) - runtime - toda requisição (bundle também vem para o client). Nele é possível ter as coisas que vc fala pra fazer no server, ter no client. Se tiver algumas outras coisas de lógica pelo client, ele já trás isso pra agente. Permite o que chamamos de hidrate. (POUCAS PESSOAS UTILIZAM, está caindo em desuso).
