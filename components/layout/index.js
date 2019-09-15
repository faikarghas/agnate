import React from 'react'
import Header from './header'

const index = (props) => {
    return (
        <React.Fragment>
            <Header/>
            {props.children}
        </React.Fragment>
    )
}

export default index
