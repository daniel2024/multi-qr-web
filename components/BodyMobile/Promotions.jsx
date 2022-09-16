import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Button from '../button';
import { SCREEN_KEY_MOBILE } from './';
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
`;

const ContainerScroll = styled.div`
display: flex;
flex-direction: row;
column-gap: 10px;
margin-bottom: 32px;
overflow-x: scroll;
padding: 0px 10px;
width: 100%;
height: 116px;
`;

const ContainerImage = styled.div`
background-color: #f2f2f2;
`;


const Promotions = ({ goToPage }) => {

    const handleOpenMenu = () => {
        window.open("https://www.starbucks.com.ar/menu","__blank");
    }

    const handleOpenReservas = () => {
        window.open("https://pedicafe.com.ar/search/type/pickup/address/-34.5465691,-58.4587003","__blank");
    }

  return (
    <ContainerPromotions>
      <div
        style={{ display: 'flex', flexDirection: 'row', marginBottom: '16px' }}
      >
        <Label>PROMOCIONES PAGANDO CON</Label>
        <Image alt="logo" src="/MODO-logo.svg" width={48} height={11} />
      </div>
      <ContainerScroll>
          <img alt="promo1" src="/promo1.svg"/>
          <img alt="promo2" src="/promo2.svg"/>
      </ContainerScroll>
      <ContainerButtons>
        <Button
          label={'Metodo De Pago'}
          onClick={() => goToPage(SCREEN_KEY_MOBILE.PAYMENT_METHODS)}
        />
        <Button label={'Carta'} onClick={handleOpenMenu}/>
        <Button label={'Reservas'} onClick={handleOpenReservas}/>
      </ContainerButtons>
    </ContainerPromotions>
  );
};

export default Promotions;
