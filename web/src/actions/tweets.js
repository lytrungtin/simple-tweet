import api from '../api';

export function fetchTweets() {
  return dispatch => api.fetch('/tweets')
    .then((response) => {
      dispatch({ type: 'FETCH_TWEET_SUCCESS', response });
    });
}

export function createTweet(data) {
  return dispatch => api.post('/tweets', data)
    .then((response) => {
      dispatch({ type: 'FETCH_TWEET_SUCCESS', response });
    })
    .catch((error) => {
      dispatch({ type: 'CREATE_TWEET_FAILURE', error });
    });
}

export function reTweet(tweetId) {
  return dispatch => api.post(`/tweets/${tweetId}/retweet`)
    .then((response) => {
      dispatch({ type: 'FETCH_TWEET_SUCCESS', response });
    });
}

export function loadMore(numTweets) {
  return dispatch => api.post(`/tweets/${numTweets}/load_more`)
    .then((response) => {
      dispatch({ type: 'LOAD_MORE_SUCCESS', response });
    });
}

