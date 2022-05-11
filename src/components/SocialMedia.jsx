import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://github.com/NacheteTnf"><BsGithub /></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/ignacio-cabrera-hdez/"><FaLinkedin/></a>
        </div>
    </div>
  )
}

export default SocialMedia