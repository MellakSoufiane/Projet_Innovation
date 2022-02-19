import Link from 'next/link'
import styled from 'styled-components'

export const StyledLink = styled.a`
position: static;
width: 49px;
height: 17px;
left: 35px;
top: 1.5px;

font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;


color: #A4ADBA;
text-decoration: none;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 15px;
margin-top:47px;
`

const ButtonLink = ({ href = '#',color='#', children }) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  )
}

export default ButtonLink
