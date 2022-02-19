import { useState } from 'react'
import LinkButton from '../../ui/LinkButton'
import Input from '../../ui/Input'
import * as styles from './styles'
import Spacer from '../../ui/Spacer'
import useForm from './useform'
import validate from './Validate'


function reset() {
  const { handleSubmit, errors } = useForm(validate);
  const [email, setEmail] = useState('')

 
   


return (
      <styles.Wrapper>
        <styles.FormContainer>
        <form onSubmit={handleSubmit}>
            <styles.Title h4>Forget Your Password ?</styles.Title>
            <Spacer y={40} />
  
            
            <Input
              type="email"
              name="email"
              label="Enter your E-mail"
              placeholder="Exemple@exemple.com"
              value={email}
              onChange={setEmail}
              className={`${errors.email} ? "error" : "success"`}
              onBlur={handleSubmit}
              autoComplete="off"
              
            />

          
          <LinkButton href ='login'>Already have account?</LinkButton>

          <Spacer y={24} />

          <styles.ValidateButton  htmlType="submit" >
            Next
          </styles.ValidateButton>
          <Spacer y={24} />

          </form>
        </styles.FormContainer>
      </styles.Wrapper>
    );
  }
  
  
  
  
export default reset