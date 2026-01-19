import React,{useEffect ,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import nikeLogo from "../assets/nike.png";

// import { useEffect,useState } from 'React '
const Navbar = () => {
  // const [IsLoggedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [User, setUser] = useState(null)

  
  useEffect(()=>{
    const checkUser =() =>{
        const loginUser = localStorage.getItem('loginUser')
  if(loginUser){
    setUser(JSON.parse(loginUser));
  }else{
    setUser(null);
  }
    }

    checkUser()
    window.addEventListener('storage',checkUser);

    return ()=>{
      window.removeEventListener('storage',checkUser)
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
  <li><Link to="/shop">SHOP</Link></li>
  <li><Link to="/location">LOCATION</Link></li>
  <li><Link to="/about">ABOUT US</Link></li>
  <li><Link to="/contact">CONTACT</Link></li>
</ul>



    <div className='userLogged'>
  
  {/* adding my cart */}
            {!User? null :(
              <div>
                  <Link to='/myCart'>
                  <button className='myCart'>🛒 MyCart</button>
                  </Link>
              </div>
            )}

                {/* Rendering Logic */}
              {!User ? (
                <Link to='/login'>
                          <button className='btn-login'>Login</button>
          </Link>):(
                    <button className='btn-out' onClick={loginOut}>Log-Out</button>
          )}
          </div>
      </nav>
    </div>
  )
}

export default Navbar