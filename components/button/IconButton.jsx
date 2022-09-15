import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
const ButtonIcon = styled.button`
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
gap: 8px;

min-width: 111px;
height: 32px;
left: 41px;
top: 327px;
background: #fff;
border: 1px solid #D0D0D0;
border-radius: 20px;
cursor: pointer;
&:hover{
  border: 1px solid #29B095;
  background: #E5FAF6;
}
`;

const LabelButton = styled.span`

`;

const IconButton = ({ srcIcon, label, onClick  }) => {
  return (
    <ButtonIcon onClick={onClick}>
      <Image src={srcIcon} alt={label} width={23} height={23} />
      <LabelButton>{label}</LabelButton>
    </ButtonIcon>
  )
}

export default IconButton