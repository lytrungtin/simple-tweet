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
    <tr key={tweet.id}>
      <td>{tweet.id}</td>
      <td>{tweet.message}</td>
      <td>{tweet.num_retweets}</td>
      <td>
          <button
            onClick={() => onReTweet(tweet.id)}
            className="btn btn-sm"
          >
            Retweet
          </button>
      </td>
    </tr>
  );
};

export default TweetListItem;