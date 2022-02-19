
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
top: 145px;

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
top: 177px;


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
top: 90px;


`
export const Img = styled.img`
position: absolute;

text-align: center
flex: none;
order: 1;
flex-grow: 0;
margin: 8px 0px;

background: url('/_next/static/media/video.67df3e0d.png');

`
