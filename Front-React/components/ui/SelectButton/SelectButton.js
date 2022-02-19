//Button.js
import styled, { css } from 'styled-components'

const SButton = styled.button`
  box-sizing: border-box;
  display: block;

  
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

const SelectButton = ({ ...btnProps }) => {
  const { children, disabled, htmlType, className, ...props } = btnProps

  return (
    <SButton
      type={!props.as && htmlType}
      disabled={disabled}
      {...props}
      className={className}
    >
      {children}
    </SButton>
  )
}


export default SelectButton