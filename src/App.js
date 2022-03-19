import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import './App.scss';

import Link from './components/Link.js'

function Tilt (props) {
  const { options, ...rest } = props
  const tilt = useRef(null)

  useEffect(() => {
    VanillaTilt.init(tilt.current, options)
  }, [options])

  return <div className="dots" ref={tilt} {...rest}></div> 
}

function App() {

  const options = {
    max: 2,
    speed: 200,
    "mouse-event-element":  document
  }

  const links = [
    {id: 1, title: 'GitHub', link: 'https://github.com/VladBelevtsov'},
    {id: 2, title: 'Blog', link: '#'},
    {id: 3, title: 'Instagram', link: '#'},
  ]

  return (
    <div className='App'>

      <div className='hero'>
        <div className='hero__left'>
          <h1 className='title'>Hello three <span className='emoji-wave'>👋</span></h1>
          <br />
          <div className='text-bg'>
            <p>My name is Vlad. I'm a developer 👨‍💻 based in Kharkiv Ukraine</p>
            <br />
            <p>Currently working as a Front-end developer at Metamorfosi.</p>
          </div>
          <div className='row mt-50'>
            {links.map(link => 
              <Link key={link.id} link={link.link}>{link.title}</Link>
            )}
          </div>
        </div>
        <div className='hero__right'>

        </div>
      </div>
  
      {/* Background dots */}
      <div className="dots-wrapp">
        <Tilt options={options} />
      </div>
    </div>
  );
}

export default App;
