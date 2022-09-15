import React from 'react';
import HeaderMobile from '../HeaderMobile';
import BodyMobile from '../BodyMobile'
import styled from 'styled-components';
import Image from 'next/image';
const Container = styled.div`
position: fixed;
height: 100vh;
width: 100vw;
display: block;
margin: 0px auto;

`;
const FooterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

position: absolute;
bottom: 40px;
left: calc(50% + 91px/2 - 91px);
`;

const LabelFooter = styled.div`
width: 67px;
height: 15px;
left: 154px;
top: 728px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #000000;
`;

const Mobile = () => {

    const [screen, setScreen] = React.useState()

  return (
    <Container>
        <HeaderMobile/>
        <BodyMobile/>
        <FooterContainer>
            <LabelFooter>powered by</LabelFooter>
            <Image src={"/MODO-logo.svg"} width={91} height={21}/>
        </FooterContainer>
    </Container>
  )
}

export default Mobile