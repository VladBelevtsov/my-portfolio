import React, { useEffect, useRef, useState } from 'react'
import VanillaTilt from 'vanilla-tilt'
import './App.scss';
import { CloseOutline } from 'react-ionicons'

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
  const [soonPopUp, setSoonPopUp] = useState(false)

  const options = {
    max: 2,
    speed: 200,
    "mouse-event-element":  document
  }

  const links = [
    {id: 1, title: 'GitHub', link: 'https://github.com/VladBelevtsov', blank: '_blank', soon: false},
    {id: 2, title: 'Blog', link: '#', blank: '_parent', soon: true},
    {id: 3, title: 'Instagram', link: '#', blank: '_parent', soon: true},
  ]

  // const 

  function soonPopUpOpen() {
    setSoonPopUp(true)
    // setTimeout(() => {
    //   setSoonPopUp(false)
    // }, 2000);
  }

  function soonPopUpOpenClose() {
    setSoonPopUp(false)
  }

  const soonRef = useRef(null)

  useEffect(() => {
    function clickOutsideSoon(event) {
      if (soonRef.current && !soonRef.current.contains(event.target)) {
        setSoonPopUp(false)
      }
    }
    document.addEventListener("mousedown", clickOutsideSoon)
  }, [soonRef])

  return (
    <div className='App'>

      {soonPopUp ? (
        <div className='soon' ref={soonRef}>
          <span onClick={soonPopUpOpenClose}>
            <CloseOutline
              color={'#00000'} 
              title={'close'}
              height="32px"
              width="32px"
            />
          </span>
          <h3>Coming soon 😅</h3>
        </div>
      ):false}


      <div className='hero'>
        <div className='hero__left'>
          <h1 className='title'>Hello there <span className='emoji-wave'>👋</span></h1>
          <br />
          <div className='text-bg'>
            <p>My name is Vlad. I'm a developer 👨‍💻 based in Kharkiv Ukraine</p>
            <br />
            <p>Currently working as a Front-end developer at Metamorfosi.</p>
          </div>
          <div className='row mt-50'>
            {links.map(link => 
              <Link key={link.id} soonPopUpOpen={soonPopUpOpen} link={link.link} blank={link.blank} soon={link.soon}>{link.title}</Link>
            )}
          </div>
        </div>
        <div className='hero__right'>
          {/* <img src={mainGif} alt='gif' /> */}
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
