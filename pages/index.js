import React from 'react'
import BaseLayout from '../components/layout'
import {Container,Row,Col} from 'react-bootstrap'

import '../sass/main.scss'

const index = () => {
    return (
        <React.Fragment>
            <BaseLayout>
                <main>
                    <section className="section_first-home">
                        <Container>
                            <Row>
                                <Col xs={4} className="left-title">
                                    <h2>
                                        El Chino<br/>
                                        Brand Identity<br/>
                                        .
                                    </h2>
                                </Col>
                                <Col xs={4}>
                                    <img src="../static/images/elchino.png" alt="elchino"/>
                                </Col>
                                <Col xs={4}>
                                    <p>El chino is an Asian - Spanish Restaurant<br/>
                                        that serves Asian delicacies with a touch of<br/>
                                        European - Mediterranean influence which<br/>
                                        perfectly indulges the Indonesian palate.<br/>
                                        Using only the best local ingredients with<br/>
                                        the best chefs, consumers can embark on a<br/>
                                        culinary journey at an afordable price in their<br/>
                                        own home.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                        <div className="border-center">
                            <Row>
                                <Col xs={1} className="centerThis"><p>El chino</p></Col>
                                <Col xs={10} className="centerThis"><div className="bd"></div></Col>
                                <Col xs={1} className="centerThis"><p>Indonesia</p></Col>
                            </Row>
                        </div>
                    </section>
                </main>
            </BaseLayout>
        </React.Fragment>
    )
}

export default index