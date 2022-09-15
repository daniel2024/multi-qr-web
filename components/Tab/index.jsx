import React from 'react';
import Promotion from './Promotion'

export const SCREEN_KEY = {
    PROMOTION: "PROMOTION",
    PAYMENT_METHODS: "PAYMENT_METHODS",
}

const Tab = ({ screenSelected }) => {
    return (
        <>
        {SCREEN_KEY.PROMOTION === screenSelected&&<Promotion/>}
        </>
    )
}

export default Tab