import React, { useState } from 'react'
import style from 'styled-components';
import Header from '../Header';
import Drawer from '../Drawer';
import Tab,{SCREEN_KEY} from '../Tab'

const ContainerDesktop = style.div`
height: 100vh;
width: 100vw;
background: #fff;
position: fixed;
@media screen and (max-width: 768px) {
    display: none;
}
`
const ContainerBody = style.div`
display: flex;
flex-direction: row;
height: calc(100% - 90px);
`


const Desktop = () => {

    const [screeSelected, setscreeSelected] = useState(SCREEN_KEY.PROMOTION);

    return (
        <ContainerDesktop>
            <Header />
            <ContainerBody>
                <Drawer />
                <Tab screenSelected={screeSelected} />
            </ContainerBody>
        </ContainerDesktop>
    )
}

export default Desktop