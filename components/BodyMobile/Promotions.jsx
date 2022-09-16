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

const Promotions = ({ goToPage }) => {
  return (
    <ContainerPromotions>
      <div
        style={{ display: 'flex', flexDirection: 'row', marginBottom: '32px' }}
      >
        <Label>PROMOCIONES PAGANDO CON</Label>
        <Image alt="logo" src="/MODO-logo.svg" width={48} height={11} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '10px',
          marginBottom: '32px',
          overflow: 'hidden',
        }}
      >
        <div>
          <Image alt="logo" src="/promo1.svg" width={350} height={116} />
        </div>
        <div>
          <Image alt="logo" src="/promo2.svg" width={350} height={116} />
        </div>
      </div>
      <ContainerButtons>
        <Button
          label={'Metodo De Pago'}
          onClick={() => goToPage(SCREEN_KEY_MOBILE.PAYMENT_METHODS)}
        />
        <Button label={'Carta'} onClick={() => {}} />
        <Button label={'Reservas'} onClick={() => {}} />
      </ContainerButtons>
    </ContainerPromotions>
  );
};

export default Promotions;
