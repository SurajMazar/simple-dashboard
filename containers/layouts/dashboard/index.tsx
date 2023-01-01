
import React,{ PropsWithChildren } from 'react'

const Dashboard: React.FC<PropsWithChildren<{}>>  = (props) => {

    /**
     * COMPONENT PROPS
     */
    const {children} = props

    return (
        <>This is dashboard {children}</>
    )
}

export default Dashboard