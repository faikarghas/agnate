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
                        <img src="../static/images/elchino.png" alt="elchino"/>
                    </section>
                </main>
            </BaseLayout>
        </React.Fragment>
    )
}

export default index