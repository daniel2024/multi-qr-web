import React from 'react';
import styled from 'styled-components';
import Button from '../button'


const ContainerDrawer = styled.div`
width: 331px;
height: calc(100% - 90px);
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
/* identical to box height, or 133% */

text-align: center;

/* Tertiary/Gray-60% */

color: #717171;
`

const Drawer = () => {
    return (
        <ContainerDrawer>
            <ContainerStoreData>
                <AvatarStore src='https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg' />
                <NameStore>Starbucks</NameStore>
                <Category>Cafeteria</Category>
            </ContainerStoreData>

            <ContainerButtons>
                <Button label="Medios de Pago" onClick={() => { }} />
                <Button label="Carta" onClick={() => { }} />
                <Button label="Reservas" onClick={() => { }} />
            </ContainerButtons>
        </ContainerDrawer>
    )
}

export default Drawer