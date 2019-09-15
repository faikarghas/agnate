import React, { Component } from 'react'
import HeaderLayout from '../../components/layout'
import {Container,Row,Col} from 'react-bootstrap'

import '../../sass/main.scss'


export default class project extends Component {

    render() {
        return (
            <React.Fragment>
            <HeaderLayout color="#f9eedc"/>
            <main>
                <div className="section_first-project">
                    <Container>
                        <Row>
                            <Col xs={12} md={6} className="ai-ends">
                                <div className="title">
                                    <Row>
                                        <Col xs={2}><p>01-06-2018</p></Col>
                                        <Col xs={10}><h2>El Chino<br/>Brand Identity<br/>.</h2></Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="desc">
                                    <ul>
                                        <li><p>Designer</p></li>
                                        <li><div className="bd"></div></li>
                                        <li><p>Muhammad Adriel Reyhan</p></li>
                                    </ul>
                                    <ul>
                                        <li><p>Designer</p></li>
                                        <li><div className="bd"></div></li>
                                        <li><p>Muhammad Adriel Reyhan</p></li>
                                    </ul>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <p>El chino is an Asian - Spanish Restaurant that serves Asian delicacies with a<br/>touch of European - Mediterranean influence which perfectly indulges the<br/>Indonesian palate. Using only the best local ingredients with the best chefs,<br/>consumers can embark on a culinary journey at an afordable price in their own<br/>home.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section_second-project">
                    <Container>
                        <Row>
                            <Col xs={12} md={12} className="">
                                <img src="../../static/images/prj/satu.png" width="100%"/>
                                <img src="../../static/images/prj/dua.png" width="40%"/>
                                <img src="../../static/images/prj/tiga.png" width="40%"/>
                                <img src="../../static/images/prj/empat.png" width="100%"/>
                                <img src="../../static/images/prj/lima.png" width="85%"/>
                                <img src="../../static/images/prj/enam.png" width="100%"/>
                                <img src="../../static/images/prj/tujuh.png" width="85%"/>
                                <img src="../../static/images/prj/delapan.png" width="100%"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section_third-project">
                    <Container>
                        <Row>
                            <Col xs={12} md={6} className=""></Col>
                            <Col xs={12} md={6} className="desc-2">
                                <p>To complement the perfection of El Chino’s well- balanced menu, the<br/>restaurant has collaborated with Jakarta’s brewing professional, Publichood Cofee<br/>shop to create a divine ambiance for visionary salarymen as to support a<br/>better working environment. With a combination of two of Jakarta’s nest, El<br/>Chino may as well have become one of the go to places in Indonesia’s city of<br/>prosperous dreams.</p>
                            </Col>
                            <Col xs={12} className="nav-project">
                                <ul>
                                    <li><a>Next</a></li>
                                    <li><a>Home</a></li>
                                    <li><a>Architecture</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main>
        </React.Fragment>
        )
    }
}
