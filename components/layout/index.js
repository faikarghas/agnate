import React from 'react'
import Header from './header'

const index = (props) => {
    return (
        <React.Fragment>
            <Header children={props.children} height={props.height} color={props.color}/>
        </React.Fragment>
    )
}

export default index
