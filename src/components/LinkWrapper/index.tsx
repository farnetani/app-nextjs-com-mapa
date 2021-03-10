import Link from 'next/link' // O link do next é melhor que o "a" pq ele faz o prefetch (tempinho curso que ele já tá baixando)
import * as S from './styles'

// O type é mais simples que interface e é melhor utilizar o type do que interface
type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)

export default LinkWrapper
