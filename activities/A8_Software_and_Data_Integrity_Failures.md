# Activity 8: Software and Data Integrity Failures

## Objective

In this activity, you will learn to identify and exploit Software and Data Integrity Failures. You will tamper with application data and execute unauthorized code by exploiting insecure deserialization.

## What are Software and Data Integrity Failures?

These vulnerabilities occur when an application does not properly protect against the modification of its software or data. This can include insecure deserialization, code injection, and data tampering.

## Exploitation

### Challenge 1: Insecure Deserialization

1.  **Find** a feature in the OWASP Juice Shop that uses serialization, such as a shopping cart or a user profile.
2.  **Craft** a malicious serialized object to execute arbitrary code on the server.
3.  **Submit** the malicious object to the application.

**Flag:** What is the flag you obtain after exploiting the insecure deserialization vulnerability?

### Challenge 2: Data Tampering

1.  **Find** a feature in the application that allows you to modify data, such as a shopping cart or a user profile.
2.  **Intercept** the request to modify the data and tamper with it.
3.  **Submit** the tampered request to the server.

**Flag:** What is the flag you obtain after tampering with the data?

## Mitigation

*   Use a digital signature to verify the integrity of serialized objects.
*   Do not deserialize untrusted data.
*   Implement strong data validation and integrity checks.


