import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

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
  background: #f8f8f8;
  border-radius: 20px;
  border: hidden;
  width: 328px;
  height: 60px;
`;

const NameModo = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #121212;
`;

const MethodPayment = () => {
  return (
    <ContainerButtons>
      <ButtonPayment>
        <div
          style={{
            marginRight: '18px',
            display: 'flex',
            flexDirection: 'row',
            gap: '45px',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image src="/modo-icon.svg" alt="Modo Logo" width={36} height={36} />
          <NameModo> Modo</NameModo>
          <Image src="/promo-tooltip.svg" alt="next" width={71} height={22} />
          <Image src="/next.svg" alt="next" width={36} height={36} />
        </div>
      </ButtonPayment>
      <ButtonPayment>
        <div
          style={{
            marginRight: '18px',
            display: 'flex',
            flexDirection: 'row',
            gap: '85px',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image src="/mp-icon.svg" alt="MP Logo" width={36} height={36} />
          <NameModo> Mercado Pago </NameModo>
          <Image src="/next.svg" alt="next" width={36} height={36} />
        </div>
      </ButtonPayment>
      <ButtonPayment>
        <div
          style={{
            marginRight: '18px',
            display: 'flex',
            flexDirection: 'row',
            gap: '85px',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/cuentadni-icon.svg"
            alt="MP Logo"
            width={36}
            height={36}
          />
          <NameModo> Cuenta DNI </NameModo>
          <Image src="/next.svg" alt="next" width={36} height={36} />
        </div>
      </ButtonPayment>
    </ContainerButtons>
  );
};

export default MethodPayment;
