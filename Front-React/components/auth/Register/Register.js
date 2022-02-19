import { useState } from 'react'
import LinkButton from '../../ui/LinkButton'
import Input from '../../ui/Input'
import * as styles from './styles'
import Spacer from '../../ui/Spacer'
import useForm from './useform'
import validate from './Validate'

function Register() {
  const { handleSubmit, errors } = useForm(validate);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    return (
      <styles.Wrapper>
        <styles.FormContainer>
        <form onSubmit={handleSubmit}>
            <styles.Title h4>Welcome back to VideoApp</styles.Title>
            <Spacer y={40} />
            
            
            <Input
              type="text"
              name="Name"
              label="Name"
              placeholder="Name "
              value={name}
              onChange={setName}
              className={`${errors.name} ? "error" : "success"`}
              onBlur={handleSubmit}
              autoComplete="off"
              
            />
  
            
            <Input
              type="email"
              name="email"
              label="E-mail"
              placeholder="Exemple@exemple.com"
              value={email}
              onChange={setEmail}
              className={`${errors.email} ? "error" : "success"`}
              onBlur={handleSubmit}
              autoComplete="off"
              
            />
           
            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Password *"
              value={password}
              onChange={setPassword}
              className={`${errors.password} ? "error" : "success"`}
              onBlur={handleSubmit}
              autoComplete="off"
              
            />
          
          <LinkButton href ='login'>Already have account?</LinkButton>

          <Spacer y={24} />

          <styles.ValidateButton  htmlType="submit">
            Validate
          </styles.ValidateButton>
          <Spacer y={24} />

          </form>
        </styles.FormContainer>
      </styles.Wrapper>
    );
  }
  
  
  
  
  export default Register