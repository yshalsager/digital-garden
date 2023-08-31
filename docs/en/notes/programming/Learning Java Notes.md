---  
title: Learning Java Notes  
created: 2021-12-16 08:53:00  
updated: 2021-12-16 10:46:00  
share: true  
website: en/notes/programming  
---  
  
<https://www.linkedin.com/learning/learning-java-4/downloading-java-on-your-computer>  
  
## Intro  
  
```java  
public class Main {  
 public static void main(String[] args) {  
  System.out.println("Hello World! It's me!");  
 }  
}  
```  
  
- Compiling Java code  
  
```bash  
javac code.java  
```  
  
- Running it  
  
```java  
java code  
```  
  
## Data Types  
  
- Java classifies different pieces of data with data types based on their value.  
- A data type provides a set of possible values.  
- If a piece of data is one of a data type’s values, it is classified as that data type.  
- Primitive Types are the foundation for all other data types within the Java programming language.  
  - Boolean: represents a true or false value (for example, is a light on or off?)  
  - Int: represents a whole number (for example, number of siblings)  
  - Double: represents a decimal number (for example, your GPA)  
  - Char: represents a single letter or symbol (for example, your first initial)  
- Reference Types  
  - String: a sequence of ordered characters (for example, a word or person's name)  
  
```java  
import java.util.Scanner;  
  
public class Main {  
  
    public static void main(String[] args) {  
        double studentGPA = 3.45;  
        String studentFirstName = "Kayla";  
        String studentLastName = "Hammon";  
        char studentFirstInitial = studentFirstName.charAt(0);  
        char studentLastInitial = studentLastName.charAt(0);  
        System.out.println(studentFirstName + " " +  
                studentLastName + " has a GPA of " + studentGPA);  
        System.out.println("What do you want to update it to?");  
  
        Scanner input = new Scanner(System.in);  
        studentGPA = input.nextDouble();  
  
        System.out.println(studentFirstName + " " + studentLastName +  
                " now has a GPA of " + studentGPA);  
    }  
}  
  
```  
  
## Control Flow  
  
- A program’s control flow is the order in which the program’s instructions or code statements are executed.  
- All of the programs we've looked at so far execute one statement after another, sequentially.  
- Here is where explanations or definitions can go; try and keep each built two or three lines max.  
- We can manipulate which line of code is executed with special control flow statements and conditions.  
- A line of code might never be executed, be executed once, or multiple times.  
- The conditions determine how many times a given line of code is executed.  
  
### Scope with an If-Else Statement  
  
```java  
if (inputtedNum < 100) {  
 int favoriteNumber = 5;  
 System.out.println(favoriteNumber);  
 favoriteNumber = 10;  
 System.out.println(favoriteNumber);  
 // In scope (accessible) for favoriteNumber  
} else {  
 // Out of scope (not accessible) for favoriteNumber  
}  
// Out of scope (not accessible) for favoriteNumber  
```  
  
```java  
String favoriteFood = "pizza";  
// In scope (accessible) for favoriteFood  
System.out.println(favoriteFood);  
if (inputtedNum < 100) {  
 // In scope (accessible) for favoriteFood  
 favoriteFood = "chicken tacos"”;  
 System.out.println(favoriteFood);  
} else {  
 // In scope (accessible) for favoriteFood  
 favoriteFood = "steak";  
 System.out.println(favoriteFood);  
}  
// In scope (accessible) for favoriteFood  
```  
