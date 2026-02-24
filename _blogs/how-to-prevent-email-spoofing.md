---
title: "I Received a Scam Email From My Own Domain, Here’s How to Stop It"
excerpt: "I received a scam email from my own domain. Here's what happened and how you can protect your domain from email spoofing."
coverImage: "/assets/blogs/how-to-prevent-email-spoofing/cover.webp"
date: "2026-02-19T13:39:40.000Z"
author:
  name: Umair Jibran
  picture: "/assets/authors/jibran.webp"
ogImage:
  url: "/assets/blogs/how-to-prevent-email-spoofing/open-graph.webp"
tags:
  - Security
  - Email
  - DNS
---

## What is Email Spoofing?

Email spoofing is when an attacker forges the "From" address of an email to make it appear as if it was sent from a trusted source, even your own domain.

A few months ago, I received an email from **admin@umairjibran.com**. It looked urgent. It claimed my domain was at risk and required immediate action. It felt something was wrong, because the only mail box I have there is mine, and it is not `admin`. But it looked like it came from my own domain.

After looking closely in the headers of the email and parsing the records, I found the real sending server. The attacker simply forged the From field. No access to my mailbox, so it wasn't "hacked", just spoofed.

Recently, the same happened to a friend. He runs an online store, and is not technical enough to understand, he panicked and clicked the link, but something didn't seem right so he did not go through with it and instead contacted me. We sat down and found out that it was the exact same scam.

Given how common this is, I decided to write and record it for my own, and anyone else who may be interested.

---

## Why is Email Spoofing Important?

Because your domain reputation is at stake.

If attackers spoof your domain:

- Others can receive scam emails that appear to come from you
- Your domain may get flagged or blacklisted
- Clients and users can lose trust
- You become an unwilling accomplice in phishing campaigns

And yes — even if your email password is strong, spoofing can still happen if your DNS isn’t properly configured.

---

## What are the Benefits?

When properly secured:

- Your domain cannot be impersonated _easily_
- Receiving servers can verify legitimate emails
- Your emails are less likely to land in spam
- You protect your brand and reputation

---

## What are the Challenges?

- Many domain owners don’t configure DNS security records
- Default registrar settings are often incomplete
- SPF alone is not enough
- DMARC is misunderstood or skipped
- Monitoring reports takes effort

---

## Step by Step Walkthrough

### Prerequisites:

- Access to your domain DNS settings
- Access to your email provider configuration
- Basic understanding of DNS records

---

### Steps:

**1. Configure SPF (Sender Policy Framework)**  
Add a TXT record specifying which mail servers are allowed to send emails for your domain.

Example:

```

"v=spf1 include:spf.privateemail.com -all"

```

This tells receiving servers which senders are legitimate, in my case privateemail.com, yours may be different.

---

**2. Enable DKIM (DomainKeys Identified Mail)**
DKIM cryptographically signs your emails.

Your email provider usually generates:

- A public key (added as a DNS TXT record)
- A private key (used internally)

This ensures email integrity.

---

**3. Set Up DMARC (Domain-based Message Authentication, Reporting & Conformance)**
This is the enforcement layer.

Start with monitoring mode:

**NOTE**: `rua` stands for _Reporting URI for Aggregate_ reports, the email you have added will receive periodic email updates.

```

v=DMARC1; p=none; rua=mailto:you@yourdomain.com

```

Once confident, enforce it:

```

v=DMARC1; p=quarantine; rua=mailto:you@yourdomain.com

```

Eventually:

```

v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s; rua=mailto:you@yourdomain.com

```

This tells receiving servers what to do when SPF/DKIM fail.

Reject means: drop the spoofed email.

That’s what you want.

---

## Step B: Testing and Troubleshooting

### Testing the Setup:

- Send yourself an email and inspect headers
- Use tools like MXToolbox to verify SPF/DKIM/DMARC
- Monitor DMARC aggregate reports

You want:

- SPF: PASS
- DKIM: PASS
- DMARC: PASS

---

### Common Issues and Solutions:

**If SPF check fails?**
Check if your email provider is properly included.

**If DKIM is still missing?**
Make sure you have enabled it from your mail provider dashboard.

**DMARC Too Strict?**
Start with `p=none`, observe reports, then tighten policy.

---

## Conclusion

Email spoofing doesn’t require your password, just a weak DNS setup. Lock down SPF, DKIM, and DMARC properly, and you protect not just yourself, but everyone who trusts your domain.

---

## References

- [Statistics](https://www.vpnranks.com/resources/email-spoofing-statistics/)
- [SPF Overview](https://datatracker.ietf.org/doc/html/rfc7208)
- [DKIM Overview](https://datatracker.ietf.org/doc/html/rfc6376)
- [DMARC Overview](https://datatracker.ietf.org/doc/html/rfc7489)
