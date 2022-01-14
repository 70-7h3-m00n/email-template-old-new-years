import { articleStyles as stls } from './articleStyles'
import { Container, Row, Column, Link, Image } from 'postonents'

const Article = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row alignment='center'>
        <Column style={stls.column} alignment='center'>
          <p style={stls.title} alignment='center'>
            Откуда взялся и зачем нужен <br />
            Старый Новый год?
          </p>
          <p style={stls.p}>
            Новый год в России начинают отмечать 31 декабря, промежуточным{' '}
            <br /> этапом выступает Рождество 7 января, а заканчивают 14 января,
            встречая <br /> Старый Новый год. Но почему вообще есть такой
            праздник <br />
            как Старый Новый год и почему именно 14 января?
          </p>
          <Link
            href={'https://ipo.msk.ru/?utm_campaign=email&term=oldNewYears'}
            style={stls.btn}>
            <span style={stls.link}>Перейти к статье</span>
          </Link>
        </Column>
      </Row>
    </Container>
  )
}

export default Article
