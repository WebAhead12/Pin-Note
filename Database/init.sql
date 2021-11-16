BEGIN;

DROP TABLE IF EXISTS users, sticky_note CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(16) unique NOT NULL,
    password varchar(24) NOT NULL
);

CREATE TABLE sticky_note (
    id SERIAL PRIMARY KEY,
    title varchar(35) NOT NULL,
    content varchar(200) null,
    status varchar(50) NOT NULL,
    date date NOT NULL,
    user_id int REFERENCES users(id)   
)

INSERT INTO users (username, password) VALUES 
('Diana','123456'),
('Zahi','Z12a'),
('julio1703','17032003')
;

INSERT INTO sticky_note (title, content, status, date, user_id) VALUES 
('WORK', '', 'not completed', '', 1),
('homework', 'do research', 'not completed', '', 2),
('dinner', 'buy stuff to make dinner', 'completed', '', 1),
('study', 'practice css', 'completed', 3),


COMMIT;