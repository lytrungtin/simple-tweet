defmodule Tweet.TweetTest do
  use Tweet.ModelCase

  alias Tweet.Tweet

  @valid_attrs %{action: "some action", message: "some message"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Tweet.changeset(%Tweet{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Tweet.changeset(%Tweet{}, @invalid_attrs)
    refute changeset.valid?
  end
end
