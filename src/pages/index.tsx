import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '2',
          name: 'reykjavik',
          slug: 'reykjavik',
          location: {
            latitude: 45,
            longitude: -10
          }
        }
      ]}
    />
  )
}
