# Retiring markdown-to-pdf

Plan for [issue #14](https://github.com/natalieMillman/markdown-to-pdf/issues/14). Status: in progress. Steps 1 to 3 were done on 2026-10-25, and step 4 was skipped. Step 5 is done apart from two things: deleting the hosted zone after the registration ends on 2027-08-11, and removing this repository from the AWS Amplify GitHub App, which is on hold. Step 6 is next.

## What's deployed

**In AWS**, checked against the account on 2026-10-25. All of it is in us-east-1 or global, and all of it was created in the console. Step 2 records it in [loqui-infra](https://github.com/natalieMillman/loqui-infra), but nothing manages it there:

- **The Amplify Hosting app `d1ielvxvstj604`**, created 2025-08-09. It serves the `main` branch at `https://main.d1ielvxvstj604.amplifyapp.com`, and builds it from this repository's `amplify.yml` on every push to `main`. It has no backend and no service role: conversion and export run in the browser, and nothing is stored on a server.
- **A firewall.** Amplify's firewall protection is on for the app. It created the AWS WAF web ACL `CreatedByAmplify-d1ielvxvstj604-3ff02703-…`, which runs three AWS managed rule groups: the IP reputation list, the common rule set and known bad inputs.
- **The custom domain `convert-markdown-to-pdf.com`**, attached to the app for the bare domain and `www`, with a certificate Amplify manages. The domain is registered through Route 53 in this account: registered 2025-08-11, auto-renew on, paid up to 2027-08-11.
- **The domain's Route 53 hosted zone** (`Z06990637C1AJDTC3YDZ`), which the registrar created. Besides its NS and SOA records, it holds an alias for the bare domain and a CNAME for `www`, both pointing at the app's CloudFront distribution, and the CNAME that validates the certificate.

Resource Explorer finds nothing else of this project's. Amplify stores and serves the files itself, so there's no S3 bucket or CloudFront distribution of the project's own.

The site is live at `https://main.d1ielvxvstj604.amplifyapp.com` and `https://www.convert-markdown-to-pdf.com`. The canonical address in `src/index.html`, `src/assets/robots.txt` and `src/assets/sitemap.xml`, `https://main.d32l0ni2rme3b0.amplifyapp.com`, is for an app that doesn't exist in the account, and it didn't respond when checked.

**Outside AWS:**

- This GitHub repository, and Amplify's access to it (the AWS Amplify GitHub App, or an older webhook). loqui-client also builds on Amplify, so remove only this repository from the GitHub App, not the app itself.
- The Google Analytics property `G-N4THX35J6Z`. It's free, so it costs nothing to keep.

## Savings

**About $24.80 a month, or roughly $300 a year. The firewall is $23 of that.** These are measured from the account's bills (Cost Explorer) and CloudWatch on 2026-10-25. September 2026 was the last full month.

| Item | What this app uses | Per month |
|------|--------------------|-----------|
| Amplify firewall | $15 per app with firewall protection on. The account pays $30, because loqui-client has it on too. | $15.00 |
| AWS WAF | $5 for the web ACL, plus $1 for each of its 3 rules | $8.00 |
| WAF requests | 43,124 requests in the 30 days to 2026-10-25, at $0.60 per million | $0.03 |
| Data served | 85 MB in the same 30 days, at $0.15 per GB | $0.01 |
| Storage | | Under $0.01 |
| Builds | Every push to `main` builds. None from 2026-07-04 until this plan's merges on 2026-10-25, which took about 3 minutes and $0.03 each. | $0 |
| Route 53 hosted zone | | $0.50 |
| Domain registration | $15 a year. It last renewed in July 2026. | $1.25 |

Notes:

- Amplify's free allowances no longer cover this account: the bills charge for builds, storage and data served.
- The firewall can be turned off on its own, before anything else, which saves $23 a month right away. The site is static, so the firewall has little to protect.
- The domain and hosted zone are already paid until the registration ends on 2027-08-11. Letting the domain go saves $21 a year from then on.
- Retiring the project also ends its upkeep: the Angular and dependency upgrades, and the Amplify build fixes.

### Measuring it again

All of these are read-only:

```bash
export AWS_REGION=us-east-1
APP_ID=d1ielvxvstj604

# The app: firewall, custom domains, recent builds
aws amplify get-app --app-id $APP_ID --query 'app.{name:name,role:iamServiceRoleArn,waf:wafConfiguration}'
aws amplify list-domain-associations --app-id $APP_ID --query 'domainAssociations[].[domainName,domainStatus]'
aws amplify list-jobs --app-id $APP_ID --branch-name main --max-items 5 --query 'jobSummaries[].[startTime,endTime,status]'

# What the account pays for Amplify, WAF, Route 53 and the registrar, by month and usage type.
# The AmplifyWAF and Global- WAF lines include loqui-client's firewall, set up the same way: half
# is this app's. The USE1- WAF lines aren't this app's.
aws ce get-cost-and-usage --time-period Start=2026-07-01,End=2026-10-01 --granularity MONTHLY \
  --metrics UnblendedCost --group-by Type=DIMENSION,Key=SERVICE Type=DIMENSION,Key=USAGE_TYPE \
  --filter '{"Dimensions":{"Key":"SERVICE","Values":["AWS Amplify","AWS WAF","Amazon Route 53","Amazon Registrar"]}}'

# This app's traffic in the last 30 days
for metric in BytesDownloaded Requests; do
  aws cloudwatch get-metric-statistics --namespace AWS/AmplifyHosting --metric-name $metric \
    --dimensions Name=App,Value=$APP_ID --statistics Sum --period 2592000 \
    --start-time 2026-09-25T00:00:00Z --end-time 2026-10-25T00:00:00Z
done

# What the firewall blocked and allowed in the same 30 days
for metric in BlockedRequests AllowedRequests; do
  aws cloudwatch get-metric-statistics --namespace AWS/WAFV2 --metric-name $metric \
    --dimensions Name=WebACL,Value=CreatedByAmplify-d1ielvxvstj604-3ff02703-6898-4d5f-af87-e9379b99806e Name=Rule,Value=ALL \
    --statistics Sum --period 2592000 --start-time 2026-09-25T00:00:00Z --end-time 2026-10-25T00:00:00Z
done

# The domain and its DNS records
aws route53domains get-domain-detail --domain-name convert-markdown-to-pdf.com --query '{autoRenew:AutoRenew,expires:ExpirationDate}'
aws route53 list-resource-record-sets --hosted-zone-id Z06990637C1AJDTC3YDZ
```

## Plan

### 1. Confirm the inventory and the cost

Done on 2026-10-25: the results are above, and on issue #14. The last 90 days in Google Analytics were checked the same day, and step 4 was skipped.

The AWS numbers can't settle step 4, because they count crawlers and scanners along with people, but they do cap it. A first visit downloads 167 KB (the page, its script and its styles, compressed), so the 85 MB served in the 30 days to 2026-10-25 is at most about 510 first visits, and bots account for part of that. Traffic has been rising: the last three 30-day periods served 50 MB, 70 MB and 85 MB, over 32,943, 37,839 and 43,124 requests.

### 2. Record it in loqui-infra

Done on 2026-10-25. loqui-infra's `MarkdownToPdfStack` describes the app, its `main` branch, the domain association, the web ACL and the hosted zone, and it matched the live resources on every property it sets. That includes the app's rewrite rules and cache setting, which were made in the console and go with the app. CloudFormation can't import DNS records or a domain registration, so the stack notes those in a comment.

The stack is a record in code only, not imported into CloudFormation. An import turned out not to be read-only: CloudFormation tags each imported resource through its update handler, which for Amplify sends the template's properties to the app, the branch and the domain association. The attempt failed on the app, which Amplify won't update without a GitHub token, after adding three `aws:cloudformation:*` tags to the `main` branch. Those can't be removed, change nothing about how it builds or serves, and go with the app in step 5. Getting past the app would have rerun Amplify's setup of the live custom domain, for a stack that step 5 removes anyway.

### 3. Turn off the firewall (optional, any time after step 2)

Done on 2026-10-25: the firewall is off and its web ACL is deleted, and both addresses still serve the site. Only loqui-client's web ACL is left in the account.

This saves $23 a month without waiting for the rest. In the Amplify console, open the app, then Hosting → Firewall → Actions → Disassociate firewall, and then delete the web ACL. The command is in loqui-infra's teardown steps. The site keeps serving.

In the 30 days to 2026-10-25 the firewall blocked 18,089 requests and allowed 13,291. Its rules block known bad IP addresses (6,583), requests with no user agent or with common exploit patterns (8,263), and other known exploit inputs (3,243). Without it, those requests are served like any other. A probe for a path the site doesn't have gets the app's `index.html`, 15 KB at most, so that's likely a few cents a month of data. Even if every blocked request fetched a whole first visit uncompressed (617 KB), it would be 11 GB, about $1.70.

### 4. Announce it (optional)

Skipped.

Only worth doing if Google Analytics shows real use. In that case, add a banner to the app for two to four weeks saying it's going away and pointing at this repository, which anyone can run locally with `npm start`. There's no user data to export or delete: nothing leaves the browser.

### 5. Take it down

Done on 2026-10-25, apart from two things:

- The app is deleted. Amplify removed the alias and `www` records with it, and `aws amplify list-apps` no longer lists it.
- The domain is being let go. Auto-renew is off, and the certificate validation record is deleted, so the hosted zone holds only its NS and SOA records. **Still to do:** once the registration ends on 2027-08-11, delete the zone with `aws route53 delete-hosted-zone --id Z06990637C1AJDTC3YDZ`.
- **On hold:** removing this repository from the AWS Amplify GitHub App.
- The Google Analytics web data stream is deleted.

The steps:

- Follow the teardown steps in loqui-infra's README: check that CloudFormation holds none of it, turn off the firewall and delete its web ACL if step 3 hasn't, then delete the app with `aws amplify delete-app --app-id d1ielvxvstj604`, which takes its branch and domain association with it.
- Check that it's gone: `aws amplify list-apps` no longer lists it, and neither `https://main.d1ielvxvstj604.amplifyapp.com` nor `https://www.convert-markdown-to-pdf.com` serves the app.
- Decide what happens to the domain. loqui-infra's teardown steps have the commands for both choices:
  - **Let it go.** Turn off auto-renew, and delete the three records that point at the app. Keep the empty hosted zone until the registration ends on 2027-08-11, then delete it. Deleting it sooner would save about $5, but would leave the domain pointing at name servers that no longer answer for it. Once the registration ends, anyone can register the domain, so old links to it could lead somewhere you don't control.
  - **Keep it**, for $21 a year ($15 for the registration and $6 for the zone). Leave auto-renew and the zone, and delete the records or point them at something else.
- On GitHub, remove this repository from the AWS Amplify GitHub App's repository access (your account's Settings → Applications → AWS Amplify → Configure), and delete any Amplify webhook left under this repository's Settings → Webhooks.
- In Google Analytics, delete the web data stream, or leave it to keep the history.

### 6. Wrap up the repository

- In this repository: say in the README that the hosted version is retired and how to run it locally. Delete `amplify.yml`, `amplify-with-tests.yml` and `AWS_AMPLIFY_FIX.md`, and remove the `amplifyapp.com` address from `src/index.html`, `src/assets/robots.txt` and `src/assets/sitemap.xml`. Then archive the repository (Settings → Archive this repository), which makes it read-only.
- In loqui-infra: delete `MarkdownToPdfStack` (the last teardown step in its README). The record stays in git history.
- Close issue #14 with the savings.

### Undoing it

Steps 1 and 4 change nothing in AWS. Step 2 left three tags on the `main` branch that can't be removed, but they change nothing about how it builds or serves, and go with the app. Turning the firewall off can be undone by turning it back on, which creates a new web ACL. After `delete-app`, the site can come back by connecting this repository to a new Amplify app, but at a new `amplifyapp.com` address: the `d1ielvxvstj604` address is gone for good. If the domain is kept, it can be attached to the new app. Auto-renew can be turned back on until the registration ends; after that, the domain may no longer be available.
