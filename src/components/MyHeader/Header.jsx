import React, { Component } from 'react'
import logo from '../../logo.svg'
import './header.less'

class Header extends Component {
  render () {
    return (
      <header className='header-navbar'>
        <img src={logo} alt='logo' />
        <nav>
          <a href='#'>列表页</a>
        </nav>
      </header>
    )
  }
}

export default Header
