# Policy

Security in AWS is handled through policies.
Policies can be created manually or through JSON-files.
Policies can be attached to users directly or groups that have assigned users.

NOTE: Turns out, some policies has to be assigned to individual users to to work.

To verify a specific parameter of a policy, it can be done with a command like this:
`aws ssm get-parameter --name /sst/bootstrap/asset --region eu-north-1`
