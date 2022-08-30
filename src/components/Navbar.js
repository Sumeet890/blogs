import {Link} from 'react-router-dom';            //link is coming from reactrouterdom
function Navbar() {
    return (
      <div>
       <ul id="nav">
        <li>
          <Link to="/">Home</Link>              
          </li>
        <li>
          <Link to="/create-post">CreatePost</Link>
          </li>
       </ul>
      </div>
    );
  }
  
  export default Navbar;
  