# Retiring markdown-to-pdf

Plan for [issue #14](https://github.com/natalieMillman/markdown-to-pdf/issues/14). Status: proposed. Nothing has been changed in AWS yet.

## What's deployed

**In AWS**, one Amplify Hosting app: `d32l0ni2rme3b0`, serving the `main` branch at `https://main.d32l0ni2rme3b0.amplifyapp.com`. Amplify builds it from this repository's `amplify.yml` on every push to `main`. It was created in the Amplify console, so it isn't in [loqui-infra](https://github.com/natalieMillman/loqui-infra) yet.

Nothing else in AWS appears to belong to this project:

- The site is static. `amplify.yml` has no backend phase and publishes `dist/markdown-to-pdf/browser`. The app makes no API calls: conversion and export run in the browser, and nothing is stored on a server.
- It uses Amplify's default `amplifyapp.com` domain, so there's no Route 53 record or ACM certificate.
- loqui-infra's IAM snapshot of 2026-10-24 (`iam-snapshots/`) has no Amplify service role, and no other role, user or policy for this app. The one Amplify role there, `github-actions-amplify-status`, is loqui-client's.
- Amplify Hosting stores and serves the files itself, so there is no S3 bucket or CloudFront distribution in the account.

This comes from the two repositories, not the live account: the AWS credentials available when this was written were rejected. Step 1 below checks it against the account.

**Outside AWS:**

- This GitHub repository, and Amplify's access to it (the AWS Amplify GitHub App, or an older webhook). loqui-client also builds on Amplify, so remove only this repository from the GitHub App, not the app itself.
- The Google Analytics property `G-N4THX35J6Z`. It's free, so it costs nothing to keep.

## Savings estimate

**Most likely well under $1 a month, unless a firewall (WAF) is turned on for the app.** The only cost that grows is data served: at 1,000 visits a month it comes to about $0.03–$0.15. This is an estimate from list prices and the build output, not a measured figure, and the traffic is a guess. The commands under [Measuring the real number](#measuring-the-real-number) replace it with the real one.

| Item | What this app uses | List price | Per month |
|------|--------------------|------------|-----------|
| Builds | No commits to `main` since 2026-07-04, so no builds since then. A build (`npm ci` and `ng build`) probably takes 3–5 minutes. | $0.01 per build minute | $0 now, about $0.03–$0.05 for each push |
| Storage | About 3 MB per deployment | $0.023 per GB-month | Under $0.01, even if every past deployment is kept |
| Data served | A first visit downloads about 170 KB compressed. The export libraries (up to about 370 KB) and KaTeX fonts load only when used. | $0.15 per GB | About $0.15 per 6,000 visits; 1,000 visits cost about $0.03–$0.15 |
| WAF | Only if a firewall was turned on for the app | $15 per app, plus AWS WAF charges | $0 if it's off |

Caveats:

- Amplify includes 1,000 build minutes, 5 GB stored and 15 GB served each month free. If those allowances still apply to this account, the savings are $0. For accounts opened before July 15, 2025 they lasted 12 months, and this account's oldest IAM roles date from March 2024, so they have most likely expired.
- If WAF is on, it costs more than everything else in the table put together, and the savings rise to $20 a month or more. `get-app` below shows whether it is.
- Whatever the cost, retiring the project also ends its upkeep: the Angular and dependency upgrades, and the Amplify build fixes.

Prices are from [aws.amazon.com/amplify/pricing](https://aws.amazon.com/amplify/pricing/) for us-east-1.

### Measuring the real number

All of these are read-only. Set `AWS_REGION` to the app's region (us-east-1 unless `get-app` returns `NotFoundException`):

```bash
APP_ID=d32l0ni2rme3b0

# What the app is: platform, service role, WAF, automatic branch creation
aws amplify get-app --app-id $APP_ID --query 'app.{name:name,platform:platform,role:iamServiceRoleArn,waf:wafConfiguration,autoBranches:enableAutoBranchCreation}'
aws amplify list-branches --app-id $APP_ID --query 'branches[].[branchName,stage,enableAutoBuild,totalNumberOfJobs]'
aws amplify list-domain-associations --app-id $APP_ID

# Upper bound: what Amplify costs the whole account (all apps), by month and usage type
aws ce get-cost-and-usage --time-period Start=2026-07-01,End=2026-10-01 --granularity MONTHLY \
  --metrics UnblendedCost --group-by Type=DIMENSION,Key=USAGE_TYPE \
  --filter '{"Dimensions":{"Key":"SERVICE","Values":["AWS Amplify"]}}'

# This app's share: bytes served in the last 30 days (multiply GB by $0.15)
aws cloudwatch get-metric-statistics --namespace AWS/AmplifyHosting --metric-name BytesDownloaded \
  --dimensions Name=App,Value=$APP_ID --statistics Sum --period 2592000 \
  --start-time 2026-09-25T00:00:00Z --end-time 2026-10-25T00:00:00Z

# Recent builds (minutes from start to end, times $0.01)
aws amplify list-jobs --app-id $APP_ID --branch-name main --max-items 10 \
  --query 'jobSummaries[].[commitTime,startTime,endTime,status]'
```

If `get-cost-and-usage` returns nothing, `aws ce get-dimension-values --dimension SERVICE --time-period Start=2026-07-01,End=2026-10-01` lists the service names Cost Explorer uses. If `get-metric-statistics` returns no datapoints, `aws cloudwatch list-metrics --namespace AWS/AmplifyHosting` shows the dimension names the metrics actually use.

## Plan

### 1. Confirm the inventory and the cost

Read-only, nothing changes.

- Run the commands above, and post the measured monthly cost on issue #14.
- Look for anything else of this project's. Resource Explorer is set up in the account (its service role is in the IAM snapshot):

  ```bash
  aws resource-explorer-2 search --query-string markdown
  aws resource-explorer-2 search --query-string d32l0ni2rme3b0
  ```

  If it reports that there's no default view, create one on the Resource Explorer console page first. Anything other than the Amplify app goes into loqui-infra in step 2 as well.
- Check the last 90 days in Google Analytics, to decide on step 3.

### 2. Record the app in loqui-infra

loqui-infra's `MarkdownToPdfStack` describes the app and its `main` branch. Merge it, then follow the import steps in loqui-infra's README, under "markdown-to-pdf (retiring)": compare the stack with the live app, `cdk import` it, and check it with drift detection. The stack retains both resources, so importing changes nothing in the app, and neither a failed import nor removing the stack can delete it.

### 3. Announce it (optional)

Only worth doing if Google Analytics shows real use. In that case, add a banner to the app for two to four weeks saying it's going away and pointing at this repository, which anyone can run locally with `npm start`. There's no user data to export or delete: nothing leaves the browser.

### 4. Take it down

- Follow the teardown steps in loqui-infra's README: `cdk destroy` the stack (the app keeps serving), then `aws amplify delete-app --app-id d32l0ni2rme3b0`.
- Check that it's gone: `aws amplify list-apps` no longer lists it, and `https://main.d32l0ni2rme3b0.amplifyapp.com` no longer serves the app.
- On GitHub, remove this repository from the AWS Amplify GitHub App's repository access (your account's Settings → Applications → AWS Amplify → Configure), and delete any Amplify webhook left under this repository's Settings → Webhooks.
- In Google Analytics, delete the web data stream, or leave it to keep the history.

### 5. Wrap up the repository

- In this repository: say in the README that the hosted version is retired and how to run it locally. Delete `amplify.yml`, `amplify-with-tests.yml` and `AWS_AMPLIFY_FIX.md`, and remove the dead `amplifyapp.com` address from `src/index.html`, `src/assets/robots.txt` and `src/assets/sitemap.xml`. Then archive the repository (Settings → Archive this repository), which makes it read-only.
- In loqui-infra: delete `MarkdownToPdfStack` (the last teardown step in its README). The record stays in git history.
- Close issue #14 with the measured savings.

### Undoing it

Steps 1–3 change nothing that can't be undone, and neither does the `cdk destroy` in step 4. After `delete-app`, the site can come back by connecting this repository to a new Amplify app, but at a new address: the `d32l0ni2rme3b0` address is gone for good, and links to it break.
