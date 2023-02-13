import React, { Children } from 'react'

const mensaje = ({children,tipo}) => {
    return (
        <div className={`alerta ${tipo}`}>{children}</div>
    )
}

export default mensaje
