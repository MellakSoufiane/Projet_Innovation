//Button.js
import styled, { css } from 'styled-components'

const SButton = styled.button`
  box-sizing: border-box;
  display: block;

  
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;

  
  border: none;
  cursor: pointer;

  

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