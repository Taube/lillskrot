/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "lillskrot",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      environment: {
        DATABASE_URI: process.env.DATABASE_URI,
        PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
      },
    }
  },
  async run() {
    new sst.aws.Nextjs("MyWeb")
  },
})
