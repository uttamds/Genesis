# VBA Worksheet – 5 Practical Challenges

**Level:** Beginner to Intermediate
**Tool:** Microsoft Excel + VBA Editor
**Objective:** Learn how to use the VBA Editor to automate simple but realistic Excel tasks.

### General Instructions

For each task:

1. Open Excel and create the required worksheet/data.
2. Open the **VBA Editor** using `Alt + F11`.
3. Insert a **Module**.
4. Write the VBA code yourself.
5. Run the macro and verify the result.
6. Try to make the macro work even when the number of records changes.

---

## Task 1 – Create a Personalized Greeting

### Scenario

You have a worksheet named **Students** containing student names in column A.

| A            |
| ------------ |
| Student Name |
| Rahul        |
| Priya        |
| Arjun        |
| Sneha        |
| Kiran        |

Create a VBA macro called `StudentGreeting`.

When the macro runs, it should:

* Read the student's name from each row.
* Create a greeting such as:

> Hello Rahul, welcome to today's training!

* Display the greeting using a message box.

### Challenge

Do **not** write five separate statements for the five students.

Use a loop so that the same VBA code works for any number of students.

### Why are you doing this?

This introduces one of the most important ideas in VBA:

**Using code to repeatedly perform an operation on Excel data.**

You are learning to:

* Access worksheet cells through VBA.
* Read values from Excel.
* Use variables.
* Use a `For` loop.
* Interact with the user through `MsgBox`.

This is the foundation for almost every Excel automation task.

---

# Task 2 – Automatically Calculate Student Results

### Scenario

Create a worksheet named **Marks**.

| Student | Python | Java | Database | Total | Average | Result |
| ------- | -----: | ---: | -------: | ----: | ------: | ------ |
| Rahul   |     78 |   65 |       81 |       |         |        |
| Priya   |     92 |   88 |       95 |       |         |        |
| Arjun   |     45 |   51 |       39 |       |         |        |
| Sneha   |     67 |   72 |       70 |       |         |        |

Write a VBA macro called `CalculateResults`.

For every student, the macro should:

1. Calculate the **Total**.
2. Calculate the **Average**.
3. If the average is **50 or above**, display `PASS`.
4. Otherwise display `FAIL`.

The VBA program should place the results directly into columns E, F and G.

### Challenge

The macro should automatically identify the last student instead of assuming that there are exactly four students.

### Why are you doing this?

This task moves beyond simply reading data.

You are now using VBA to **process information and make decisions**.

You will practice:

* Arithmetic operations.
* Variables.
* `If...Else`.
* Writing calculated values back into Excel.
* Finding the last row.
* Combining loops with conditions.

This is similar to the kind of automation used in real Excel-based reporting systems.

---

# Task 3 – Find and Highlight Low Stock Items

### Scenario

A small shop maintains its inventory in Excel.

| Item Code | Item     | Available Qty | Reorder Level |
| --------- | -------- | ------------: | ------------: |
| P101      | Keyboard |             8 |            10 |
| P102      | Mouse    |            25 |            10 |
| P103      | Monitor  |             5 |             8 |
| P104      | Printer  |            12 |             5 |
| P105      | Webcam   |             3 |             7 |

Create a VBA macro called `CheckInventory`.

The macro should examine every item.

If:

**Available Quantity < Reorder Level**

then the macro should:

* Change the item's row formatting to make it noticeable.
* Write `REORDER` in a new column called **Status**.

Otherwise write:

`OK`

### Challenge

At the end, display a message such as:

> Inventory check completed. 2 items need to be reordered.

The number should be calculated by VBA, not hard-coded.

### Why are you doing this?

This represents a very common business use of VBA:

**turning raw Excel data into actionable information.**

Instead of manually checking hundreds of inventory records, a macro can perform the check instantly.

You are learning:

* Comparing values.
* Conditional logic.
* Changing cell properties through VBA.
* Maintaining a counter.
* Producing a summary message.
* Automating a repetitive business task.

---

# Task 4 – Create a Simple Data Entry Form

### Scenario

A trainer wants to enter student information into Excel.

Create a worksheet called **StudentData** with these columns:

| Student ID | Name | Course | Score |
| ---------- | ---- | ------ | ----: |

Create a VBA macro called `AddStudent`.

When the macro runs, it should ask the user for:

1. Student ID
2. Student Name
3. Course
4. Score

Use input boxes to collect the information.

The macro should then automatically add the information to the **next empty row**.

For example:

> Enter Student ID: 105
> Enter Name: Ananya
> Enter Course: Python
> Enter Score: 82

The information should appear as a new row in the worksheet.

### Challenge

Add basic validation:

* Student ID cannot be blank.
* Name cannot be blank.
* Score must be between 0 and 100.

If the score is invalid, display an appropriate message.

### Why are you doing this?

Until now, the user has been entering data directly into Excel.

Here, you are making Excel behave more like a **small application**.

You are learning:

* `InputBox`.
* Variables.
* User interaction.
* Validation.
* Finding the next available row.
* Writing multiple values into a worksheet.

This is an important step toward understanding how VBA can be used to build simple business applications inside Excel.

---

# Task 5 – Generate a Training Report Automatically

### Scenario

You have a worksheet containing student assessment data.

| Student | Technical | Aptitude | Communication |
| ------- | --------: | -------: | ------------: |
| Rahul   |        82 |       65 |            74 |
| Priya   |        91 |       88 |            90 |
| Arjun   |        45 |       62 |            51 |
| Sneha   |        76 |       81 |            79 |
| Kiran   |        55 |       48 |            60 |

Create a VBA macro called `GenerateReport`.

The macro should:

1. Create a **new worksheet** called `Training Report`.
2. Copy the student names and scores into the new sheet.
3. Calculate an **Overall Score** for each student.
4. Add a **Performance** column.
5. Classify students as:

| Overall Score | Performance       |
| ------------: | ----------------- |
|   80 or above | Excellent         |
|         60–79 | Good              |
|      Below 60 | Needs Improvement |

6. At the bottom of the report, display:

   * Number of students
   * Average overall score
   * Highest overall score
   * Lowest overall score

### Challenge

The macro should create the report from the source data every time it runs.

If a `Training Report` sheet already exists, handle that situation appropriately rather than simply crashing with an error.

### Why are you doing this?

This is the most comprehensive task in the worksheet.

You are now combining several VBA concepts to solve a realistic problem:

**Read → Process → Decide → Create → Report**

You will practice:

* Creating worksheets using VBA.
* Copying data.
* Loops.
* Calculations.
* Conditional logic.
* Finding the last row.
* Working with multiple worksheets.
* Basic error handling.
* Generating an automated report.

This demonstrates why VBA is useful in the first place: instead of manually preparing the same report every week, a macro can generate it automatically.

---

# What You Should Be Able to Do After These 5 Tasks

By completing the worksheet, you should have practiced the following VBA concepts:

| Concept              | Where you use it |
| -------------------- | ---------------- |
| VBA Editor           | All tasks        |
| Variables            | All tasks        |
| Reading cells        | Tasks 1–5        |
| Writing to cells     | Tasks 2–5        |
| `For` loop           | Tasks 1–5        |
| `If...Else`          | Tasks 2–5        |
| `MsgBox`             | Tasks 1, 3, 4    |
| `InputBox`           | Task 4           |
| Finding last row     | Tasks 2–5        |
| Formatting cells     | Task 3           |
| Creating worksheets  | Task 5           |
| Multiple worksheets  | Task 5           |
| Validation           | Task 4           |
| Basic error handling | Task 5           |

## Final Challenge

After completing all five tasks, choose **one task** and modify it so that the macro works with a completely different dataset.

The objective is not merely to make the given example work.

**The real objective is to understand the VBA logic well enough to reuse it.**
