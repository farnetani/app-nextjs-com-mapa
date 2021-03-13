import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const PageTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} arial-label="Home" />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Do elit ut excepteur duis cillum dolore nulla. Enim dolor ad anim non
        voluptate. Sunt amet ut in commodo. Eu ex deserunt sit commodo nulla
        nostrud cupidatat commodo qui. Velit est proident non laboris. Mollit
        adipisicing voluptate ex minim enim dolor dolor veniam velit. Ex
        reprehenderit eiusmod anim minim laboris excepteur non ea sunt. Labore
        magna duis nostrud esse adipisicing. Ex excepteur officia voluptate
        laborum minim proident ea dolore eu sit mollit non cillum. Excepteur
        velit mollit laboris exercitation excepteur adipisicing ipsum consequat
        culpa dolore. Cupidatat eiusmod exercitation ex laborum. Proident
        commodo occaecat exercitation proident mollit dolore occaecat quis
        cillum. Lorem sint ipsum fugiat sint cillum aute labore incididunt ea
        excepteur. Aliquip proident esse dolore fugiat occaecat occaecat
        proident ut sunt ex ea ad voluptate proident.
      </p>
    </S.Body>
  </S.Content>
)

export default PageTemplate
