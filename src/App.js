// import logo from './logo.svg';


import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';
import Login from './Login';
import { getTokenFromUrl} from './spotify';
import Player from './Player';

import { useStateValue } from './StateProvider';

const spotifyApi = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotifyApi.setAccessToken(_token)

      spotifyApi.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })

      spotifyApi.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })

      spotifyApi.getPlaylist('6ehdSiG3d2TinBXr1r7ZK0').then(playlist => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: playlist,
        })
      })
    }

  }, [])

  return (
    <div className="app">
      {
        token ? (
          <Player spotifyApi={spotifyApi} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
