
# Postgres Commands, Variables, and DDL

## Postgres

- **database** - where we store data for our applications
    - This is really just a file system, but postgres gives us some special indexing capabilities
- Postgres - the program that stores our data and manages our databases

## Sample postgreSQL file

```sql
drop table if exists articleTag;
drop table if exists article;
drop table if exists tag;
drop table if exists author;

create table if not exists author(
    author_id uuid not null,
    author_activation_token char(32),
    author_avatar_url varchar(255),
    author_email varchar(128) not null unique,
    author_hash char(97) not null,
    author_username varchar(32) not null unique,
    primary key(author_id)
);

create table if not exists tag(
    tag_id uuid not null,
    tag_name varchar(32) not null,
    primary key(tag_id)
);

create table if not exists article(
    article_id uuid not null,
    article_author_id uuid not null,
    article_content varchar(1000) not null,
    article_date timestamp with time zone not null,
    article_image varchar(255),
    foreign key(article_author_id) references author(author_id),
    primary key(article_id)
);
create index on article(article_author_id);

create table if not exists article_tag(
    article_tag_article_id uuid,
    article_tag_tag_id uuid,
    foreign key(article_tag_article_id) references article(article_id),
    foreign key(article_tag_tag_id) references tag(tag_id),
    primary key(article_tag_article_id, article_tag_tag_id)
);
create index on article_tag(article_tag_article_id);
create index on article_tag(article_tag_tag_id);

```

- Tables must be added from strongest to weakest, and dropped in opposite order

## Data Types

- UUID
    - **UUID** - Universally Unique IDentifier.
    - UUID Example: `ed362aaf-7438-4128-93ee-e3852e6e3462`
    - UUID’s are created in a way that ensures that it is virtually impossible for two UUIDs to be identical
        - chance of collision between two UUIDs is vanishingly small: 1 in 2^122, or approximately 1 in 5.3x10^35 or 1 in 5,300,000,000,000,000,000,000,000,000,000,000,000
    - We will use UUIDs as primary keys.
        - UUIDs are impossible to guess, making it difficult for attackers to snoop through entire tables of data.
    - Postgres provides a custom data type optimized for storing UUIDs.
        - [https://www.postgresql.org/docs/current/datatype-uuid.html](https://www.postgresql.org/docs/current/datatype-uuid.html)

- CHAR, VARCHAR and TEXT
    - CHAR:  fixed length strings
    - VARCHAR: variable length strings
    - TEXT; strings without artificial limits
    - CHAR(8) vs VARCHAR(8) Example: fuzzy
        - CHAR : `F U Z Z Y _ _ _`
            - _ is a space
        - VARCHAR : `F U Z Z Y (nul)` - nul is a stop byte, so only 1 extra byte
    - Use VARCHAR for human created input
    - Use CHAR for computer generated content
    - unlike other databases, there are negligible performance costs between the different string-based data types
    - [https://www.postgresql.org/docs/current/datatype-character.html](https://www.postgresql.org/docs/current/datatype-character.html)
- Numeric Values
    - postgres has ten different numeric data types.
    - common numeric values we will use are
        - SMALLINT
        - integer
        - bigint
        - numeric/decimal
            - used for float variables
            - numeric(precision, scale)
            - precision is the maximum number of digits, including after the decimal
            - scale is the number of digits reserved after the decimal
            - E.G numeric(5,2) would allow for a number like 333.33 to be stored
    - for numbers without decimals, use the correct size for your data
    - for numbers that can have a decimal use either the numeric or decimal data type
    - [https://www.postgresql.org/docs/current/datatype-numeric.html](https://www.postgresql.org/docs/current/datatype-numeric.html)
- DATE and DATETIME
    - beginning of time: 1970-01-01 00:00:00 UTC
    - UTC is Europe/London time zone (no daylight savings)
    - DATE : same without time
    - TIME : same without date
    - YEAR : Avoid. SQL can only store >= 1980. Instead, use SMALLINT
    - TIMESTAMPTZ date and time combined with the timezone
    - [https://www.postgresql.org/docs/current/datatype-datetime.html](https://www.postgresql.org/docs/current/datatype-datetime.html)

## INDEXES

- Indexes are a way of speeding up searches in a database for specific columns.
- Indexes are expensive for the database and should be used sparingly
- Indexes should only be used on columns that rarely change and are used for comparisons in joins.
- [https://www.postgresql.org/docs/current/sql-createindex.html](https://www.postgresql.org/docs/current/sql-createindex.html)