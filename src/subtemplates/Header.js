import Logo from '../components/Logo'
import Menu from '../components/MenuNavBar'
import iconMenu from '../icons/icon-menu.svg'
import Headroom from "headroom.js"
import React, {Component} from 'react'
import { motion } from "framer-motion"
class Header extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const menu = document.querySelector('.header__menu')
    menu.classList.add('header__menu--active');
  }

  componentDidMount() {

    if (window.innerWidth > 990) {
      const header = document.querySelector('.header')
      const headroom = new Headroom(header);
      headroom.init();
    }
  }

  render() {
    return(
      <header className="header" xlink="http://www.w3.org/1999/xlink">
        <div className="container">
          <Logo/>
          <Menu/>
          <div className="header__menu--open"
            onClick={this.handleClick}
          >
            <img src={iconMenu} />
          </div>  
        </div>
      </header>
    ) 
  }
}

export default Header;