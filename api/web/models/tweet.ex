defmodule Tweet.Tweet do
  use Tweet.Web, :model

  schema "tweets" do
    field :action, :string
    field :message, :string
    belongs_to :target, Tweet.Tweet
    has_many :retweets, Tweet.Tweet, foreign_key: :target_id

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:action, :message, :target_id])
    |> validate_required([:action])
    |> unique_constraint(:message)
  end
end
