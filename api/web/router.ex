defmodule Tweet.Router do
  use Tweet.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", Tweet do
    pipe_through :api
  end
end
