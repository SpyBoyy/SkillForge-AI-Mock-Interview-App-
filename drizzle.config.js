/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AI-interview_owner:D5ZOR1IQitkh@ep-shy-snow-a5fqtziy.us-east-2.aws.neon.tech/AI-interview?sslmode=require',
    }
  };