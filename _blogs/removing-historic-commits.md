---
title: "Ultimate Guide to Removing Sensitive Data from Git History: Protect Your Codebase"
excerpt: "Discover the definitive methods to remove sensitive data like API keys from Git history. Learn how to safeguard your repository, rewrite commit history, and prevent future leaks using best practices."
coverImage: "/assets/blogs/removing-historic-commits/cover.webp"
date: "2024-12-08T18:13:00.000Z"
author:
  name: Umair Jibran
  picture: "/assets/authors/jibran.webp"
ogImage:
  url: "/assets/blogs/removing-historic-commits/cover.webp"
tags:
  - github
  - git
  - sensitive-data-removal
  - api-security
  - devops-best-practices
  - version-control
---

# Ultimate Guide to Removing Sensitive Data from Git History: Protect Your Codebase

> Unlike traditional credentials, secrets are meant to be distributed to developers, applications, and infrastructure systems. Adding more of these factors will inevitably make the number of secrets used in a development cycle increase, leading to a natural sprawling phenomenon: secrets start to appear hardcoded in source code. From an organization’s point of view, visibility and control over their distribution start to degrade. This is what secrets sprawl is all about – [GitGuardian](https://www.gitguardian.com/glossary/secret-sprawl-definition?ref=umairjibran.com)

## Steps to Remove Historic Commits with Sensitive Data

### 1. Understand the Problem

When sensitive data is committed to a Git repository:

- It remains in the commit history even if removed in later commits.
- Anyone with access to the repository can recover the data by inspecting the history.

The solution involves rewriting the commit history to permanently remove sensitive data.

---

### 2. Prerequisites

- **Backup:** Clone the repository and create a backup to prevent accidental data loss.
- **Access:** Ensure you have the necessary permissions to rewrite history and force-push changes.

---

### 3. Choose a Method for Removal

There are two primary tools for removing sensitive data from Git history:

#### A. **Git Filter-Branch (Deprecated, but Widely Used)**

```bash
git filter-branch --force --index-filter \
'git rm --cached --ignore-unmatch path/to/your/file' \
--prune-empty --tag-name-filter cat -- --all
```

- `--index-filter`: Removes the file from the Git index for all commits.
- `--prune-empty`: Removes commits that become empty after file removal.
- `--all`: Rewrites all branches.

#### B. **BFG Repo-Cleaner (Recommended)**

BFG Repo-Cleaner is faster and simpler than `git filter-branch`.

1. Install BFG:

   ```bash
   brew install bfg
   ```

   Or download the [BFG JAR file](https://rtyley.github.io/bfg-repo-cleaner/).

2. Use BFG to remove sensitive files:

   ```bash
   bfg --delete-files path/to/your/file
   ```

   Or to remove specific strings (like API keys):

   ```bash
   bfg --replace-text replace-patterns.txt
   ```

   Format for `replace-patterns.txt`:

   ```
   YOUR_SECRET_KEY==>
   ```

3. Clean up and repackage the repository:
   ```bash
   git reflog expire --expire=now --all
   git gc --prune=now --aggressive
   ```

---

### 4. Push the Changes

Force push the cleaned history to the remote repository:

```bash
git push origin --force --all
git push origin --force --tags
```

---

### 5. Notify Collaborators

- Let collaborators know the history was rewritten.
- Advise them to re-clone the repository to avoid conflicts.

---

### 6. Invalidate Leaked Credentials

- Rotate the API keys or sensitive credentials immediately, as they might have been compromised.
- Use tools like [GitGuardian](https://www.gitguardian.com/) to detect any leaks.

---

## Use Case Example

Imagine you accidentally commit an API key in a file named `config.json`. Here’s how to remove it:

1. **Identify the File:** Check if the file is part of your history.

   ```bash
   git log --all -- config.json
   ```

2. **Remove the File Using BFG:**

   ```bash
   bfg --delete-files config.json
   ```

3. **Replace the Key in the File Content:**
   Create `replace-patterns.txt`:

   ```
   OLD_API_KEY==>
   ```

   Then run:

   ```bash
   bfg --replace-text replace-patterns.txt
   ```

4. **Repackage and Push:**

   ```bash
   git reflog expire --expire=now --all
   git gc --prune=now --aggressive
   git push origin --force --all
   ```

5. **Rotate API Keys:** Immediately invalidate the old API key and issue a new one.

---

## Best Practices to Avoid Leaking Sensitive Data

1. **Use `.gitignore`:** Prevent sensitive files from being committed.
2. **Git Hooks:** Use pre-commit hooks to scan for sensitive data.
3. **Environment Variables:** Store sensitive data outside the repository.
4. **Secret Scanning:** Enable tools like [GitHub's secret scanning](https://docs.github.com/en/code-security/secret-scanning) or [GitGuardian](https://www.gitguardian.com/).

---

## References

- [Git Documentation on Filter-Branch](https://git-scm.com/docs/git-filter-branch)
- [BFG Repo-Cleaner Documentation](https://rtyley.github.io/bfg-repo-cleaner/)
- [GitHub Docs: Removing Sensitive Data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
- [GitGuardian for Secret Scanning](https://www.gitguardian.com/)
- [Rotating API Keys Best Practices](https://blog.gitguardian.com/api-key-rotation-best-practices/)
