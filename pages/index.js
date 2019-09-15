import React from 'react'
import HeaderLayout from '../components/layout'
import {Container,Row,Col} from 'react-bootstrap'
import Link from 'next/link'

import '../sass/main.scss'

const index = () => {
    return (
        <React.Fragment>
            <HeaderLayout height="100vh" color="#231f20">
                <section className="section_header-home">
                    <Container>
                        <Row>
                            <Col xs={4} className="left-title">
                                <h2>
                                    El Chino<br/>
                                    Brand Identity<br/>
                                    .
                                </h2>
                            </Col>
                            <Col xs={12} md={4} className="mid-img">
                                <img src="../static/images/elchino.png" alt="elchino" width="100%"/>
                            </Col>
                            <Col xs={12} md={4} className="right-desc">
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
                            <Col xs={2} md={1} className="centerThis"><p>El chino</p></Col>
                            <Col xs={8} md={10} className="centerThis"><div className="bd"></div></Col>
                            <Col xs={2} md={1} className="centerThis"><p>Indonesia</p></Col>
                        </Row>
                    </div>
                </section>
            </HeaderLayout>
            <main>
                <section className="section_first-home">
                    <Container fluid>
                        <Row>
                            <Col md={8} className="mb-5">
                                <Link href="/project/[slug]" as="/project/elchino">
                                    <a className="toDetail">
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/LandscapePrimavera.png" width="100%" />
                                            <p className="title">Landscape Primavera</p>
                                            <p className="subTitle">Bumi Serpond Damai, Indonesia</p>
                                        </div>
                                    </a>
                                </Link>
                            </Col>
                            <Col md={4} className="mb-5">
                                <Link href="/project/[slug]" as="/project/elchino">
                                    <a className="toDetail">
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/Priskop.png" width="100%" />
                                            <p className="title">Priskop</p>
                                            <p className="subTitle">Jakarta, Indonesia</p>
                                        </div>
                                    </a>
                                </Link>
                            </Col>
                            <Col md={2} className="mb-5">
                                <Link href="/project/[slug]" as="/project/elchino">
                                    <a className="toDetail">
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/Sixty.png" width="100%" />
                                            <p className="title">Sixty Two Coffee</p>
                                            <p className="subTitle">Senopati, Indonesia</p>
                                        </div>
                                    </a>
                                </Link>
                            </Col>
                            <Col md={10} className="mb-5">
                                <Link href="/project/[slug]" as="/project/elchino">
                                    <a className="toDetail">
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/Blues.png" width="100%" />
                                            <p className="title">Blues</p>
                                            <p className="subTitle">Personal Project</p>
                                        </div>
                                    </a>
                                </Link>
                            </Col>
                            <Col md={8} className="mb-5">
                                <Link href="/project/[slug]" as="/project/elchino">
                                    <a className="toDetail">
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/Sungay.png" width="100%" />
                                            <p className="title">Sungay Teja</p>
                                            <p className="subTitle">Kalimantan, Indonesia</p>
                                        </div>
                                    </a>
                                </Link>
                            </Col>
                            <Col md={4} className="mb-5">
                                <Link href="/project/[slug]" as="/project/elchino">
                                    <a className="toDetail">
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/360.png" width="100%" />
                                            <p className="title">360 Goods</p>
                                            <p className="subTitle">Jakarta, Indonesia</p>
                                        </div>
                                    </a>
                                </Link>
                            </Col>
                            <Col md={5} className="mb-5">
                                <Link href="/project/[slug]" as="/project/elchino">
                                    <a className="toDetail">
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/Villa.png" width="100%" />
                                            <p className="title">Villa Cinere Mas</p>
                                            <p className="subTitle">Cinere, Indonesia</p>
                                        </div>
                                    </a>
                                </Link>
                            </Col>
                            <Col md={7} className="mb-5">
                                <Link href="/project/[slug]" as="/project/elchino">
                                    <a className="toDetail">
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/Eltra.png" width="100%" />
                                            <p className="title">Eltra</p>
                                            <p className="subTitle">Kemang, Indonesia</p>
                                        </div>
                                    </a>
                                </Link>
                            </Col>
                            <Col md={9} className="mb-5">
                                <Link href="/project/[slug]" as="/project/elchino">
                                    <a className="toDetail">
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/Maywild.png" width="100%" />
                                            <p className="title">Maywild</p>
                                            <p className="subTitle">Cinere, Indonesia</p>
                                        </div>
                                    </a>
                                </Link>
                            </Col>
                            <Col md={3} className="mb-5">
                                <Link href="/project/[slug]" as="/project/elchino">
                                    <a className="toDetail">
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/LandscapePrimavera2.png" width="100%" />
                                            <p className="title">Landscape Primavera</p>
                                            <p className="subTitle">Bumi Serpong Damai, Indonesia</p>
                                        </div>
                                    </a>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </React.Fragment>
    )
}

export default index