import React from 'react'

export default function Link(props) {
  return (
    !props.soon ? 
      <a href={props.link} className={'btn'} target={props.blank}>{props.children}</a> 
      : 
      <button className={'btn'} onClick={props.soonPopUpOpen}>{props.children}</button>
  )
}
