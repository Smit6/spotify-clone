import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'

import './Player.css'
import Footer from './Footer'

function Player({ spotifyApi }) {
  return (
    <div className='player'>
      <div className='player__body'>
        <Sidebar />
        <Body spotifyApi={spotifyApi} />
      </div>
      <Footer />
    </div>
  )
}

export default Player