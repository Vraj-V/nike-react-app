import React,{useState}from 'react';
import { Link,useNavigate} from 'react-router-dom'


const Login = () => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleSubmit =(e)=>{
    e.preventDefault();
    // console.log(Email ,"this is email");
    // console.log(Password ,"this is Password");
  
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((e)=>{
      return e.userID ===Email;
    })
    if(!user){
      alert("No User Found");
      return;
    }

    if(user.Password !== Password){
      alert("Wrong Password!!!");
      return;
    }
    
    alert("Login Successful");
    localStorage.setItem("loginUser",JSON.stringify(user));
    navigate('/')


        setEmail('')
        setPassword('')
  console.log("user saved :", users);
  }

    return (
    <div className='container margin'>
    <div className="login-content">
      <h1>Login</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Enter ID"  value={Email} onChange={(e)=>{ setEmail(e.target.value)
        }
         } required />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="Enter your Password" value={Password} onChange={(e) =>{
          setPassword(e.target.value)
        }} required />
      </div>


      <button className='login-btn' type="submit">Enter</button>
    </form>
    <h5>Don`t have Account? <span><Link to='/sign'>Sign Up</Link></span></h5>
      </div>
    </div>
  )
}

export default Login