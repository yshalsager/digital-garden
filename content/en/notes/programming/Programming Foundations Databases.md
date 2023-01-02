---  
created: 2022-05-16 20:59  
updated: 2022-06-20 18:25  
title: Programming Foundations Databases  
share: true  
website: en/notes/programming  
tags:  
  - مساق_مكتمل  
  - البرمجة  
  - Databases  
---  
  
  
# Programming Foundations: Databases  
  
التكلفة:: 0  
الحالة:: #مساق_مكتمل  
الرابط:: https://www.linkedin.com/learning/programming-foundations-databases-2  
المدة:: 1h25m  
المعرفة:: [البرمجة](%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9), [Databases](Databases)  
المنشيء:: Scott Simpson  
المهام:: [Programming Foundations Databases 2](Programming%20Foundations%20Databases%202.md), [Programming Foundations Databases](Programming%20Foundations%20Databases), [Programming Foundations Databases](Programming%20Foundations%20Databases)  
الموضوع:: Databases  
الوصف:: Once you get beyond basic programming, you'll need a database. Databases provide a consistent, organized structure for storing and retrieving large amounts of data. They allow programmers to build more complex applications that can take orders, process payments, make recommendations, authenticate users, and more. This course provides the foundation you need to get started in database programming. Explore the terminology: normal forms, ACID and CRUD, referential integrity, transactions, records, and tables. Learn what role keys and unique values play in a relational model. Discover how to design the best system to contain your data, starting with the tables and relationships at the core of your database. Find out how to write queries to extract the data you need, and how to juggle the different demands of storage, access, performance, and security. Instructor Scott Simpson provides practical examples and clear explanations that will help you design databases that can withstand the needs of your applications, your data, and your users.  
اﻷركان:: [التعلم](%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%85)  
اﻷهداف:: [LinkedIn Software Developer Path](LinkedIn%20Software%20Developer%20Path), [Full Stack MERN Path](Full%20Stack%20MERN%20Path)  
تاريخ اﻹنتهاء:: 2021-12-05  
موصى به من؟:: كالبنيان المرصوص  
  
## SQL Statements  
  
This document provides a list of SQL statements used in the course _Learning SQL Programming_ from LinkedIn Learning.  
Note that this list contains statements which are improper (they have syntax errors) and statements which are incorrect (they do not achieve the desired goal).  
  
00_02  
  
```  
SELECT * FROM people;  
  
```  
  
```  
SELECT first_name FROM people;  
  
```  
  
01_01  
  
```  
SELECT 'Hello, World!;  
  
```  
  
```  
SELECT first_name FROM people;  
  
```  
  
```  
SELECT last_name FROM people;  
  
```  
  
```  
SELECT first_name, last_name FROM people;  
  
```  
  
```  
SELECT last_name, first_name FROM people;  
  
```  
  
```  
SELECT * FROM people;  
  
```  
  
```  
SELECT first_name, state_code, company FROM people;  
  
```  
  
```  
SELECT company, first_name, quiz_points FROM people;  
  
```  
  
01_02  
  
```  
SELECT * FROM people WHERE state_code='CA';  
  
```  
  
```  
SELECT * FROM people WHERE state_code='ca';  
  
```  
  
```  
SELECT * FROM people WHERE state_code='FL';  
  
```  
  
```  
SELECT * FROM people WHERE state_code='WA';  
  
```  
  
```  
SELECT * FROM people WHERE state_code='NY';  
  
```  
  
```  
SELECT * FROM people WHERE shirt_or_hat='shirt';  
  
```  
  
```  
SELECT first_name, last_name FROM people WHERE shirt_or_hat='shirt';  
  
```  
  
```  
SELECT first_name, last, name, shirt_or_hat  
FROM people  
WHERE  
shirt_or_hat='shirt';  
  
```  
  
```  
/* Improper Statement */  
WHERE shirt_or_hat='shirt'  
FROM people  
SELECT first_name, last_name, shirt_or_hat;  
  
```  
  
```  
/* Improper Statement */  
FROM people  
SELECT first_name, last_name, shirt_or_hat  
WHERE shirt_or_hat='shirt';  
  
```  
  
01_03  
  
```  
SELECT first_name, last_name FROM people WHERE state_code='CA' AND shirt_or_hat='shirt';  
  
```  
  
```  
SELECT team, first_name, last_name FROM people WHERE state_code='CA' AND shirt_or_hat='shirt' AND team='Angry Ants';  
  
```  
  
```  
SELECT team, first_name, last_name FROM people WHERE state_code='CA' AND shirt_or_hat='shirt' AND team!='Angry Ants';  
  
```  
  
```  
SELECT team, first_name, last_name FROM people WHERE state_code='CA' AND shirt_or_hat='shirt' AND team IS 'Angry Ants';  
  
```  
  
```  
SELECT team, first_name, last_name FROM people WHERE state_code='CA' AND shirt_or_hat='shirt' AND team IS NOT 'Angry Ants';  
  
```  
  
```  
SELECT team, first_name, last_name FROM people WHERE state_code='CA' AND shirt_or_hat='shirt' AND team <> 'Angry Ants';  
  
```  
  
```  
SELECT team, first_name, last_name FROM people WHERE state_code='CA' OR state_code='CO' AND shirt_or_hat='shirt' AND team IS 'Angry Ants';  
  
```  
  
```  
SELECT team, first_name, last_name, shirt_or_hat, state_code FROM people WHERE state_code='CA' OR state_code='CO' AND shirt_or_hat='shirt' AND team IS 'Angry Ants';  
  
```  
  
```  
SELECT team, first_name, last_name, shirt_or_hat, state_code FROM people WHERE (state_code='CA' OR state_code='CO') AND shirt_or_hat='shirt' AND team IS 'Angry Ants';  
  
```  
  
```  
SELECT team, first_name, last_name, shirt_or_hat, state_code FROM people WHERE state_code='CA' OR (state_code='CO' AND shirt_or_hat='shirt') AND team IS 'Angry Ants';  
  
```  
  
01_04  
  
```  
SELECT * FROM people WHERE state_code='CA' OR state_code='CO' OR state_code='CT';  
  
```  
  
```  
SELECT first_name, last_name, state_Code FROM people WHERE state_code LIKE 'C%';  
  
```  
  
```  
SELECT first_name, last_name, state_Code FROM people WHERE first_name LIKE 'A%';  
  
```  
  
```  
SELECT first_name, last_name, state_Code FROM people WHERE first_name LIKE 'J%';  
  
```  
  
```  
SELECT first_name, last_name, state_Code FROM people WHERE first_name LIKE '%J%';  
  
```  
  
```  
SELECT first_name, last_name, state_Code FROM people WHERE first_name LIKE 'b%n';  
  
```  
  
```sql  
SELECT * FROM people WHERE company LIKE '%LLC';  
```  
  
```  
SELECT * FROM people WHERE company LIKE '%LLC' LIMIT 5;  
  
```  
  
```  
SELECT * FROM people WHERE company LIKE '%LLC' LIMIT 10;  
  
```  
  
```  
SELECT * FROM people WHERE company LIKE '%LLC' LIMIT 10 OFFSET 5;  
  
```  
  
01_05  
  
```  
SELECT first_name, last_name FROM people;  
  
```  
  
```  
SELECT first_name, last_name FROM people ORDER BY first_name;  
  
```  
  
```  
SELECT first_name, last_name FROM people ORDER BY first_name ASC;  
  
```  
  
```  
SELECT first_name, last_name FROM people ORDER BY first_name DESC;  
  
```  
  
```  
SELECT state_code, last_name, first_name FROM people ORDER BY state_code, last_name;  
  
```  
  
```  
SELECT state_code, last_name, first_name FROM people ORDER BY state_code, last_name DESC;  
  
```  
  
01_06  
  
```  
SELECT first_name FROM people;  
  
```  
  
```  
SELECT first_name, LENGTH(first_name) FROM people;  
  
```  
  
```  
SELECT DISTINCT(first_name) FROM people;  
  
```  
  
```  
SELECT DISTINCT(first_name) FROM people ORDER BY first_name;  
  
```  
  
```  
SELECT DISTINCT(shirt_or_hat) FROM people;  
  
```  
  
```  
SELECT COUNT(*) FROM people WHERE state_code='CA';  
  
```  
  
```  
SELECT COUNT(first_name) FROM people WHERE state_code='CA';  
  
```  
  
```  
SELECT COUNT(last_name) FROM people WHERE state_code='CA';  
  
```  
  
01_08  
  
```  
SELECT first_name, last_name, quiz_points, shirt_or_hat, team  
FROM people  
ORDER BY shirt_or_hat, team;  
  
```  
  
02_01  
  
```  
SELECT first_name, state_code FROM people;  
  
```  
  
```  
SELECT first_name, state_code  
FROM people  
JOIN states ON people.state_code=states.state_abbrev;  
  
```  
  
```  
SELECT people.first_name, people.state_code, states.division  
FROM people  
JOIN states ON people.state_code = states.state_abbrev;  
  
```  
  
```  
SELECT * FROM people JOIN states ON people.state_code=states.state_abbrev;  
  
```  
  
```  
SELECT * FROM people  
JOIN states ON people.state_code = states.state_abbrev  
WHERE people.first_name LIKE 'j%' AND states.region = 'South';  
  
```  
  
```  
SELECT people.first_name, states.state_name  
FROM people, states  
WHERE people.state_code=states.state_abbrev;  
  
```  
  
```  
SELECT ppl.first_name, st.state_name  
FROM people ppl, states st  
WHERE ppl.state_code=st.state_abbrev;  
  
```  
  
02_02  
  
```  
SELECT people.first_name, people.last_name, people.state_code, states.state_name  
FROM people  
JOIN states  
ON people.state_code=states.state_abbrev;  
  
```  
  
```  
SELECT people.first_name, people.last_name, people.state_code, states.state_name  
FROM states  
JOIN people  
ON people.state_code=states.state_abbrev;  
  
```  
  
```  
SELECT people.first_name, people.last_name, people.state_code, states.state_name  
FROM states  
LEFT JOIN people  
ON people.state_code=states.state_abbrev;  
  
```  
  
```  
SELECT DISTINCT(people.state_code), states.state_name  
FROM states  
LEFT JOIN people  
ON people.state_code=states.state_abbrev;  
  
```  
  
02_03  
  
```  
/* Incorrect statement */  
SELECT first_name, COUNT(first_name) FROM people;  
  
```  
  
```  
SELECT first_name, COUNT(first_name)  
FROM people  
GROUP BY first_name;  
  
```  
  
```  
/* Incorrect statement */  
SELECT first_name, COUNT(first_name)  
FROM people  
GROUP BY last_name;  
  
```  
  
```  
SELECT last_name, COUNT(last_name)  
FROM people  
GROUP BY last_name;  
  
```  
  
```  
SELECT state_code, COUNT(state_code)  
FROM people  
GROUP BY state_code;  
  
```  
  
```  
/* Incorrect Statement */  
SELECT state_code, quiz_points, COUNT(quiz_points)  
FROM people  
GROUP BY quiz_points  
  
```  
  
```  
SELECT state_code, quiz_points, COUNT(quiz_points)  
FROM people  
GROUP BY state_code, quiz_points  
  
```  
  
02_05  
  
```  
SELECT states.state_name, COUNT(people.shirt_or_hat)  
FROM states  
JOIN people ON states.state_abbrev=people.state_code  
WHERE people.shirt_or_hat='hat'  
GROUP BY people.shirt_or_hat, states.state_name;  
  
```  
  
```  
SELECT states.division, people.team, count(people.team)  
FROM states  
JOIN people ON states.state_abbrev=people.state_code  
GROUP BY states.division, people.team;  
  
```  
  
03_02  
  
```  
SELECT 4+2;  
  
```  
  
```  
SELECT 1/3;  
  
```  
  
```  
SELECT first_name, quiz_points FROM people WHERE quiz_points > 70;  
  
```  
  
```  
SELECT first_name, quiz_points FROM people WHERE quiz_points >= 70;  
  
```  
  
```  
SELECT first_name, quiz_points FROM people WHERE quiz_points >= 70 ORDER BY quiz_points;  
  
```  
  
```  
SELECT first_name, quiz_points FROM people WHERE quiz_points <= 70 ORDER BY quiz_points;  
  
```  
  
```  
SELECT MAX(quiz_points), MIN(quiz_points) FROM people;  
  
```  
  
```  
SELECT SUM(quiz_points) FROM people;  
  
```  
  
```  
SELECT team, COUNT(*), SUM(quiz_points), SUM(quiz_points)/COUNT(*) FROM people GROUP BY team;  
  
```  
  
```  
SELECT team, COUNT(*), SUM(quiz_points), AVG(quiz_points) FROM people GROUP BY team;  
  
```  
  
03_03  
  
```  
/* Improper statement */  
SELECT first_name, last_name, quiz_points FROM people WHERE quiz_points=MAX(quiz_points);  
  
```  
  
```  
SELECT first_name, last_name, quiz_points FROM people WHERE quiz_points=(SELECT MAX(quiz_points) FROM people);  
  
```  
  
```  
SELECT * FROM people WHERE state_code=(SELECT state_abbrev FROM states WHERE state_name='Minnesota');  
  
```  
  
03_04  
  
```  
SELECT first_name, last_name FROM people;  
  
```  
  
```  
SELECT LOWER(first_name), UPPER(last_name) FROM people;  
  
```  
  
```  
SELECT LOWER(first_name), SUBSTR(last_name, 1, 5) FROM people;  
  
```  
  
```  
SELECT REPLACE(first_name, 'a', '-') FROM people;  
  
```  
  
```  
SELECT quiz_points FROM people ORDER BY quiz_points;  
  
```  
  
```  
SELECT quiz_points FROM people ORDER BY CAST(quiz_points AS CHAR);  
  
```  
  
```  
SELECT MAX(CAST(quiz_points AS CHAR)) FROM people;  
  
```  
  
```  
SELECT MAX(CAST(quiz_points AS INT)) FROM people;  
  
```  
  
03_05  
  
```  
SELECT first_name, last_name FROM people;  
  
```  
  
```  
SELECT first_name, UPPER(last_name) FROM people;  
  
```  
  
```  
SELECT first_name as firstname, UPPER(last_name) as surname FROM people;  
  
```  
  
```  
SELECT first_name as firstname, UPPER(last_name) as surname FROM people WHERE firstname='Laura';  
  
```  
  
03_07  
  
```  
SELECT state_code, max(quiz_points) AS maxpoints, avg(quiz_points) AS avgpts  
FROM people  
GROUP BY state_code  
ORDER BY avgpts DESC;  
  
```  
  
04_01  
  
```  
INSERT INTO people (first_name) VALUES ('Bob');  
  
```  
  
```  
SELECT * FROM people;  
  
```  
  
```  
INSERT INTO people  
(first_name, last_name, state_code, city, shirt_or_hat)  
VALUES  
('Mary', 'Hamilton', 'OR', 'Portland', 'hat');  
  
```  
  
```  
SELECT * FROM people;  
  
```  
  
```  
/* Improper Statement */  
INSERT INTO people  
(first_name, last_name)  
VALUES  
('George', 'White'),  
('Jenn', 'Smith'),  
('Carol');  
  
```  
  
```  
INSERT INTO people  
(first_name, last_name)  
VALUES  
('George', 'White'),  
('Jenn', 'Smith'),  
('Carol', NULL);  
  
```  
  
```  
SELECT * FROM people;  
  
```  
  
04_02  
  
```  
/* Incorrect Statement */  
UPDATE people SET last_name = 'Morrison' WHERE first_name='Carlos';  
  
```  
  
```  
SELECT last_name FROM people WHERE first_name='Carlos';  
  
```  
  
```  
UPDATE people SET last_name = 'Morrison' WHERE last_name='Morrrison';  
  
```  
  
```  
SELECT last_name FROM people WHERE first_name='Carlos' AND city='Houston';  
  
```  
  
```  
UPDATE people SET last_name='Morrison'  WHERE first_name='Carlos' AND city='Houston';  
  
```  
  
```  
SELECT * FROM people WHERE id_number=175;  
  
```  
  
```  
UPDATE people SET last_name='Morrison' WHERE id_number=175;  
  
```  
  
```  
SELECT * FROM people;  
  
```  
  
```  
SELECT * FROM people WHERE company='Fisher LLC';  
  
```  
  
```  
UPDATE people SET company='Megacorp Inc' WHERE company='Fisher LLC';  
  
```  
  
```  
SELECT * FROM people WHERE company='Fisher LLC';  
  
```  
  
```  
SELECT * FROM people WHERE company='Megacorp Inc';  
  
```  
  
04_03  
  
```  
/* Incorrect Statement */  
DELETE FROM people;  
  
```  
  
```  
SELECT * FROM people;  
  
```  
  
```  
SELECT * FROM people WHERE id_number=1001;  
  
```  
  
```  
DELETE FROM people WHERE id_number=1001;  
  
```  
  
```  
SELECT * FROM people;  
  
```  
  
```  
SELECT * FROM people WHERE quiz_points IS NULL;  
  
```  
  
```  
DELETE FROM people WHERE quiz_points IS NULL;  
  
```  
  
```  
SELECT * FROM people;  
  
```  
  
```  
INSERT INTO people (first_name, last_name, city, state_code, shirt_or_hat, quiz_points, team, signup, age)  
VALUES  
("Walter", "St. John", "Buffalo", "NY", "hat", "93", "Baffled Badgers", "2021-01-29", NULL),  
("Emerald", "Chou", "Topeka", "KS", "shirt", "92", "Angry Ants", "2021-01-29", 34);  
  
```  
  
```  
SELECT * FROM people;  
  
```  
  
```  
UPDATE people SET shirt_or_hat='shirt' WHERE first_name='Bonnie' AND last_name='Brooks';  
  
```  
  
```  
SELECT * FROM people WHERE first_name='Bonnie' AND last_name='Brooks';  
  
```  
  
```  
UPDATE people SET shirt_or_hat='shirt' WHERE first_name='Bonnie' AND last_name='Brooks';  
  
```  
  
```  
SELECT * FROM people WHERE first_name='Bonnie' AND last_name='Brooks';  
  
```  
  
```  
SELECT * FROM people WHERE first_name='Lois' AND last_name='Hart';  
  
```  
  
```  
DELETE FROM people WHERE first_name='Lois' AND last_name='Hart';  
  
```  
  
```  
SELECT * FROM people WHERE first_name='Lois';  
  
```  
  
# Database Optimization  
  
[https://www.linkedin.com/learning/programming-foundations-databases-2/normalization-2](https://www.linkedin.com/learning/programming-foundations-databases-2/normalization-2)  
  
## Normalization  
  
- In the early 1970s, Edgar Codd defined three rules for organizing data in a database. These are called normalization rules, and they help us to reduce redundancy and improve the integrity of our data.  
- These first three rules, called first, second, and third normal form, are considered to be the standard level of optimization for a business database. Applying these rules is an important step in designing any database.  
- These rules are sets of formal criteria, and they build on top of each other, step by step. We move through the forms as we optimize our database to third normal form.  
- There are many normal forms beyond third normal form, but we won't cover them here because they get a little bit exotic for a basic database like ours.  
- Normalization helps us prevent problems in working with our data, and the process should be revisited whenever there's a change to the schema or the structure of a database.  
- Once your tables all satisfy first, second, and third normal form, the database is normalized to third normal form. This helps to guarantee that your database has low duplication, high integrity, and will be durable when you create, update, read, and delete entries.  
  
## First Normal Form (1NF)  
  
> Values in each cell should be atomic and tables should have no repeating groups.  
  
- This means that each field in each table has only one value in it, and that there are no columns representing repeated kinds of data for each row.  
- First normal form is often extended to include the idea that there aren't duplicate rows in a table. This also suggests that the order of rows and columns is not important to the data.  
  
- To resolve this problem, we'd remove the repeating groups, either from a list in one cell or from multiple columns, and create another table that satisfies first normal form to hold the values. Then, we'd link the tables with a relationship between their keys.  
  
- Violations of first normal form are usually pretty easy to spot early on in the design process. Whenever you find yourself putting multiple values in a cell or creating columns that end with numbers like favorite dish one, favorite dish two and so on, that's a big red flag that indicates you'll need to change the design.  
- If you find that you're relying on the sequence of rows or columns, that's another red flag. If the sequence in which records were entered is important, you'll want to use an auto-incrementing unique value, or a time-stamp, to indicate that instead. When we query data, we might not always get it back in the order in which it appears in a visual representation of the table.  
  
### Second Normal Form (2NF)  
  
> No value in our table should depend only on part of a key that can be used to uniquely identify a row.  
  
- This means that for every column in the table that isn't a key, each of the values must rely on only the whole key.  
- The values must describe something about that row that we can't determine from just the part of a key.  
- This problem comes up in the context of composite keys.  
  
- In order to make this table comply with second normal form, we need to create a new table with a key for the event and a corresponding location. Now the Events table has values that are dependent on the full key, and the new EventsLocations table reflects the fact that each event is held in just one place. The location is now dependent on the event name. Just by knowing the name of the event, we can tell where it's held.  
  
### Third Normal Form (3NF)  
  
> Values shouldn't be stored if they can be calculated from another non-key field.  
  
- While second normal form tells us that we shouldn't be able to determine a value in a column from only part of a composite key, third normal form tells us we shouldn't be able to figure out any value in a column from a field that isn't a key.  
- If a value you're storing can be derived from some kind of rule from another value in the table, that's a violation of third normal form. But if the value can't be derived from another field, if it describes something unique to that row, it's not a violation.  
- In order to put a database into Third Normal Form, it must also be in First and Second Normal Form. Normalization is a progressive process, and higher forms depend on the database being compliant with lower forms as well.  
  
## Denormalization  
  
- While normalizing databases to third normal form is a best practice, occasionally there may be a business need or a database performance issue that requires violating the rules of normalization.  
- Denormalization **is the process of intentionally duplicating information in tables in violation of normalization rules.**  
- Denormalization is done after normalizing a database. It doesn't mean skipping normalization altogether.  
- Denormalization is about trade-offs. Usually a gain in speed for a reduction in consistency and that's a decision you'll need to make based on your own business requirements.  
  
**Example:**  
  
- In our restaurant database, it's not likely we'll run into speed problems any time soon, but as an example of denormalization let's take a look at the Orders table.  
- For each order we can determine the number of items included and a total price for those items. By using the OrderID we can get the associated items in the OrdersDishes table, count them up, and pull information from the Dishes table to get the price of each item and sum those up as well.  
  
- We wouldn't usually store this information on the Orders table because if we did, we'd be storing derived information in a place where it could be edited with no consistency checks.  
- What if an order had three items and cost $26.98 and then someone edited the quantity? Looking back at this record it wouldn't reflect what was really ordered, and the data would be inconsistent, but in problems like this we need to balance when we're making a decision to denormalize.  
- When we ask the database for an order summary, there's a lot of activity going on in the background and with a very large database, a very slow server, or a huge number of requests coming into the database at the same time speed may be something we need to optimize for.  
- So we would make the conscious decision to record the quantity and total at the time when we generate the order, to save time later and we would be aware of this risk to consistency and accuracy in our database.  
