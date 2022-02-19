import styled from 'styled-components'
import Button from '../../ui/Button'
import Text from '../../ui/Text'
 
export const main = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

position: relative;
width: 1440px;
height: 900px;

`

export const left = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 80px 0px 0px 48px;

position: static;
width: 281px;
height: 900px;
left: 0px;
top: 0px;

background: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`
export const right = styled.div`
display: flex;
flex-direction: column;

align-items: center;
padding: 0px;

position: absolute;
width: 1159px;
height: 900px;
left: 281px;
top: 0px;

background: #F8F9FB;


flex: none;
order: 1;
flex-grow: 1;
margin: 0px 0px;
`

export const TitleLeft = styled(Text)`
position: static;
width: 104px;
height: 17px;
left: 48px;
top: 80px;

font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;


letter-spacing: 0.29em;
text-transform: uppercase;

color: #292B2E;
`

export const LinkImg = styled.img`
position: absolute;
width: 448.6px;
height: 299.59px;
left: 310.69px;
top: 174.9px;
background: url('/_next/static/media/image.2edb2e5c.png');
background-blend-mode: soft-light, normal;
`
export const TitleRight = styled(Text)`
position: absolute;

width: 197px;
height: 24px;
left: 451px;
top: 500.5px;

font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 24px;
text-align: center;

color: #292B2E;
margin: 20px 0px;
`
export const ButtonDiv = styled.div`
position: absolute;
height: 44px;
width: auto;
left: 503px;
top: 600.5px;

`
