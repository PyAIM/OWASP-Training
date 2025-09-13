# Activity 2: Cross-Site Scripting (XSS)

## Objective

In this activity, you will learn to identify and exploit Cross-Site Scripting (XSS) vulnerabilities. You will inject malicious scripts into the web application to execute arbitrary code in the victim's browser.

## What is Cross-Site Scripting?

Cross-Site Scripting (XSS) is a type of injection vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. These scripts can be used to steal session tokens, deface websites, or redirect users to malicious sites.

## Exploitation

### Challenge 1: Reflected XSS

1.  **Navigate** to the search bar in the OWASP Juice Shop.
2.  **Enter** a simple search term and observe the URL.
3.  **Inject** a simple script into the search bar, such as `<script>alert('XSS')</script>`.

**Flag:** What is the search query that triggers the XSS alert?

### Challenge 2: Stored XSS

1.  **Find** a feature in the application that allows you to store data, such as a comment section or a user profile.
2.  **Inject** a malicious script into the input field.
3.  **Log out** and log back in to see if the script is executed.

**Flag:** What is the page that executes the stored XSS script?

## Mitigation

*   Sanitize all user input on the server-side.
*   Use a Content Security Policy (CSP) to restrict the sources of executable scripts.
*   Use a web application firewall (WAF) to filter out malicious input.


