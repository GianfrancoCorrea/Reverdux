import React from 'react'
import './play.css'

function play(props) {
  
  return (
    <div className="btn btn__play" onClick={props.handlePlay}>
        Play
      </div>
  )
}

export default play
