import React from 'react';
import styled from 'styled-components';
import Button from '../button';
import IconButton from '../button/IconButton';
import Image from 'next/image'


const ContainerDrawer = styled.div`
width: 331px;
height: 100%;
box-shadow: 0px 4px 20px 0px #0000001C;
padding-left: 33px;
padding-right: 44px;
padding-top: 40px;
`;

const ContainerButtons = styled.div`
display: flex;
flex-direction: column;
row-gap: 23px;
`;

const AvatarStore = styled.img`
 height: 60px; 
 width: 60px;
`;

const ContainerStoreData = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 71px;
`;

const NameStore = styled.span`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
text-align: center;
color: #121212;
`;

const Category = styled.p`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
text-align: center;
color: #717171;
margin: 0px;
`
const TextLocation = styled.p`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #121212;
`
const ContainerLocation = styled.div`
display: flex;
flex-direction: row;
`;

const ContainerSocialButtons = styled.div`
display: flex;
flex-direction: row;
column-gap: 10px;
`;

const Drawer = () => {

    const openWhatsapp = () => {
        window.open("https://api.whatsapp.com/send/?phone=%2B5491132563412&text&type=phone_number&app_absent=0","_blank");
    };

    return (
        <ContainerDrawer>
            <ContainerStoreData>
                <AvatarStore src='https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg' />
                <NameStore>Starbucks</NameStore>
                <Category>Cafeteria</Category>
                <ContainerLocation>
                    <Image src="/IconLocation.svg" alt="Modo Logo" width={20} height={20} />
                    <TextLocation>Av. Siempre Viva 742</TextLocation>
                </ContainerLocation>
                <ContainerSocialButtons>
                    <Image style={{cursor:"pointer"}} src="/icFacebook.svg" alt="Modo Logo" width={20} height={20} />
                    <Image style={{cursor:"pointer"}} src="/icInsta.svg" alt="Modo Logo" width={20} height={20} />
                    <Image style={{cursor:"pointer"}} src="/icTwiter.svg" alt="Modo Logo" width={20} height={20} />
                </ContainerSocialButtons>
                <div style={{display:"flex", columnGap:"5px", marginTop:"18px"}}>
                    <IconButton onClick={openWhatsapp} srcIcon="/icWhatsapp.svg" label="Contactar" />
                    <IconButton srcIcon="/icPass.svg" label="Clave WIFI" />
                </div>

            </ContainerStoreData>

            <ContainerButtons>
                <Button label="Medios de Pago" onClick={ ()=>{}} />
                <Button label="Carta" onClick={() => { }} />
                <Button label="Reservas" onClick={() => { }} />
            </ContainerButtons>
        </ContainerDrawer>
    )
}

export default Drawer