# Activity 9: Security Logging and Monitoring Failures

## Objective

In this activity, you will learn to identify and exploit Security Logging and Monitoring Failures. You will perform malicious activities without being detected and evade security controls.

## What are Security Logging and Monitoring Failures?

These vulnerabilities occur when an application does not properly log and monitor security events. This can make it difficult to detect and respond to security incidents.

## Exploitation

### Challenge 1: Evade Detection

1.  **Perform** a series of malicious activities in the OWASP Juice Shop, such as SQL injection, XSS, and IDOR.
2.  **Try to evade** detection by using different techniques, such as encoding your payloads or using a proxy.

**Flag:** What is the flag you obtain after successfully evading detection?

### Challenge 2: Tamper with Logs

1.  **Find** the log files of the OWASP Juice Shop application.
2.  **Try to tamper** with the log files to remove any evidence of your malicious activities.

**Flag:** What is the flag you obtain after successfully tampering with the log files?

## Mitigation

*   Implement a comprehensive logging and monitoring solution.
*   Log all security events, including successful and failed authentication attempts, access control failures, and input validation failures.
*   Protect log files from tampering.
*   Regularly review and analyze log files for suspicious activity.


