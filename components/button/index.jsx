import React from 'react'
import styled from 'styled-components'
const Button = styled.button`
border:hidden;
  min-width: 254px;
  padding: 0.6rem 1.2rem;
  margin-left: 0.6rem;
  background: #00D0A6 ;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
  height: 56px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  :disabled {
    cursor: not-allowed;
  }
  &:hover{
    background: #E5FAF6;
    color:#00D0A6;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    max-width: 327px;
    margin: 0;
    margin-left: 0.5rem;
    margin-bottom: 0.4rem;
  }
`;


const index = ({ label, onClick }) => {
  return (
    <Button onClick={onClick}>{label}</Button>
  )
}

export default index