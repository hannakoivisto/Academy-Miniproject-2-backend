CREATE TABLE comment (
    cid serial primary key,
    username character varying(40) NOT NULL,
    comment character varying(1000),
    qid integer
);

CREATE TABLE question (
    qid serial primary key,
    title character varying(255) NOT NULL,
    username character varying(40) NOT NULL,
    text character varying(3000)
);

CREATE TABLE vote (
    vid serial primary key,
    answer character varying(1000),
    votecount integer,
    qid integer
);

ALTER TABLE comment
    ADD CONSTRAINT fk_vote_id FOREIGN KEY (qid) REFERENCES question(qid);

ALTER TABLE vote
    ADD CONSTRAINT fk_vote_id FOREIGN KEY (qid) REFERENCES question(qid);

