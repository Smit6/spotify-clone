export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      }
    case 'SET_PLAYING_STATE':
      return {
        ...state,
        playing: action.playing,
      }
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }
    default:
      return state
  }
}

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: 'BQDngGZDVVoayNCOIvyreGLnQzmMLxDKenQA0VsM_HwSobCMcmwHdN_1Z8K_Kwz68-IW8N-i_PFHNjOYx1-7RLA0tjT_jdWyoCtiDDIWcxKocqYxOFj1DpX8BLmkUkKjDDm47up1m0NapVfV4vW4JxQ-h267ZlshMhf77dI3Mo61m7FLmJeJsrmrO523G6l7LAFClBVQqlkuf7Qn',
  discover_weekly: null,
}
