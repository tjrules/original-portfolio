/c portfolio_auth_dev

CREATE TABLE IF NOT EXISTS portfolio (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  image TEXT
)
