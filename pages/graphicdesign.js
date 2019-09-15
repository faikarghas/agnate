import React, { Component } from 'react'
import HeaderLayout from '../components/layout'
import {Container,Row,Col} from 'react-bootstrap'

import '../sass/main.scss'


export default class graphicdesign extends Component {

    render() {
        return (
            <React.Fragment>
            <HeaderLayout height="100vh">
                    <section className="section_header-arc">
                        <div className="centerThis">
                            <Container>
                                <Row>
                                    <Col xs={12}>
                                            <p>Graphic Design Work Flow</p>
                                            <div className="img-box">
                                                <img src="../static/images/grap.png" alt="flowimg" width="100%"/>
                                            </div>
                                            <Row>
                                                <Col xs={3}>
                                                    <h2>Graphic Design <br/> .</h2>
                                                </Col>
                                                <Col xs={9}>
                                                    <p className="bd-bt">As Undergraduates the Founders of AgNaTe started as freelance designers in their own companies and focused in their own areas of <br/> practice. As they graduated they learned from a short term experience about the growth of the <br/>4 creative industry and how it a ected the social phenomenon that we see and feel today.</p>
                                                </Col>
                                            </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </section>
            </HeaderLayout>
            <main>
                <section className="section_first-arc">
                    <Container fluid>
                        <Row>
                            <Col xs={12}>
                                <h2>Works</h2>
                            </Col>
                            <Col xs={12} className="mb-5">
                                <div className="box-img">
                                    <img alt="img1" src="../../static/images/grap/satu.png" width="100%"/>
                                    <p className="title">Priskop</p>
                                    <p className="subTitle">Jakarta, Indonesia</p>
                                </div>
                            </Col>
                            <Col xs={12} className="mb-5">
                                <div className="box-img">
                                    <img alt="img1" src="../../static/images/grap/dua.png" width="100%"/>
                                    <p className="title">Priskop</p>
                                    <p className="subTitle">Jakarta, Indonesia</p>
                                </div>
                            </Col>
                            <Col xs={12} className="mb-5">
                                <div className="box-img">
                                    <img alt="img1" src="../../static/images/grap/tiga.png" width="100%"/>
                                    <p className="title">360 Goods</p>
                                    <p className="subTitle">Jakarta, Indonesia</p>
                                </div>
                            </Col>
                            <Col xs={12} className="mb-5">
                                <div className="box-img">
                                    <img alt="img1" src="../../static/images/grap/empat.png" width="100%"/>
                                    <p className="title">360 Goods</p>
                                    <p className="subTitle">Jakarta, Indonesia</p>
                                </div>
                            </Col>
                            <Col xs={12} className="mb-5">
                                <div className="box-img">
                                    <img alt="img1" src="../../static/images/grap/lima.png" width="100%"/>
                                    <p className="title">Maywild</p>
                                    <p className="subTitle">Cinere, Indonesia</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </React.Fragment>
        )
    }
}
