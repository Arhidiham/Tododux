import React from 'react'

function TodoLine(props) {
    return (
        <div>
            <input type="checkbox" value="" />
            <span>{props.text}</span>
        </div>
    )
}

export default TodoLine