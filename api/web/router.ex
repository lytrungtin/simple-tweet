defmodule Tweet.Router do
  use Tweet.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", Tweet do
    pipe_through :api

    get "/tweets/:id/tweets", TweetController, :tweets
    resources "/tweets", TweetController, only: [:index, :create]
    post "/tweets/:id/retweet", TweetController, :retweet
  end
end
