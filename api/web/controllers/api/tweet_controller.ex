defmodule Tweet.TweetController do
  use Tweet.Web, :controller

  alias Tweet.Tweet

  @tweet_params %{"action" => "tweet"}

  def index(conn, _params) do
    render(conn, "index.json", tweets: fetch_tweets(0, 10))
  end

  def load_more(conn, %{"num_tweets" => num_tweets}) do
    render(conn, "index.json", tweets: fetch_tweets(0, num_tweets))
  end

  def create(conn, params) do
    params = Map.merge(@tweet_params, params)
    changeset = Tweet.changeset(%Tweet{}, params)

    case Repo.insert(changeset) do
      {:ok, tweet} ->
        render(conn, "index.json", tweets: fetch_tweets(0, 1000))
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(ChangesetView, "error.json", changeset: changeset)
    end
  end

  def retweet(conn, %{"id" => tweet_id}) do
    target_tweet = Repo.get(Tweet, tweet_id)
    changeset = Tweet.changeset(
      %Tweet{},
      %{target_id: target_tweet.id, action: "retweet"}
    )

    case Repo.insert(changeset) do
      {:ok, tweet} ->
        render(conn, "index.json", tweets: fetch_tweets(0, 1000))
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(ChangesetView, "error.json", changeset: changeset)
    end
  end

  defp fetch_tweets(start_from, limit_tweets) do
    q = from t in Tweet,
    join: rt in Tweet,
    where: (rt.target_id == t.id or is_nil(rt.target_id)) and t.action == ^"tweet",
    group_by: t.id, order_by: [desc: count(rt.target_id)],
    select: %{num_retweets: count(rt.target_id), message: t.message, id: t.id},
    limit: ^limit_tweets,
    offset: ^start_from
    Repo.all(q)
  end
end
