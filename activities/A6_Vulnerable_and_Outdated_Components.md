# Activity 6: Vulnerable and Outdated Components

## Objective

In this activity, you will learn to identify and exploit vulnerabilities in outdated or vulnerable components. You will leverage known vulnerabilities in third-party libraries to compromise the application.

## What are Vulnerable and Outdated Components?

This vulnerability occurs when an application uses components with known vulnerabilities. These components can be libraries, frameworks, or other software modules. Attackers can exploit these vulnerabilities to gain unauthorized access, execute arbitrary code, or cause a denial of service.

## Exploitation

### Challenge 1: Identify Outdated Libraries

1.  **Explore** the OWASP Juice Shop application and look for any information about the libraries and frameworks it uses.
2.  **Check** the version numbers of the libraries and compare them to the latest versions.
3.  **Search** for known vulnerabilities in the outdated libraries.

**Flag:** What is the name of the vulnerable library used by the application?

### Challenge 2: Exploit a Known Vulnerability

1.  **Find** a known vulnerability in one of the outdated libraries.
2.  **Craft** a payload to exploit the vulnerability.
3.  **Execute** the payload to gain unauthorized access or execute arbitrary code.

**Flag:** What is the flag you obtain after exploiting the vulnerability?

## Mitigation

*   Regularly scan for and update outdated components.
*   Use a software composition analysis (SCA) tool to identify vulnerable components.
*   Remove unused dependencies, unnecessary features, components, files, and documentation.
*   Continuously monitor for newly disclosed vulnerabilities in the components you use.


