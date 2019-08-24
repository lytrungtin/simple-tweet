const initialState = {
    all: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case 'FETCH_TWEETS_SUCCESS':
        return {
          ...state,
          all: action.response.data,
        };
      default:
        return state;
    }
  }
