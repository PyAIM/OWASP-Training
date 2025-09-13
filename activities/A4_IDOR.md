# Activity 4: Insecure Direct Object References (IDOR)

## Objective

In this activity, you will learn to identify and exploit Insecure Direct Object References (IDOR) vulnerabilities. You will gain unauthorized access to other users' data by manipulating object references in the URL.

## What is IDOR?

IDOR is a type of access control vulnerability that arises when an application provides direct access to objects based on user-supplied input. As a result of this vulnerability, attackers can bypass authorization and access resources in the system directly, for example database records or files.

## Exploitation

### Challenge 1: Access Another User's Basket

1.  **Log in** to the OWASP Juice Shop with a regular user account.
2.  **Add** an item to your basket.
3.  **Navigate** to your basket and observe the URL. You should see a basket ID in the URL.
4.  **Modify** the basket ID in the URL to access another user's basket.

**Flag:** What is the basket ID of another user?

### Challenge 2: Access Another User's Profile

1.  **Log in** to the OWASP Juice Shop with a regular user account.
2.  **Navigate** to your user profile and observe the URL.
3.  **Modify** the user ID in the URL to access another user's profile.

**Flag:** What is the username of the user with ID 1?

## Mitigation

*   Implement access control checks on the server-side for every request that accesses a private object.
*   Use per-user or session indirect object references. This prevents attackers from directly targeting unauthorized resources.
*   Check access. For any direct object references from the client, the application needs to verify that the user has access to perform the requested action on the requested object.


