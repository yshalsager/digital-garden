---  
created: 2021-12-05 13:03  
updated: 2022-06-20 18:25  
title: Database Optimization  
share: true  
website: en/notes/programming  
tags: []  
---  
  
# Database Optimization  
  
```toc  
```  
  
https://www.linkedin.com/learning/programming-foundations-databases-2/normalization-2  
  
## Normalization  
- In the early 1970s, Edgar Codd defined three rules for organizing data in a database. These are called normalization rules, and they help us to reduce redundancy and improve the integrity of our data.  
- These first three rules, called first, second, and third normal form, are considered to be the standard level of optimization for a business database. Applying these rules is an important step in designing any database.   
- These rules are sets of formal criteria, and they build on top of each other, step by step. We move through the forms as we optimize our database to third normal form.  
- There are many normal forms beyond third normal form, but we won't cover them here because they get a little bit exotic for a basic database like ours.  
- Normalization helps us prevent problems in working with our data, and the process should be revisited whenever there's a change to the schema or the structure of a database.  
- Once your tables all satisfy first, second, and third normal form, the database is normalized to third normal form. This helps to guarantee that your database has low duplication, high integrity, and will be durable when you create, update, read, and delete entries.  
  
### First Normal Form (1NF)  
> Values in each cell should be atomic and tables should have no repeating groups.  
  
- This means that each field in each table has only one value in it, and that there are no columns representing repeated kinds of data for each row.  
- First normal form is often extended to include the idea that there aren't duplicate rows in a table. This also suggests that the order of rows and columns is not important to the data.  
  
![](../../../Pasted%20image%2020211205131903.png)  
![](../../../Pasted%20image%2020211205132001.png)  
  
- To resolve this problem, we'd remove the repeating groups, either from a list in one cell or from multiple columns, and create another table that satisfies first normal form to hold the values. Then, we'd link the tables with a relationship between their keys.  
  
![](../../../Pasted%20image%2020211205132147.png)  
  
- Violations of first normal form are usually pretty easy to spot early on in the design process. Whenever you find yourself putting multiple values in a cell or creating columns that end with numbers like favorite dish one, favorite dish two and so on, that's a big red flag that indicates you'll need to change the design.  
- If you find that you're relying on the sequence of rows or columns, that's another red flag. If the sequence in which records were entered is important, you'll want to use an auto-incrementing unique value, or a time-stamp, to indicate that instead. When we query data, we might not always get it back in the order in which it appears in a visual representation of the table.  
  
### Second Normal Form (2NF)  
  
> No value in our table should depend only on part of a key that can be used to uniquely identify a row.  
   
- This means that for every column in the table that isn't a key, each of the values must rely on only the whole key.  
- The values must describe something about that row that we can't determine from just the part of a key.   
- This problem comes up in the context of composite keys.  
  
![](../../../Pasted%20image%2020211205132828.png)  
![](../../../Pasted%20image%2020211205132852.png)  
  
- In order to make this table comply with second normal form, we need to create a new table with a key for the event and a corresponding location. Now the Events table has values that are dependent on the full key, and the new EventsLocations table reflects the fact that each event is held in just one place. The location is now dependent on the event name. Just by knowing the name of the event, we can tell where it's held.  
  
### Third Normal Form (3NF)  
> Values shouldn't be stored if they can be calculated from another non-key field.  
  
- While second normal form tells us that we shouldn't be able to determine a value in a column from only part of a composite key, third normal form tells us we shouldn't be able to figure out any value in a column from a field that isn't a key.   
- If a value you're storing can be derived from some kind of rule from another value in the table, that's a violation of third normal form. But if the value can't be derived from another field, if it describes something unique to that row, it's not a violation.  
- In order to put a database into Third Normal Form, it must also be in First and Second Normal Form. Normalization is a progressive process, and higher forms depend on the database being compliant with lower forms as well.  
  
![](../../../Pasted%20image%2020211205140115.png)  
  
## Denormalization  
  
- While normalizing databases to third normal form is a best practice, occasionally there may be a business need or a database performance issue that requires violating the rules of normalization.  
- Denormalization **is the process of intentionally duplicating information in tables in violation of normalization rules.**  
- Denormalization is done after normalizing a database. It doesn't mean skipping normalization altogether.  
- Denormalization is about trade-offs. Usually a gain in speed for a reduction in consistency and that's a decision you'll need to make based on your own business requirements.  
  
**Example:**  
-  In our restaurant database, it's not likely we'll run into speed problems any time soon, but as an example of denormalization let's take a look at the Orders table.  
-  For each order we can determine the number of items included and a total price for those items. By using the OrderID we can get the associated items in the OrdersDishes table, count them up, and pull information from the Dishes table to get the price of each item and sum those up as well.  
  
![](../../../Pasted%20image%2020211205140423.png)  
  
-  We wouldn't usually store this information on the Orders table because if we did, we'd be storing derived information in a place where it could be edited with no consistency checks.  
-  What if an order had three items and cost $26.98 and then someone edited the quantity? Looking back at this record it wouldn't reflect what was really ordered, and the data would be inconsistent, but in problems like this we need to balance when we're making a decision to denormalize.  
-  When we ask the database for an order summary, there's a lot of activity going on in the background and with a very large database, a very slow server, or a huge number of requests coming into the database at the same time speed may be something we need to optimize for.  
-  So we would make the conscious decision to record the quantity and total at the time when we generate the order, to save time later and we would be aware of this risk to consistency and accuracy in our database.