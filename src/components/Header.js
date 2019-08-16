import React from 'react'
import SearchBox from './SearchBox'

const Header = () => {

  return (
    <header>
      <img src="img/logo.png" className="logo-image" alt="logo" />
      <SearchBox/>
    </header>
  )
}

export default Header
