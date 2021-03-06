// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';
import { fetchTweets, createTweet, reTweet, loadMore } from '../../actions/tweets';
import NewTweetForm from '../../components/NewTweetForm';
import Navbar from '../../components/Navbar';
import TweetListItem from '../../components/TweetListItem';

const styles = StyleSheet.create({
  card: {
    maxWidth: '768px',
    margin: '2rem auto',
  },
});

type Props = {
  tweets: Array<Tweet>,
  fetchTweets: () => void,
  createTweet: () => void,
  reTweet: () => void,
  loadMore: () => void,
  newTweetErrors: Array<string>,
}

class Home extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    this.props.fetchTweets();
  }

  props: Props

  handleNewTweetSubmit = (data) => this.props.createTweet(data, this.context.router);

  handleReTweet = (tweetId) => this.props.reTweet(tweetId, this.context.router);

  handleLoadMore = (numTweets) => this.props.loadMore(numTweets, this.context.router);

  renderTweets() {
    return this.props.tweets.map(tweet =>
      <TweetListItem
        key={tweet.id}
        tweet={tweet}
        onReTweet={this.handleReTweet}
      />
    );
  }

  renderLoadMore() {
    if(this.props.tweets.length === 10)
      return <button onClick={() => this.handleLoadMore(1000)}>Load all tweets...</button>;
    return null;
  }

  render() {
    return (
      <div style={{ flex: '1' }}>
        <Navbar />
        <div className={`card ${css(styles.card)}`}>
          <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>Add a new tweet</h3>
          <NewTweetForm onSubmit={this.handleNewTweetSubmit} errors={this.props.newTweetErrors} />
        </div>
        <div className={`card ${css(styles.card)}`}>
          <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>Top 10 tweets arrange order by number of retweets</h3>
          <div className="table-responsive">
            <table className="table"  style={{ width: '100%', textAlign: 'center' }}>
              <thead>
                <tr>
                  <th scope="col">Messages</th>
                  <th scope="col">Retweets</th>
                  <th scope="col"></th>
                </tr>
              </thead>
                <tbody>
                  {this.renderTweets()}
                </tbody>
            </table>
          </div>
          <div>
            {this.renderLoadMore()}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    tweets: state.tweets.all,
    newTweetErrors: state.tweets.newTweetErrors,
  }),
  { fetchTweets, createTweet, reTweet, loadMore }
)(Home);
