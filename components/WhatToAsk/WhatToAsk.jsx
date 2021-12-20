import { whatToAskStyles as stls } from './whatToAskStyles'
import { Container, Row, Column, Link } from 'postonents'

const WhatToAsk = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row style={stls.fullwidth}>
        <Column style={stls.column}>
          <div style={stls.fullwidth}>
            <p style={stls.p} align='center'>
              Праздник <span style={stls.highlight}>«Нового года»</span> родом
              из детства. <br /> Каждый год - это письма Деду Морозу и подарки
              под ёлкой. <br /> Классная была традиция, не правда ли?
            </p>
            <p style={stls.p} align='center'>
              Предлагаем вспомнить о ней! Выбирайте, что попросить <br /> у
              «ИПО» Мороза в <span style={stls.highlight}>2022 году</span>, и
              становитесь ближе к заветной цели:
            </p>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default WhatToAsk
