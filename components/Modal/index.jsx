import React from 'react';
import styled from 'styled-components';


const ContainerModal = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
`;

const ModalPass = styled.div`
    background: #fff;
    height: 288px;
    width: 328px;
    z-index: 1;
    border-radius: 20px;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 24px;
    position: relative;
    `;

const LabelModal = styled.label`
display: flex;

justify-content: center;
align-items: center;
padding: 16px ;
background: #1BBB9B;
width: 248px;
height: 56px;
border-radius: 18px;
color: #fff;
`;
const ButtonClose = styled.button`
border: hidden;
position: absolute;
top: 20px;
right: 25px;
width: 38px;
height: 38px;
border-radius: 15px;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
`;


const Modal = ({ open, close }) => {
    return (<>
        {open &&
            <ContainerModal>
                <ModalPass>
                    <ButtonClose onClick={close}>x</ButtonClose>
                    <LabelModal>Wifi: MODO</LabelModal>

                    <LabelModal>Clave: 12345</LabelModal>
                </ModalPass>

            </ContainerModal>}
    </>
    )
}

export default Modal;