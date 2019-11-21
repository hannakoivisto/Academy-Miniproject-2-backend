CREATE TABLE question (
    id serial primary key,
    title character varying(400) NOT NULL,
    topic character varying(3000) NOT NULL,
    optionA character varying(255) NOT NULL,
    optionB character varying(255) NOT NULL,
    username character varying(40) NOT NULL
);

CREATE TABLE comment (
    id serial primary key,
    comment character varying(1000),
    username character varying(40),
    question_id integer
);

CREATE TABLE vote (
    id serial primary key,
    optionAcounter integer,
    optionBcounter integer,
    question_id integer
);

ALTER TABLE comment
    ADD CONSTRAINT fk_comment_id FOREIGN KEY (question_id) REFERENCES question (id);

ALTER TABLE vote
    ADD CONSTRAINT fk_vote_id FOREIGN KEY (question_id) REFERENCES question (id);


