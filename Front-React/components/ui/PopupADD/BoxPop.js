
import styled from 'styled-components'

export const Popupbox = styled.div`
position: absolute;
width: 892px;
height: 710px;
left: 130.69px;
top: 100.9px;
background-color: red;
z-index:1;

background: #FFFFFF;
box-shadow: 0px 8px 8px #EDEFF2;
border-radius: 8px;

`
export const TitlePopup = styled.h1`
position: absolute;
width: 149px;
height: 20px;
left: 30px;
top: 28px;


font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 20px;
/* identical to box height */


color: #292B2E;
`
export const Exit = styled.p`
position: absolute;
top: 10px;
left: 870px;
width: 12px;
height: 12px;
cursor: pointer;
`
export const Box = styled.div`
position: absolute;
width: 348px;
height: 653px;
left: 544px;
top: 57px;

background: #F8F9FB;
`
export const LabelBody = styled.p`
/* Title (required) */


position: absolute;
width: 149px;
height: 20px;
left: 50px;
top: 81px;

font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 150%;


display: flex;
align-items: center;

color: #44484E;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 8px 0px;
`
export const BoxImg = styled.div`
position: relative;
left: 0px;
top: 50px;


`
export const LabelDesc = styled.p`
/* Title (required) */


position: absolute;
width: 149px;
height: 20px;
left: 50px;
top: 180px;

font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 150%;


display: flex;
align-items: center;

color: #44484E;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 8px 0px;
`


export const Input = styled.input`
position: absolute;
width: 464px;
height: 40px;
left: 52px;
top: 121px;
border: 3px solid #555;
border-radius: 3px;
&::placeholder {
    
    color: var(--input-placeholder-color);
  }


`
export const Desc = styled.textarea`
position: absolute;
text-align: justify;
width: 464px;
height: 100px;
  
 
left: 52px;
top: 220px;
border: 3px solid #555;
border-radius: 3px;
&::placeholder {
    text-align: justify;
    color: var(--input-placeholder-color);
  }


`
export const Img = styled.div`
/* social link */
position: absolute;
width: 300px;
height: 253px;
left: 24px;
top: 24px;





/* Light/White */

background: #FFFFFF;
box-shadow: 0px 8px 8px #EDEFF2;
border-radius: 8px;

`