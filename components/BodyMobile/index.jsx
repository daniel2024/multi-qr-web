import React from 'react';
import styled from 'styled-components';
import Promotions from './Promotions';
import PaymentMethods from './MethodPayment';

export const SCREEN_KEY_MOBILE = {
    PROMOTION: "PROMOTION",
    PAYMENT_METHODS: "PAYMENT_METHODS",
}

const BodyMobile = ({ actualScreen = SCREEN_KEY_MOBILE.PAYMENT_METHODS }) => {
    return (
        <>
            {actualScreen === SCREEN_KEY_MOBILE.PROMOTION && <Promotions />}
            {actualScreen === SCREEN_KEY_MOBILE.PAYMENT_METHODS && <PaymentMethods />}
        </>
    )
}

export default BodyMobile