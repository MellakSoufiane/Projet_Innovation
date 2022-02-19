
import styled from 'styled-components'
import logo from './video.png'

console.log(logo); 
export const Popupbox = styled.div`
position: absolute;
width: 776px;
height: 458px;
left: 270.69px;
top: 174.9px;
background-color: red;
z-index:1;


background: #FFFFFF;
border-radius: 16px;
`
export const TitlePopup = styled.h1`
position: absolute;
width: 149px;
height: 20px;
left: 24px;
top: 28px;


font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height */


color: #292B2E;
`
export const Exit = styled.p`
position: absolute;
top: 32px;
left: 734px;
width: 12px;
height: 12px;
cursor: pointer;
`
export const Box = styled.div`
position: absolute;
width: 728px;
height: 340px;
left: 24px;
top: 90px;
background: #F8F9FB;
border: 1px dashed #B6BDCB;
box-sizing: border-box;
border-radius: 12px;
text-align: center;
color: #292B2E;
`
export const LabelBox = styled.p`
position: relative;
left: 0px;
top: 55px;

font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 150%;

text-align: center;

color: #292B2E;



flex: none;
order: 0;
flex-grow: 0;
margin: 8px 0px;
`
export const DescBox = styled.p`
position: relative;
left: 0px;
top: 70px;


font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 150%;

color: #666666;

flex: none;
order: 1;
flex-grow: 0;
margin: 8px 0px;
`
export const BoxImg = styled.div`
position: relative;
left: 0px;
top: 50px;


`

export const BoxSelect = styled.div`
position: relative;
left: 223px;
top: 60px; 
text-align:center;
width: 142px;
height: 40px;
background: #005FFC;
border-radius: 8px;

flex: none;
order: 2;
flex-grow: 0;
margin: 20px 0px;
`
export const ButtonSubmit = styled.button`
position: relative;
left: 0;
top: 70px; 

box-sizing: border-box;
  display: inline-block;

  height: 44px;
  width: 100px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;

  user-select: none;
  outline: none;
  text-transform: capitalize;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  position: relative;
  text-decoration: none;
  overflow: hidden;

  color: var(--text-secondary-color);
  background: var(--button-primary-color);
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    opacity: 0.6;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      :hover {
        cursor: not-allowed;
        filter: grayscale(1);
        -webkit-transform: translateZ(0);
        -webkit-perspective: 1000;
        -webkit-backface-visibility: hidden;
      }
    `}

`