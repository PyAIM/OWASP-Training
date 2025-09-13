# Activity 10: Server-Side Request Forgery (SSRF)

## Objective

In this activity, you will learn to identify and exploit Server-Side Request Forgery (SSRF) vulnerabilities. You will force the server to make requests to internal and external resources, potentially leading to information disclosure and remote code execution.

## What is SSRF?

SSRF is a vulnerability that allows an attacker to induce the server-side application to make HTTP requests to an arbitrary domain of the attacker's choosing. This can be used to access internal services, perform port scanning, and interact with cloud provider metadata endpoints.

## Exploitation

### Challenge 1: Access Internal Services

1.  **Find** a feature in the OWASP Juice Shop that takes a URL as input, such as a profile picture uploader or a webhook integration.
2.  **Provide** a URL that points to an internal service, such as `http://localhost:3000/`.
3.  **Observe** the response to see if you can access the internal service.

**Flag:** What is the content of the internal service?

### Challenge 2: Port Scanning

1.  **Use** the SSRF vulnerability to perform a port scan of the local network.
2.  **Try to find** open ports on other servers on the network.

**Flag:** What is the open port you find on another server?

## Mitigation

*   Sanitize and validate all user-supplied URLs.
*   Use a whitelist of allowed domains and protocols.
*   Disable unused URL schemas.
*   Implement network segmentation to restrict the server's access to internal resources.


