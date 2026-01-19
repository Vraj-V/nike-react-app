import React,{useEffect ,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import nikeLogo from "../assets/nike.png";

// import { useEffect,useState } from 'React '
const Navbar = () => {
  // const [IsLoggedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [User, setUser] = useState(null)

  
  useEffect(()=>{
  const loginUser = localStorage.getItem('loginUser')
  if(loginUser){
    setUser(JSON.parse(loginUser));
  }
  },[])


  const loginOut =()=>{
    localStorage.removeItem('loginUser')
    setUser(null);
    navigate('/login')
  }

  return (
    <div>
        
      <nav className='container'>
        <div className='logo'>
          <img className='brand-logo' src={nikeLogo} alt="Brand" />
          </div>

          <ul className="menu">
  <li><Link to="/">HOME</Link></li>
  <li><Link to="/location">LOCATION</Link></li>
  <li><Link to="/about">ABOUT US</Link></li>
  <li><Link to="/contact">CONTACT</Link></li>
</ul>

    {/* Rendering Logic */}
    {!User ? (
      <Link to='/login'>
                <button className='btn-login'>Login</button>
</Link>):(
          <button className='btn-out' onClick={loginOut}>Log-Out</button>
)}

      </nav>
    </div>
  )
}

export default Navbar