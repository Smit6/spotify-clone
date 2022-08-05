import React from 'react'

import './Body.css'
import Header from './Header'
import { useStateValue } from './StateProvider'

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import SongRow from './SongRow'

function Body({ spotifyApi}) {
  const [{ discover_weekly }, dispatch] = useStateValue()

  return (
    <div className='body'>
      <Header spotifyApi={spotifyApi} />
      <div className='body__info'>
        <img
          src={discover_weekly?.images[0]?.url}
          alt='discover weekly'
        />
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilledIcon className='body__shuffle'/>
          <FavoriteIcon fontSize='large'/>
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item, index) => (
          <SongRow track={item.track} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Body