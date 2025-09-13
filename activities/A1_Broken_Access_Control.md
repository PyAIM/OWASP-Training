# Activity 1: Broken Access Control

## Objective

In this activity, you will learn to identify and exploit Broken Access Control vulnerabilities. You will gain unauthorized access to privileged functionality and data by manipulating URLs and bypassing server-side checks.

## What is Broken Access Control?

Broken Access Control is a vulnerability that allows attackers to access resources and perform actions that they are not authorized to. This can include accessing other users' accounts, viewing sensitive files, or modifying other users' data.

## Exploitation

### Challenge 1: Admin Section Access

1.  **Log in** to the OWASP Juice Shop with a regular user account.
2.  **Explore** the application and note the different sections you can access.
3.  **Try to access** the administration section by directly navigating to `/administration` in the URL.

**Flag:** What is the path to the administration section?

### Challenge 2: Insecure Direct Object References (IDOR)

1.  **Log in** to the OWASP Juice Shop with a regular user account.
2.  **Navigate** to the "My Account" section and observe the URL.
3.  **Modify** the user ID in the URL to access another user's account details.

**Flag:** What is the email address of the user with ID 2?

## Mitigation

*   Implement access control checks on the server-side for every request.
*   Use a centralized access control mechanism.
*   Deny access by default.
*   Log access control failures and alert administrators.


