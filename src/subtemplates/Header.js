import Logo from '../components/Logo'
import Menu from '../components/MenuNavBar'
import Headroom from "headroom.js"
import React, {Component} from 'react'

class Header extends Component {

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
        </div>
      </header>
    ) 
  }
}

export default Header;