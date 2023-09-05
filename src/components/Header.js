import { useState } from "react";
import {Link} from "react-router-dom";

export const Title = () => {
    return (
      <a href="/">
        {" "}
        <img
          className="logo"
          src="https://i.pinimg.com/originals/3c/b2/4f/3cb24f7d0defcb91eb51b091325d5f47.jpg"
          alt="Our App Logo"
        />
      </a>
    );
  };

  const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
          <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/about">
            <li>About Us</li>
            </Link>
            <Link to="/contact">
            <li>Contact Us</li>
            </Link>
            <li>Cart</li>
          </ul>
          
        </div>
        { isLoggedIn ? 
        (<button onClick={()=> setIsLoggedIn(false)}>Log Out</button>)
        :
        (<button onClick={() => setIsLoggedIn(true)}>LogIn</button>)
        }
        
        
      </div>
    );
  };
  
  export default Header;