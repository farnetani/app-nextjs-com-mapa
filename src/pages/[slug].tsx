import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { useRouter } from 'next/dist/client/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  // retorna um loading, qq coisa enquanto tá sendo criado
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
// export default About

// getStaticPaths : serve para gerar as urls em build time, exemplo: /about ou /trip/petropolis
// getStaticProps : serve para buscar dados da página (props), exemplo um heading, um body, lembrando que é um build time = estático
// getServerSideProps : serve para buscar dados da página (props) = runtime = toda requisição

// # Pouca gente utiliza
// getInitialProps : serve para buscar dados da página (props) - runtime - toda requisição (bundle também vem para o client). Nele é possível ter as coisas que vc fala pra fazer no server, ter no client. Se tiver algumas outras coisas de lógica pelo client, ele já trás isso pra agente. Permite o que chamamos de hidrate. (POUCAS PESSOAS UTILIZAM, está caindo em desuso).
