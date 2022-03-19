import React from 'react'

export default function Link(props) {
  return (
    <a href={props.link} className={'btn'} target="_blank">{props.children}</a>
  )
}
