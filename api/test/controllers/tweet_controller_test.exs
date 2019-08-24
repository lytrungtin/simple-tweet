defmodule Tweet.TweetControllerTest do
  use Tweet.ConnCase

  alias Tweet.Tweet
  @valid_attrs %{action: "some action", message: "some message"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, tweet_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    tweet = Repo.insert! %Tweet{}
    conn = get conn, tweet_path(conn, :show, tweet)
    assert json_response(conn, 200)["data"] == %{"id" => tweet.id,
      "action" => tweet.action,
      "message" => tweet.message,
      "target_id" => tweet.target_id}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, tweet_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, tweet_path(conn, :create), tweet: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Tweet, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, tweet_path(conn, :create), tweet: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    tweet = Repo.insert! %Tweet{}
    conn = put conn, tweet_path(conn, :update, tweet), tweet: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(Tweet, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    tweet = Repo.insert! %Tweet{}
    conn = put conn, tweet_path(conn, :update, tweet), tweet: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    tweet = Repo.insert! %Tweet{}
    conn = delete conn, tweet_path(conn, :delete, tweet)
    assert response(conn, 204)
    refute Repo.get(Tweet, tweet.id)
  end
end
