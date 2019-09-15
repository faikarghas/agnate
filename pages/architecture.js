import React, { Component } from 'react'
import BaseLayout from '../components/layout'
import {Container,Row,Col} from 'react-bootstrap'

import '../sass/main.scss'


export default class architecture extends Component {

    render() {
        return (
            <React.Fragment>
            <BaseLayout>
                <main>
                    <section className="section_first-arc">
                        <div className="centerThis">
                            <Container>
                                <Row>
                                    <Col xs={12}>
                                            <p>Architecture Work Flow</p>
                                            <div className="img-box">
                                                <img src="../static/images/home.png" alt="flowimg" width="100%"/>
                                            </div>
                                            <Row>
                                                <Col xs={3}>
                                                    <h2>Architecture</h2>
                                                </Col>
                                                <Col xs={9}>
                                                    <p className="bd-bt">As Undergraduates the Founders of AgNaTe started as freelance designers in their own companies and focused in their own areas of <br/>practice. As they graduated they learned from a short term experience about the growth of the <br/>4 creative industry and how it a ected the social phenomenon that we see and feel today.</p>
                                                </Col>
                                            </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </section>
                </main>
            </BaseLayout>
        </React.Fragment>
        )
    }
}
