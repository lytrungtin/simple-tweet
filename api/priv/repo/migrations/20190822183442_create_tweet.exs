defmodule Tweet.Repo.Migrations.CreateTweet do
  use Ecto.Migration

  def change do
    create table(:tweets) do
      add :action, :string
      add :message, :string
      add :target_id, references(:tweets)

      timestamps()
    end

    create index(:tweets, [:target_id])
  end
end
