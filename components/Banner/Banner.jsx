import { bannerStyles as stls } from './bannerStyles'
import { Container, Row, Column, Link } from 'postonents'

const Banner = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <div style={stls.fullwidth}>
            <p style={stls.title}>
              20 января 2022 <br />
              ЧТО НЕЛЬЗЯ ПРОПУСТИТЬ!
            </p>
            <p style={stls.p}>
              <span style={stls.pHighlight}>
                Здравствуйте, спешим поздравить вас с началом 2022 года.
              </span>{' '}
              <br />
              Инвестиции в себя – самый надёжный объект капиталовложения. <br />
              (Бенджамин Франклин)
            </p>
            <p style={stls.pAlt}>
              Начинаем 2022 год с правильной мотивации вложений в себя, <br />{' '}
              <span style={stls.pAltHighlight}>20 января</span> в Институте
              профессионального образования <br /> открывается учебный год и
              личный кабинет ждет своих студентов
            </p>
            <p style={stls.pBottom}>Старт нового учебного года</p>
            <Link
              href={'https://ipo.msk.ru/?utm_campaign=email&term=oldNewYears'}
              style={stls.btn}>
              <span style={stls.link}>Выбрать профессию</span>
            </Link>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Banner
