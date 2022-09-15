import React from 'react'
import style from 'styled-components';
import Header from '../Header'
import Drawer from '../Drawer'

const ContainerDesktop = style.div`
height: 100vh;
width: 100vw;
background: #fff;
position: fixed;
`


const Desktop = () => {
  return (
    <ContainerDesktop>
        <Header/>
        <Drawer/>
    </ContainerDesktop>
  )
}

export default Desktop