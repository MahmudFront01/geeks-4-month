import React from 'react'

function Props(props) {
    return (
        <>
            <p style={{color: 'blue'}}>User: {props.name}</p>
            <p style={{color: 'red'}}>Age: {props.age}</p>
        </>
    )
}

export default Props