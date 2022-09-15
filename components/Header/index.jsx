import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';


const ContainerHeader = styled.div`
background: #2E3849;
height: 90px;
width: 100%;
display: flex;
padding: 0 3rem;
justify-content: space-between;
`
const ContainerAvatarStore = styled.div`
display: flex;
align-items: center;

`
const LabelStore = styled.p`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
text-align: right;
margin-right: 0.5rem;
color: #FFFFFF;
`
const ImageStore = styled.img`
height: 40px;
width: 40px;
border-radius: 50%;
`

const AvatarStore = ({nameStore, imageStore})=>{
    return (   
        <ContainerAvatarStore>
            <LabelStore>{nameStore}</LabelStore>
            <ImageStore src={imageStore} alt="Avatar Store" />
        </ContainerAvatarStore>
    )
}


const Header = () => {
    return (
        <ContainerHeader>
            <Image src="/MODO-logo.svg" alt="Modo Logo" width={139} height={32} />
            <AvatarStore nameStore="Starbucks" imageStore="https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg" />
        </ContainerHeader>
    )
}

export default Header