import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Button from '../button'
const ContainerPromotions = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
flex-direction: column;
`;

const Label = styled.label`
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 18px;
color: #717171;
margin-right: 10px;
`;

const ContainerButtons = styled.div`
display: flex;
width: 100%;
flex-direction: column;
row-gap: 23px;
align-items: center;
align-content: center;
flex-direction: column;
`

const Promotions = () => {
    return (
        <ContainerPromotions>
            <div style={{ display: "flex", flexDirection: "row", marginBottom: "32px" }} >
                <Label>PROMOCIONES PAGANDO CON</Label>
                <Image alt='logo' src="/MODO-logo.svg" width={48} height={11} />
            </div>
            <ContainerButtons>
                <Button label={"Metodo De Pago"} onClick={() => { }} />
                <Button label={"Carta"} onClick={() => { }} />
                <Button label={"Reservas"} onClick={() => { }} />
            </ContainerButtons>

        </ContainerPromotions>
    )
}

export default Promotions