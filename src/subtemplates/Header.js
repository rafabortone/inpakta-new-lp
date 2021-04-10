import Logo from '../components/Logo'
import Menu from '../components/MenuNavBar'
import cartIcon from '../icons/cart.svg'
import Search from '../components/Search/Search'
const Header = () => {
  return(
    
      <header className="header">
        <div className="container">
          <Logo/>
          <Menu></Menu>
          <Search/>
          <div className="header__login">
            <span>Login</span>
            <img src={cartIcon} />
          </div>
        </div>
      </header>

  )
}

export default Header;