import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src="/images/brand_logo.png" alt="brand-logo"/>
      </div>
      <div className="nav-links">
        <Link to='/' className="link"> Menu </Link>
        <Link to='/' className="link"> Location </Link>
        <Link to='/' className="link"> About</Link>
        <Link to='/' className="link"> Contact</Link>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar;