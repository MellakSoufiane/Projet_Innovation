import { useState } from 'react'
import LinkButton from '../../ui/LinkButton'
import Input from '../../ui/Input'
import * as styles from './styles'
import Spacer from '../../ui/Spacer'
import useForm from './useform'
import validate from './Validate'
import ButtonAddLink from '../../ui/LinkAddButton/LinkAddButton'

function reset() {
  const { handleSubmit, errors } = useForm(validate);
  const [email, setEmail] = useState('')

 
   


return (
      <styles.Wrapper>
        <styles.FormContainer>
        <form onSubmit={handleSubmit}>
            <styles.Title h4>Forget Your Password ?</styles.Title>
            
  
            
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

          

          <ButtonAddLink  htmlType="submit" href='verification'>
            Next
          </ButtonAddLink>
          <Spacer y={40} />

          </form>
        </styles.FormContainer>
      </styles.Wrapper>
    );
  }
  
  
  
  
export default reset