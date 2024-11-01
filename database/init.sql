CREATE TABLE verification_token (
  identifier TEXT NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  token TEXT NOT NULL,
 
  PRIMARY KEY (identifier, token)
);
 
CREATE TABLE accounts (
  id SERIAL,
  "userId" INTEGER NOT NULL,
  type VARCHAR(255) NOT NULL,
  provider VARCHAR(255) NOT NULL,
  "providerAccountId" VARCHAR(255) NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at BIGINT,
  id_token TEXT,
  scope TEXT,
  session_state TEXT,
  token_type TEXT,
 
  PRIMARY KEY (id)
);
 
CREATE TABLE sessions (
  id SERIAL,
  "userId" INTEGER NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  "sessionToken" VARCHAR(255) NOT NULL,
 
  PRIMARY KEY (id)
);
 
CREATE TABLE users (
  id SERIAL,
  name VARCHAR(255),
  email VARCHAR(255),
  "emailVerified" TIMESTAMPTZ,
  image TEXT,
 
  PRIMARY KEY (id)
);
  
CREATE TABLE entrepreneurships (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  img TEXT ,
  social_links JSONB,
  cancellation_policy TEXT,
  reminder_text TEXT,
  mp_interest_rate FLOAT,
  account_id INT NOT NULL REFERENCES accounts(id)
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT,
  entrepreneurship_id INT REFERENCES entrepreneurships(id)
);

CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  name TEXT,
  base_price MONEY,
  entrepreneurship_id INT NOT NULL REFERENCES entrepreneurships(id)
);

CREATE TABLE employeeServices (
  employee_id INT NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
  service_id INT NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  PRIMARY KEY (employee_id, service_id)
);

CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  lastname TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL
);

CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  mp_transaction_number TEXT,
  amount FLOAT,
  fees FLOAT,
  net_amount FLOAT
);


CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  entrepreneurship_id INT NOT NULL REFERENCES entrepreneurships(id),
  client_id INT NOT NULL REFERENCES clients(id),
  service_id INT NOT NULL REFERENCES services(id),
  employee_id INT NOT NULL REFERENCES employees(id),
  appointment_datetime TIMESTAMP NOT NULL,
  creation_datetime TIMESTAMP NOT NULL,
  confirmation_datetime TIMESTAMP,
  cancellation_datetime TIMESTAMP,
  payment_id INT REFERENCES payments(id),
  final_price MONEY
);


CREATE TABLE calendars (
  calendar_id TEXT PRIMARY KEY,
  entrepreneurship_id INT REFERENCES entrepreneurships(id),
  employee_id INT REFERENCES employees(id),
  service_id INT REFERENCES services(id)
);

