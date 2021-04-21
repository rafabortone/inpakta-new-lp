import Logo from '../components/Logo'
import Menu from '../components/MenuNavBar'
import Headroom from "headroom.js"
import React, {Component} from 'react'

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
    const header = document.querySelector('.header')
    const headroom = new Headroom(header);
    headroom.init();
  }

  render() {
    return(
      <header className="header">
        <div className="container">
          <Logo/>
          <Menu/>
          <div className="header__menu--open"
            onClick={this.handleClick}
          >
          </div>  
        </div>
      </header>
    ) 
  }
}

export default Header;