import axios from 'axios';
import React, {useRef} from 'react';

const RegistrationForm = ({loggedIn}) => {
  const userNameRef = useRef("")
  const passwordRef = useRef("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: userNameRef.current.value,
      password: passwordRef.current.value
    }
    axios.post('/user', user).then(res=> loggedIn.setLoggedIn({loggedIn: true, user: res.data})).catch(e=> console.log(e))
    ;
    
  }
  return (
    <form>
      <input type='text' ref={userNameRef} />
      <input type='password' ref={passwordRef} />
      <button type="submit" onClick={handleSubmit}>Submit</button>

    </form>
  )
}

export default RegistrationForm;
