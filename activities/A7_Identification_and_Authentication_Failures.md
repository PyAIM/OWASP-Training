# Activity 7: Identification and Authentication Failures

## Objective

In this activity, you will learn to identify and exploit vulnerabilities in identification and authentication mechanisms. You will bypass login pages, hijack user sessions, and compromise user accounts.

## What are Identification and Authentication Failures?

These vulnerabilities occur when an application does not properly verify the identity of its users. This can include weak password policies, insecure session management, and flawed authentication mechanisms.

## Exploitation

### Challenge 1: Brute-force Login

1.  **Find** the login page of the OWASP Juice Shop.
2.  **Use** a brute-force tool like Hydra or Burp Intruder to guess the password of a user.

**Flag:** What is the password of the `admin` account?

### Challenge 2: Session Hijacking

1.  **Log in** to the OWASP Juice Shop with a regular user account.
2.  **Find** the session cookie that the application uses to track your session.
3.  **Steal** the session cookie of another user and use it to hijack their session.

**Flag:** What is the session cookie of the `admin` account?

## Mitigation

*   Implement a strong password policy.
*   Use multi-factor authentication (MFA).
*   Protect session cookies with the `HttpOnly` and `Secure` flags.
*   Use a secure session management mechanism.


