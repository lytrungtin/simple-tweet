import React from 'react';

type Props = {
  tweet: {
    id: number,
    message: string,
  },
  onReTweet: () => void,
}

const TweetListItem = ({ tweet, onReTweet }: Props) => {

  return (
    <div key={tweet.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
      <span style={{ marginRight: '8px' }}>{tweet.message}</span>
      <button
        onClick={() => onReTweet(tweet.id)}
        className="btn btn-sm"
      >
        Retweet
      </button>
    </div>
  );
};

export default TweetListItem;