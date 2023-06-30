# CSharp and SQL Fundamentals
01. What is the purpose of a `namespace`?

  > Namespaces are useful for organizing multiple files into categories. We have been using namespaces for controllers, repositories, and services.

02. What is the difference between a `class` and an `interface`?

  > Interfaces hold functions with no bodies in them.

03. What is the method that returns an instance of a class, yet it has no return type?

  > Constructor

05. In the Car example what is the access modifier of the `Start()` method?

  ```c#
  abstract class Car
  {
    public string Start()
    {

      return "Vroooom";

    }
  }
  ```
Public

  > | ANSWER HERE |

06. In the Car example what is `string` an indication of?

  > The datatype that is going to be returned

07. In the Car example what is `abstract` preventing?

  > It means you cannot instantiate an instance of it.

08. In a SQL table, what is the difference between information in a row and information in a column?

  > Rows are items, columns are keys, cells are values

09. Demonstrate the necessary SQL for creating a table called `characters` with the values `name, age, description` as strings, and an `int` id.

  > CREATE TABLE characters(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(500),
  age INT NOT NULL,
  description VARCHAR(500),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) default charset utf8 COMMENT '';

10. In SQL how can you query more than a single table? Provide an example.

  > FROM recipes rcp
    JOIN accounts creator ON rcp.creatorId = creator.id
> This pulls from the account table and the recipes table
