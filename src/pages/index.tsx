import dynamic from 'next/dynamic'
import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map
      // places={[
      //   {
      //     id: '2',
      //     name: 'reykjavik',
      //     slug: 'reykjavik',
      //     location: {
      //       latitude: 45,
      //       longitude: -10
      //     }
      //   }
      // ]}
      />
    </>
  )
}
