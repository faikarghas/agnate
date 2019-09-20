import React from 'react'
import HeaderLayout from '../components/layout'
import {Container,Row,Col} from 'react-bootstrap'
import Link from 'next/link'
import { Tween, Timeline } from 'react-gsap';

import '../sass/main.scss'


class Index  extends React.Component {

    state = {
        trans : 0,
        play1 : 'stop',
        play2 : 'stop',
        play3 : 'stop',
        play4 : 'stop',
        play5 : 'stop'
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = ()=> {
        let valueScroll = window.scrollY
        let valueScroll2 = Math.ceil(window.scrollY*10)

        if(valueScroll){
            this.setState({
                trans : valueScroll / 7,
            })
        }

        if(valueScroll2 >= 3000 && valueScroll2 <= 8000){
            this.setState({
                play1 : 'play',
            })
        } else if (valueScroll2 >= 8000 && valueScroll2 <= 13000){
            this.setState({
                play2 : 'play',
            })
        } else if (valueScroll2 >= 14000 && valueScroll2 <= 19000){
            this.setState({
                play3 : 'play',
            })
        } else if (valueScroll2 >= 19000 && valueScroll2 <= 23000){
            this.setState({
                play4 : 'play',
            })
        } else if (valueScroll2 >= 23500 && valueScroll2 <= 29000){
            this.setState({
                play5 : 'play',
            })
        }
    }

    render(){
        const {trans,play1,play2,play3,play4,play5} = this.state
        return (
            <React.Fragment>
                <HeaderLayout height="100vh" color="#231f20">
                    <Link href="/project/[slug]" as="/project/elchino">
                    <a className="header-ct" style={{display:'block'}}>
                    <section className="section_header-home">
                        <Container fluid>
                            <Row>
                                <Col xs={12} md={4} className="left-title">
                                    <Timeline
                                        target={
                                            <h2>
                                                El Chino<br/>
                                                Brand Identity<br/>
                                                .
                                            </h2>
                                        }
                                    >
                                        <Tween from={{y:'50px',opacity:0}} to={{ y: '0',opacity:1}} delay={.5} />
                                    </Timeline>
                                </Col>
                                <Col xs={12} md={4} className="mid-img">
                                    <Timeline
                                        target={
                                            <img src="../static/images/elchino.png" alt="elchino" width="100%" style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}}/>
                                        }
                                    >
                                        <Tween from={{y:'-50px',opacity:0}} to={{ y: '0',opacity: 1 }} delay={.5}/>
                                    </Timeline>
                                </Col>
                                <Col xs={12} md={4} className="right-desc">
                                    <Timeline
                                            target={
                                                <p>El chino is an Asian - Spanish Restaurant<br/>
                                                that serves Asian delicacies with a touch of<br/>
                                                European - Mediterranean influence which<br/>
                                                perfectly indulges the Indonesian palate.<br/>
                                                Using only the best local ingredients with<br/>
                                                the best chefs, consumers can embark on a<br/>
                                                culinary journey at an afordable price in their<br/>
                                                own home.
                                            </p>
                                            }
                                        >
                                        <Tween from={{x:'50px'}} to={{ x: '0' }} delay={.5} />
                                    </Timeline>
                                </Col>
                            </Row>
                        </Container>
                        <div className="border-center">
                            <Row>
                                <Col xs={2} md={1} className="centerThis"><p>El chino</p></Col>
                                <Col xs={8} md={10} className="centerThis">
                                    <Timeline
                                        target={
                                            <div className="bd"></div>
                                        }
                                        duration={2}
                                    >
                                        <Tween from={{css:{width:'0'}}} to={{css:{width:'100%'}}} delay={.7} />
                                    </Timeline>
                                </Col>
                                <Col xs={2} md={1} className="centerThis"><p >Indonesia</p></Col>
                            </Row>
                        </div>
                    </section>
                    </a>
                    </Link>
                </HeaderLayout>
                <main>
                    <section className="section_first-home">
                        <Container fluid>
                            <Row>
                                <Col md={8} className="mb-5">
                                    <Tween from={{y:'140px',opacity:0}} to={{ y: '0',opacity:1}}  playState={`${play1}`}>
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/LandscapePrimavera.png" width="100%" />
                                            <p className="title">Landscape Primavera</p>
                                            <p className="subTitle">Bumi Serpond Damai, Indonesia</p>
                                        </div>
                                    </Tween>
                                </Col>
                                <Col md={4} className="mb-5">
                                    <Tween from={{y:'140px',opacity:0}} to={{ y: '0',opacity:1}}  playState={`${play1}`} delay={.1}>
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/Priskop.png" width="100%" />
                                            <p className="title" onClick={this.test}>Priskop</p>
                                            <p className="subTitle">Jakarta, Indonesia</p>
                                        </div>
                                    </Tween>
                                </Col>
                                <Col md={2} className="mb-5">
                                    <Tween from={{y:'140px',opacity:0}} to={{ y: '0',opacity:1}}  playState={`${play2}`} delay={.3}>
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/Sixty.png" width="100%" />
                                            <p className="title">Sixty Two Coffee</p>
                                            <p className="subTitle">Senopati, Indonesia</p>
                                        </div>
                                    </Tween>
                                </Col>
                                <Col md={10} className="mb-5">
                                    <Tween from={{y:'140px',opacity:0}} to={{ y: '0',opacity:1}}  playState={`${play2}`} delay={.1}>
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/Blues.png" width="100%" />
                                            <p className="title">Blues</p>
                                            <p className="subTitle">Personal Project</p>
                                        </div>
                                    </Tween>
                                </Col>
                                <Col md={8} className="mb-5">
                                    <Tween from={{y:'140px',opacity:0}} to={{ y: '0',opacity:1}}  playState={`${play3}`} delay={.3}>
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/Sungay.png" width="100%" />
                                            <p className="title">Sungay Teja</p>
                                            <p className="subTitle">Kalimantan, Indonesia</p>
                                        </div>
                                    </Tween>
                                </Col>
                                <Col md={4} className="mb-5">
                                    <Tween from={{y:'140px',opacity:0}} to={{ y: '0',opacity:1}}  playState={`${play3}`} delay={.3}>
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/360.png" width="100%" />
                                            <p className="title">360 Goods</p>
                                            <p className="subTitle">Jakarta, Indonesia</p>
                                        </div>
                                    </Tween>
                                </Col>
                                <Col md={5} className="mb-5">
                                    <Tween from={{y:'140px',opacity:0}} to={{ y: '0',opacity:1}}  playState={`${play4}`} delay={.3}>
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/Villa.png" width="100%" />
                                            <p className="title">Villa Cinere Mas</p>
                                            <p className="subTitle">Cinere, Indonesia</p>
                                        </div>
                                    </Tween>
                                </Col>
                                <Col md={7} className="mb-5">
                                    <Tween from={{y:'140px',opacity:0}} to={{ y: '0',opacity:1}}  playState={`${play4}`} delay={.1}>
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/Eltra.png" width="100%" />
                                            <p className="title">Eltra</p>
                                            <p className="subTitle">Kemang, Indonesia</p>
                                        </div>
                                    </Tween>
                                </Col>
                                <Col md={9} className="mb-5">
                                    <Tween from={{y:'140px',opacity:0}} to={{ y: '0',opacity:1}}  playState={`${play5}`} delay={.1}>
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/Maywild.png" width="100%" />
                                            <p className="title">Maywild</p>
                                            <p className="subTitle">Cinere, Indonesia</p>
                                        </div>
                                    </Tween>
                                </Col>
                                <Col md={3} className="mb-5">
                                    <Tween from={{y:'140px',opacity:0}} to={{ y: '0',opacity:1}}  playState={`${play5}`} delay={.3}>
                                        <div className="box-img">
                                            <img alt="lanscape" src="../static/images/LandscapePrimavera2.png" width="100%" />
                                            <p className="title">Landscape Primavera</p>
                                            <p className="subTitle">Bumi Serpong Damai, Indonesia</p>
                                        </div>
                                    </Tween>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
            </React.Fragment>
        )
    }
}

export default Index