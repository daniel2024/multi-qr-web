import React from 'react';
import styled from 'styled-components';

const ContainerButtons = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
row-gap: 23px;
`;

const ButtonPayment = styled.button`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
background: #F8F8F8;
border-radius: 20px;
border:hidden;
width: 328px;
height: 60px;
`;


const MethodPayment = () => {
    return (
        <ContainerButtons>
            <ButtonPayment>
                Modo
            </ButtonPayment>
            <ButtonPayment>
                Modo
            </ButtonPayment>
            <ButtonPayment>
                Modo
            </ButtonPayment>

        </ContainerButtons>
    )
}

export default MethodPayment