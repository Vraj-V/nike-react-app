import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
// import { useEffect,useState } from 'react'
const Navbar = () => {
  // const [IsLoggedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  let isLoggedIn =false
  if(localStorage.getItem('loginUser')){
    isLoggedIn =true;
  }

  const loginOut =()=>{
    localStorage.removeItem('loginUser')
    navigate('/login')
  }
  return (
    <div>
        
      <nav className='container'>
        <div className='logo'>
          <img className='brand-logo' src="https://th.bing.com/th/id/R.7ecb22fd61fcaf57bf8b9a17b0098a63?rik=RbiQQpEI1GiB9Q&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fNike-Logo-Transparent-Background.png&ehk=lWceA5o3dIB7BLwMnH9dZxYB1wbB40OxRA9QciQ%2fQc4%3d&risl=&pid=ImgRaw&r=0" alt="Brand" />
          </div>

          <ul className="menu">
  <li><Link to="/">HOME</Link></li>
  <li><Link to="/location">LOCATION</Link></li>
  <li><Link to="/about">ABOUT US</Link></li>
  <li><Link to="/contact">CONTACT</Link></li>
</ul>

    {/* Rendering Logic */}
    {!isLoggedIn ? (
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