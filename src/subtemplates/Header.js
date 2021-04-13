import Logo from '../components/Logo'
import Menu from '../components/MenuNavBar'
import Search from '../components/Search/Search'
const Header = () => {
  return(
    
      <header className="header">
        <div className="container">
          <Logo/>
          <Menu/>
        </div>
      </header>

  )
}

export default Header;