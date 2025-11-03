# SQL Statements

## INSERT
- adds (i.e. inserts) data into the database
- Each item in the database is a single instance of an entity.
- In database nomenclature, this is known as a **row**
- In this context, an entity is an abstract category, like 'Profile'.  An instance is a specific item, like 'Paul'
    - `INSERT INTO row (column1, column2, column3, column4) VALUES ('value1', 'value2', 'value3', 'value4');`
- `INSERT INTO profile(profile_id, profile_activation_token, profile_at_handle, profile_email, profile_hash, profile_phone) VALUES (gen_random_uuid(), 'nananananananananananananananana', 'myAtHandle', 'email@email.com', 'nanananananananananananananananananananananananananananananananananananananananananananananananaa', '505-866-5309');`

### Inserting into tables with Foreign keys.
- `INSERT INTO tweet(tweet_id, tweet_profile_id, tweet_content, tweet_date) VALUES ('f4ca87c9-3ed8-41be-8516-853940068a77','eb685843-295a-47c9-9ff6-1f3f27749f9f', 'I hate dates because I never get them', NOW());`
    - FOREIGN KEYS MUST EXIST IN THE PARENT TABLE OR postgres WILL THROW A FOREIGN KEY CONSTRAINT VIOLATION.
    - dates must be in the format year-month-day hour:minute:second, or use the now() function in postgres.
    - NOW() is a built-in postgres function that returns the current server time.

## UPDATE
- Updates a row in a database.
- `UPDATE table SET colunm1 = newValue1, column2 = newValue2, WHERE primary_key = uuid;`
- `UPDATE tweet SET tweet_content='I get dates now', tweet_date = NOW() WHERE tweet_id = 'f4ca87c9-3ed8-41be-8516-853940068a77';`
- `WHERE` specifies what record you are trying to update/delete/select.
    - For the most part you will be using primary keys to specify what you are updating/deleting
    - Generally a bad idea to update foreign keys.
      - With SET you can specify what columns you are trying to update.

## DELETE
- deletes a row in the database.
- `DELETE FROM table WHERE primary_key = uuid;`
- `DELETE FROM tweet WHERE tweet_id = 'e4ca87c9-3ed8-41be-8516-853940068a77';`
- make sure you have a where with delete or else you will delete every record in the table.

## SELECT
- SELECT grabs data from the database.
- SELECT accounts for ≈ 70% of database operations
- `SELECT  column1, column2, column3, column4, FROM table WHERE condition = true;`
- `SELECT tweet_id, tweet_profile_id, tweet_content, tweet_date from tweet WHERE tweet_profile_id = 'd4ca87c9-3ed8-41be-8516-853940068a77';`
    - Statement grabs all tweets from user 'd4ca87c9-3ed8-41be-8516-853940068a77'
- `SELECT tweet_id, tweet_profile_id, tweet_content, tweet_date from tweet WHERE tweet_content LIKE '%fuzzy%'`;
- can use an equality after the where statement.

## JOINS
### Simple joins
- `SELECT tableA.column1, tableA.column2, tableA.column3, tableB.column3 FROM tableA INNER JOIN tableB on tableA.primaryKeyA = tableB.foreignKeyA WHERE tableA.column = true`

- `SELECT tweet.tweet_id,  tweet.tweet_profile_id,  tweet.tweet_content, tweet.tweet_date profile.profile_at_handle FROM tweet INNER JOIN profile on tweet.tweet_profile_id = profile.profile_id where tweet.tweet_content = 'California'`
### Complex joins
- `SELECT tweet.tweet_id, tweet.tweet_profile_id, tweet.tweet_content, tweet.tweet_date, profile.profile_at_handle FROM tweet INNER JOIN 'like' ON tweet.tweet_id = like.like_tweet_id INNER JOIN profile ON profile.profile_id = like.like_profile_id WHERE like.like_tweet_id = 'd4ca87c9-3ed8-41be-8516-853940068a77'`