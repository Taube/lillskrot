# Stack

## Payload 3.0
Payload 3 is in late stage beta in the time of writing.
A decision was taken from previous version to go with NextJS and is no longer aiming to be framwork agnostic as before.

Installed with command: `npx create-payload-app@beta`

This installer set everything up including:
- NextJS 15 (pre-realse)
- React 19 RC
- Tailwind

## SST
SST is used to sync fullstack projects with AWS.

Installed with commanbd: `pnpm create sst`

This command automatically detected NextJS and set up depencencies for AWS.
SOURCE: https://sst.dev/

In AWS:
1. Crate a user.
2. Add an access key to that user.

SST local setup:

https://sst.dev/docs/iam-credentials

## VS Code

To have code work in Terminal.
1. Cmd + Shift + P in VS Code.
2. Shell Command: Install 'code' command in PATH
