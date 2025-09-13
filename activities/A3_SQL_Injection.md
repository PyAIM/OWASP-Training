# Activity 3: SQL Injection

## Objective

In this activity, you will learn to identify and exploit SQL Injection vulnerabilities. You will bypass authentication mechanisms and extract sensitive data from the database by injecting malicious SQL queries.

## What is SQL Injection?

SQL Injection is a type of injection vulnerability that allows attackers to interfere with the queries that an application makes to its database. It generally allows an attacker to view data that they are not normally able to retrieve.

## Exploitation

### Challenge 1: Authentication Bypass

1.  **Navigate** to the login page of the OWASP Juice Shop.
2.  **Enter** a SQL injection payload in the email field to bypass authentication.
    *   **Payload:** `admin@juice-sh.op'--`

**Flag:** What is the email of the administrator account?

### Challenge 2: Data Extraction

1.  **Find** a vulnerable input field in the application.
2.  **Use** a UNION-based SQL injection payload to extract data from the database.
    *   **Payload:** `_` UNION SELECT username, password FROM users--`

**Flag:** What is the password hash of the administrator account?

## Mitigation

*   Use parameterized queries (prepared statements) to prevent the interpretation of user input as SQL commands.
*   Sanitize all user input on the server-side.
*   Use the principle of least privilege for database access to the database.


