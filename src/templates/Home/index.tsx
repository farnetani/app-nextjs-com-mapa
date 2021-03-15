import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Viagens da Família Farnetani"
        description="Aplicação web que mostra no mapa os lugares que eu fui com minha família e algumas fotos e informações que queremos guardar de recordação."
        canonical="https://viagens.farnetani.com.br"
        openGraph={{
          url: 'https://viagens.farnetani.com.br',
          title: 'Viagens da Família Farnetani',
          description:
            'Aplicação web que mostra no mapa os lugares que eu fui com minha família e algumas fotos e informações que queremos guardar de recordação',
          images: [
            {
              url: 'https://minhasviagens.farnetani.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Viagens da Família Farnetani'
            }
          ],
          site_name: 'Viagens da Família Farnetani'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
