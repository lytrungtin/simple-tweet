use Mix.Config

config :tweet, Tweet.Endpoint,
  http: [:inet6, port: {:system, "PORT"}],
  url: [scheme: "https", host: "basic-tweet.herokuapp.com", port: 443],
  cache_static_manifest: "priv/static/cache_manifest.json",
  secret_key_base: System.get_env("SECRET_KEY_BASE"),
  check_origin: ["http://simple-tweet.lytrungtin.com"]

config :logger, level: :info

config :tweet, Tweet.Repo,
  adapter: Ecto.Adapters.Postgres,
  url: System.get_env("DATABASE_URL"),
  pool_size: String.to_integer(System.get_env("POOL_SIZE") || "10"),
  ssl: true,
  pool_size: 18,
  pool_timeout: 60_000

# import_config "prod.secret.exs"
