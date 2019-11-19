--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: comment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comment (
    cid integer NOT NULL,
    username character varying(40) NOT NULL,
    comment character varying(1000),
    qid integer
);


ALTER TABLE public.comment OWNER TO postgres;

--
-- Name: comment_cid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comment_cid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comment_cid_seq OWNER TO postgres;

--
-- Name: comment_cid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comment_cid_seq OWNED BY public.comment.cid;


--
-- Name: question; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.question (
    qid integer NOT NULL,
    title character varying(255) NOT NULL,
    username character varying(40) NOT NULL,
    text character varying(3000)
);


ALTER TABLE public.question OWNER TO postgres;

--
-- Name: question_qid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.question_qid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.question_qid_seq OWNER TO postgres;

--
-- Name: question_qid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.question_qid_seq OWNED BY public.question.qid;


--
-- Name: vote; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vote (
    vid integer NOT NULL,
    answer character varying(1000),
    votecount integer,
    qid integer
);


ALTER TABLE public.vote OWNER TO postgres;

--
-- Name: vote_vid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vote_vid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vote_vid_seq OWNER TO postgres;

--
-- Name: vote_vid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vote_vid_seq OWNED BY public.vote.vid;


--
-- Name: comment cid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comment ALTER COLUMN cid SET DEFAULT nextval('public.comment_cid_seq'::regclass);


--
-- Name: question qid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question ALTER COLUMN qid SET DEFAULT nextval('public.question_qid_seq'::regclass);


--
-- Name: vote vid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vote ALTER COLUMN vid SET DEFAULT nextval('public.vote_vid_seq'::regclass);


--
-- Data for Name: comment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comment (cid, username, comment, qid) FROM stdin;
1	Hanna	Kinkku	\N
\.


--
-- Data for Name: question; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.question (qid, title, username, text) FROM stdin;
1	Juusto vai kinkku	Pena	Kumpi tulee p„„llimm„iseksi voileiv„ss„?
\.


--
-- Data for Name: vote; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vote (vid, answer, votecount, qid) FROM stdin;
\.


--
-- Name: comment_cid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comment_cid_seq', 1, true);


--
-- Name: question_qid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.question_qid_seq', 1, true);


--
-- Name: vote_vid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vote_vid_seq', 1, false);


--
-- Name: comment comment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (cid);


--
-- Name: question question_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question
    ADD CONSTRAINT question_pkey PRIMARY KEY (qid);


--
-- Name: vote vote_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vote
    ADD CONSTRAINT vote_pkey PRIMARY KEY (vid);


--
-- Name: comment comment_qid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_qid_fkey FOREIGN KEY (qid) REFERENCES public.question(qid);


--
-- Name: vote vote_qid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vote
    ADD CONSTRAINT vote_qid_fkey FOREIGN KEY (qid) REFERENCES public.question(qid);


--
-- PostgreSQL database dump complete
--

