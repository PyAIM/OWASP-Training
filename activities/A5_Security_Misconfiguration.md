# Activity 5: Security Misconfiguration

## Objective

In this activity, you will learn to identify and exploit Security Misconfiguration vulnerabilities. You will discover sensitive files and information that are exposed due to misconfigured security settings.

## What is Security Misconfiguration?

Security Misconfiguration vulnerabilities occur when a web application is not configured securely. This can include using default credentials, enabling unnecessary features, or exposing sensitive information in error messages.

## Exploitation

### Challenge 1: Find the Scoreboard

1.  **Explore** the OWASP Juice Shop application and look for any interesting files or directories.
2.  **Try to find** the scoreboard page, which is often hidden or not directly linked.

**Flag:** What is the URL of the scoreboard page?

### Challenge 2: Access Sensitive Files

1.  **Use** a directory brute-forcing tool like `dirb` or `gobuster` to find hidden files and directories.
2.  **Look for** files with extensions like `.bak`, `.conf`, or `.log` that may contain sensitive information.

**Flag:** What is the content of the `package.json.bak` file?

## Mitigation

*   Follow a hardening process to secure the application and server configuration.
*   Disable unnecessary features and services.
*   Use custom error pages that do not expose sensitive information.
*   Regularly review and update the security configuration.


