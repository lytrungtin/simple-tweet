defmodule Tweet.TweetView do
  use Tweet.Web, :view

  def render("index.json", %{tweets: tweets}) do
    %{data: render_many(tweets, Tweet.TweetView, "tweet.json")}
  end

  def render("tweet.json", %{tweet: tweet}) do
    %{id: tweet.id,
      action: tweet.action,
      message: tweet.message,
      target_id: tweet.target_id}
  end
end
