import { useState } from 'react'
import LinkButton from '../../ui/LinkButton'
import Input from '../../ui/Input'
import * as styles from './styles'
import Spacer from '../../ui/Spacer'
import useForm from './useform'
import validate from './Validate'


function verification() {
  const { handleSubmit, errors } = useForm(validate);
  const [code, setCode] = useState('')



return (
      <styles.Wrapper>
        <styles.FormContainer>
        <form onSubmit={handleSubmit}>
            <styles.Title h4>Forget Your Password ?</styles.Title>
            <Spacer y={40} />
            <Input
              type="code"
              name="code"
              label="Enter the sent Code"
              placeholder=""
              value={code}
              onChange={setCode}
              className={`${errors.code} ? "error" : "success"`}
              onBlur={handleSubmit}
              autoComplete="off"  
            />

          
          <LinkButton href ='login'>Already have account?</LinkButton>

          <Spacer y={24} />

          <styles.ValidateButton  htmlType="submit" >
            Validate
          </styles.ValidateButton>
          <Spacer y={24} />

          </form>
        </styles.FormContainer>
      </styles.Wrapper>
    );
  }
  
  
  
  
export default verification