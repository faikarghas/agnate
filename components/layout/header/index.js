import React, { useState } from 'react';
import Link from 'next/link'
import {Container,Row,Col} from 'react-bootstrap'

const index = (props) => {
    const [open, setstate] = useState(false)

    let show = ''

    if(open === true){
         show = 'visible'
    } else {
         show = ''
    }

    return (
        <header style={{height:`${props.height}`,backgroundColor:`${props.color}`}}>
            <nav>
                <Container fluid>
                    <Row>
                        <Col xs={5} md={5} className="logo-side"><Link href="/"><a>Ag-Na-Te</a></Link></Col>
                        <Col xs={7} md={7} className="right-side">
                            <ul style={{listStyle:'none'}}>
                                <li><Link><a>About</a></Link></li>
                                <li><Link href="/graphicdesign"><a>Graphic Design</a></Link></li>
                                <li><Link href="/architecture"><a>Architecture</a></Link></li>
                                <li><Link><a>Construction</a></Link></li>
                                <li><Link><a>Contact</a></Link></li>
                            </ul>
                        </Col>
                        <Col xs={7} md={7} className="menu-mobile">
                            <div id="nav-icon3" className={open ? 'open' : ''} onClick={() => setstate(!open)}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={`menu-popup ${show}`}>
                    <Container fluid>
                        <Row>
                            <Col xs={5} md={5} className="logo-side"><Link href="/"><a>Ag-Na-Te</a></Link></Col>
                            <Col xs={7} md={7} className="menu-mobile">
                                <div id="nav-icon3" className={open ? 'open' : ''} onClick={() => setstate(!open)}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <ul style={{listStyle:'none'}}>
                                    <li><Link><a>About</a></Link></li>
                                    <li><Link href="/graphicdesign"><a>Graphic Design</a></Link></li>
                                    <li><Link href="/architecture"><a>Architecture</a></Link></li>
                                    <li><Link><a>Construction</a></Link></li>
                                    <li><Link><a>Contact</a></Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </nav>
            {props.children}
        </header>
    )
}

export default index
