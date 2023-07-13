# A bit more CSharp and SQL
1. What does ***inheritance*** accomplish for us in C#?

  > Inheritance allows us to limit the amount of properties that a parent class can have. In the case of helpreviews, we moved a few properties of account into a profiles class that extended the account class.

2. How does ***member inheritance*** work in C#? Does a `Class` inherit all members of the base `Class`?

  > It depends which class it is extended on, a Doctor class can extend a profile class which extends an account class. And that doctor class would inherit all the properties from both the profile and account class. Whereas a Nurse class could extend the account class, only inheriting the properties from the account class and not the profile.

3. How does ***accessibility*** affect inheritance?

  > 

4. What is the difference between a `PRIMARY KEY` and a `FOREIGN KEY`

  > | ANSWER HERE |

5. What is an ***alias***?

  > | ANSWER HERE |

6. Demonstrate how you would query a join statement that would get all of a doctors patients from the following collections:

  ```SQL
  CREATE TABLE doctors (
    id INT NOT NULL AUTO_INCREMENT,
    -- CODE OMITTED
    PRIMARY KEY (id)
  )

  CREATE TABLE patients (
    id INT NOT NULL AUTO_INCREMENT,
    -- CODE OMITTED
    PRIMARY KEY (id)
  )

  CREATE TABLE patient_doctors (
    id INT NOT NULL AUTO_INCREMENT,
    doctorId INT NOT NULL,
    patientId INT NOT NULL,

    FOREIGN KEY (doctorId)
      REFERENCES doctors(id),
    FOREIGN KEY (patientId)
      REFERENCES patients(id),
  )

  ```

  > SELECT * FROM
>patient_doctors pt,
> patients p,
> doctors d,
> WHERE pt.doctorId = d.Id
