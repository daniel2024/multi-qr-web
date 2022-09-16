import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import useDevices from '../../hooks/useDevices';

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
  position: relative;
  align-items: center;
  padding: 0px 10px ;
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
  text-align: left;
  color: #121212;
  margin-left: 10px;
`;

const MethodPayment = () => {

    const { isIOS } = useDevices()

    const handleOnClickMP = () => {
        if (isIOS) {
            window.open("https://mpago.la/1YcDSgQ");

         } else {
            window.open("https://mpago.la/pos/1483701");
        }

    };

    const onClickMODO = () => {
        if (isIOS) {
            window.open("https://assets.mobile.playdigital.com.ar/pago-ecommerce-modo?qr=00020101021141320018ar.com.modo.prisma0106PRISMA50150011202759296715126002207202089880000009094865204970053030325802AR5915JOSE+LUIS+TURCO6007CAPITAL623003045541101120275929671110352263048A82&callback=modo.com.ar&callbackSuccess=modo.com.ar");

         } else {
            window.open("intent://assets.mobile.playdigital.com.ar/pago-ecommerce-modo?qr=00020101021141320018ar.com.modo.prisma0106PRISMA50150011202759296715126002207202089880000009094865204970053030325802AR5915JOSE+LUIS+TURCO6007CAPITAL623003045541101120275929671110352263048A82&callback=modo.com.ar&callbackSuccess=modo.com.ar#Intent;scheme=https;package=com.playdigital.modo;end");
        }
    }

    return (
        <ContainerButtons>
            <ButtonPayment onClick={onClickMODO}>
                <div
                    style={{

                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    <Image src="/modo-icon.svg" alt="Modo Logo" width={36} height={36} />
                    <NameModo> MODO</NameModo>
                    <div style={{
                        position: 'absolute',
                        right: '46px',
                    }}>
                        <Image src="/promo-tooltip.svg" alt="next" width={71} height={22} />
                    </div>
                    <div style={{
                        position: 'absolute',
                        right: '0px',
                    }} ><Image src="/next.svg" alt="next" width={36} height={36} />
                    </div>
                </div>
            </ButtonPayment>
            <ButtonPayment onClick={handleOnClickMP} >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        position: 'relative',

                    }}
                >
                    <Image src="/mp-icon.svg" alt="MP Logo" width={36} height={36} />
                    <NameModo> Mercado Pago </NameModo>
                    <div style={{
                        position: 'absolute',
                        right: '0px',
                    }} >
                        <Image src="/next.svg" alt="next" width={36} height={36} />
                    </div>
                </div>
            </ButtonPayment>
            <ButtonPayment>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    <Image
                        src="/cuentadni-icon.svg"
                        alt="MP Logo"
                        width={36}
                        height={36}
                    />
                    <NameModo> Cuenta DNI </NameModo>
                    <div style={{
                        position: 'absolute',
                        right: '0px',
                    }} >
                        <Image src="/next.svg" alt="next" width={36} height={36} />
                    </div>
                </div>
            </ButtonPayment>
        </ContainerButtons>
    );
};

export default MethodPayment;
