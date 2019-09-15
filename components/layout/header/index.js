import React from 'react'
import Link from 'next/link'
import {Container,Row,Col} from 'react-bootstrap'

const index = () => {
    return (
        <header>
            <Container fluid>
                <Row>
                    <Col md={5} className="logo-side"><h1>Ag-Na-Te</h1></Col>
                    <Col md={7} className="right-side">
                        <ul style={{listStyle:'none'}}>
                            <li><Link><a>About</a></Link></li>
                            <li><Link><a>Graphic Design</a></Link></li>
                            <li><Link><a>Architecture</a></Link></li>
                            <li><Link><a>Construction</a></Link></li>
                            <li><Link><a>Contact</a></Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default index
