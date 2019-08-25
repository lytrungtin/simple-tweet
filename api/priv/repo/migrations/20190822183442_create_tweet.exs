defmodule Tweet.Repo.Migrations.CreateTweet do
  use Ecto.Migration

  def change do
    create table(:tweets) do
      add :action, :string
      add :message, :string, size: 140
      add :target_id, references(:tweets)

      timestamps()
    end

    create index(:tweets, [:target_id])
    create unique_index(:tweets, [:message])
  end
end
