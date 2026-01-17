import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Sign_Up = () => {
  const [name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [DOB, setDOB] = useState('')
  const navigate = useNavigate()


  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(Email ,"this is email");
    console.log(Password ,"this is Password");
  
    const newUser ={
    Name: name,
    userID: Email,
    Password: Password,
    DoB: DOB
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(newUser);

  localStorage.setItem('users',JSON.stringify(users));
  navigate('/')
  console.log("user saved :", users);
  }
    return (
    <div className='container margin'>
    <div className="login-content">
      <h1>Sign Up</h1>
      <form className="contact-form" onSubmit={handleSubmit} >
      <div className="form-group">
        <label>Name: </label>
      <input type="text" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Enter ID"  value={Email} onChange={e =>setEmail(e.target.value)} required />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="Enter your Password" value={Password} onChange={e => setPassword(e.target.value)} required />
      </div>

      <div className="form-group">
        <label>DOB</label>
        <input type="date" placeholder="Enter your Password" value={DOB} onChange={e => setDOB(e.target.value)} required />
      </div>
      <button className='sign-btn' type="submit">Enter</button>
    </form>
      </div>
    </div>
  )
}

export default Sign_Up