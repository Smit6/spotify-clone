import React from 'react'

import './Sidebar.css'
import SidebarOption from './SidebarOption'

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import { useStateValue } from './StateProvider';

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();

  console.log(playlists);

  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='Spotify'
      />
      <SidebarOption
        optionTitle='Home'
        Icon={HomeIcon}
      />
      <SidebarOption
        optionTitle='Search'
        Icon={SearchIcon}
      />
      <SidebarOption
        optionTitle='Your Library'
        Icon={LibraryMusicIcon}
      />
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map(playlist => (
          <SidebarOption
            key={playlist.id}
            optionTitle={playlist.name}
          />
      ))}
    </div>
  )
}

export default Sidebar
