import {NotFoundContainer, Img, Paragraph, Heading} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <Img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Paragraph>
      We are sorry, the page you requested could not be found
    </Paragraph>
  </NotFoundContainer>
)

export default NotFound
