CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    date DATE,
    time TIME,
    location VARCHAR(255),
    description TEXT
);

CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    event_id INTEGER REFERENCES events(id),
    type VARCHAR(50),
    price DECIMAL(10, 2),
    quantity INTEGER,
    sold INTEGER DEFAULT 0,
    user_id INTEGER REFERENCES users(id),
);

CREATE TABLE attendees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    ticket_id INTEGER REFERENCES tickets(id),
    checked_in BOOLEAN DEFAULT FALSE
);

CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    event_id INTEGER REFERENCES events(id),
    attendee_id INTEGER REFERENCES attendees(id),
    rating INTEGER,
    comments TEXT
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    role VARCHAR(50)
);
