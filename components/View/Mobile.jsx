import React from 'react';
import HeaderMobile from '../HeaderMobile';
import BodyMobile from '../BodyMobile'
import styled from 'styled-components';
import Image from 'next/image';
import { SCREEN_KEY_MOBILE } from '../BodyMobile'
const Container = styled.div`
position: fixed;
height: 100vh;
width: 100vw;
display: block;
margin: 0px auto;
@media screen and (min-width: 768px) {
    display: none;
}

`;
const FooterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: end;
padding-bottom: 20px;

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

const ContainerScreen = styled.div`
display: grid;
grid-template-columns: 100%;
height: 100%;
grid-template-rows: 1fr auto 1fr;

`;

const Mobile = () => {

    const [screen, setScreen] = React.useState(SCREEN_KEY_MOBILE.PROMOTION);

    const handleBack = () => {
        setScreen(SCREEN_KEY_MOBILE.PROMOTION);
    };

    return (
        <Container>
            <ContainerScreen >
                <HeaderMobile onChangeBack={handleBack} viewBack={SCREEN_KEY_MOBILE.PROMOTION !== screen} />
                <BodyMobile actualScreen={screen} goToPage={setScreen} />
                <FooterContainer>
                    <LabelFooter>powered by</LabelFooter>
                    <Image src={"/MODO-logo.svg"} width={91} height={21} alt={"modo-logo"} />
                </FooterContainer>
            </ContainerScreen>
        </Container>
    )
}

export default Mobile