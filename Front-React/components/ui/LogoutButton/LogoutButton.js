import Link from 'next/link'
import styled from 'styled-components'

export const LinkLogOut = styled.a`
position: static;
width: 56px;
height: 17px;
left: 35px;
top: 1.5px;

font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;


color: #A4ADBA;


order: 1;
flex-grow: 0;
margin: 0px 15px;
margin-top:407px;
`

const ButtonLogout = ({ href = '#',children }) => {
  return (
    <Link href={href} passHref>
      <LinkLogOut>{children}</LinkLogOut>
    </Link>
  )
}

export default ButtonLogout
