import Link from 'next/link'
import styled from 'styled-components'


export const StyledLink = styled.a`
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

const ButtonAddLink = ({ href = '#', children }) => {
    return (
      <Link href={href} passHref>
        <StyledLink>{children}</StyledLink>
      </Link>
    )
  }
  
  export default ButtonAddLink