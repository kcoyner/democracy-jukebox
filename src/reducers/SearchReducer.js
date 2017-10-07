export default function reducer (

  state = {
    query: null,
    results: null,
    users: null,
    currentUser: null,
    userSongs: null
  },
  action) {
  switch (action.type) {
    case 'SET_QUERY': {
      return {
        ...state,
        query: action.payload.query
      };
    }
    case  'SET_RESULTS': {
      return {
        ...state,
        results: action.payload.results
      }
    }
    case  'SET_USERS': {
      return {
        ...state,
        users: action.payload.users
      }
    }
    case  'SET_CURRENT_USER': {
      return {
        ...state,
        current_user: action.payload.current_user
      }
    }
    case  'SET_USERS_SONGS': {
      return {
        ...state,
        users_songs: action.payload.users_songs
      }
    }
  }
  return state;
}
