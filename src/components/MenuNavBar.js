import AnchorLink from 'react-anchor-link-smooth-scroll'
function MenuNavBar () {
  return(
    <nav className="header__menu">
      <ul className="header__menu--list">
        <li className="header__menu--item">
          <a >
          <AnchorLink href='#solucoes'> Nossas soluções</AnchorLink>
          </a>
        </li>
        <li className="header__menu--item">
          <a >
          <AnchorLink href='#about'>Conheça a Jüssi</AnchorLink>
          </a>
        </li>
      </ul>
    </nav>
    )
}

export default MenuNavBar;