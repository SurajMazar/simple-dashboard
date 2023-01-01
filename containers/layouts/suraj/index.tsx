
import React,{ PropsWithChildren } from 'react'

const Suraj: React.FC<PropsWithChildren<{}>>  = (props) => {

    /**
     * COMPONENT PROPS
     */
    const {children} = props

    return (
        <>This is from suraj layout {children}</>
    )
}

export default Suraj