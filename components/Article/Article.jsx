import { articleStyles as stls } from './articleStyles'
import { Container, Row, Column, Link, Image } from 'postonents'

const Article = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row alignment='center'>
        <Column style={stls.column} alignment='center'>
          <p style={stls.title} alignment='center'>
            Скидка под елку или как устроены <br /> новогодние распродажи
          </p>
          <p style={stls.p}>
            Казалось бы, какие распродажи может принести Новый год, когда <br />
            основной удар по ценам наносится во время Черной Пятницы или перед{' '}
            <br />
            католическим Рождеством?
          </p>
          <Link href={'https://ipo.msk.ru'} style={stls.btn}>
            <span style={stls.link}>Перейти к статье</span>
          </Link>
        </Column>
      </Row>
    </Container>
  )
}

export default Article
