import React from 'react';
import { IoLogoGithub } from 'react-icons/io'
import { IconContext } from "react-icons";

function FloatedIcon() {

  return (

    <IconContext.Provider value={{ className: "floated-icon" }} >
      <a href="https://github.com/gukanozadze/movie-searcher" target="_blank">

        <IoLogoGithub />
      </a>
    </IconContext.Provider>


  )
}


export default FloatedIcon