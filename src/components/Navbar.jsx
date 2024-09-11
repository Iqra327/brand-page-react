import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/brand_logo.png`} alt="brand-logo"/>
      </div>
      <div className="nav-links">
        <Link to='/' className="link"> Menu </Link>
        <Link to='/location' className="link"> Location </Link>
        <Link to='/about' className="link"> About</Link>
        <Link to='/contact' className="link"> Contact</Link>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar;