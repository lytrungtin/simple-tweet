const initialState = {
    all: [],
    newTweetErrors: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case 'FETCH_TWEET_SUCCESS':
        return {
          ...state,
          all: action.response.data,
          newTweetErrors: [],
        };
      case 'CREATE_TWEET_FAILURE':
        return {
          ...state,
          newTweetErrors: action.error.errors,
        };
      default:
        return state;
    }
  }
