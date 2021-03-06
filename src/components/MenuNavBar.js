import React, { Component } from 'react';
import iconClose from '../icons/icon-arrow-right.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


class MenuNavBar extends Component {

  constructor(props) {
    super(props);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  closeMenu() {
    document.querySelector('.header__menu').classList.remove('header__menu--active')
  }

  render() {
    return(
      <nav className="header__menu">
        <div className="header__menu--close"
          onClick={this.closeMenu}
        >
          <img src={iconClose} />
  
        </div>
        <ul className="header__menu--list">
          <li className="header__menu--item">
            <AnchorLink href='#solucoes'
              onClick={this.closeMenu}
            > Nossas soluções</AnchorLink>
          </li>
          <li className="header__menu--item">
            <AnchorLink href='#about'
              onClick={this.closeMenu}
            >Conheça a InPakta</AnchorLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default MenuNavBar;