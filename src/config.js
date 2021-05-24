const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-uploads-demo"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://9xakcudcjf.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_asPnzUBXu",
    APP_CLIENT_ID: "3h0bsi9qjoplivd21ga3mj4ofc",
    IDENTITY_POOL_ID: "us-east-1:2e8c96c2-0f07-4a4e-8960-6c96ed73c3ab"
  }
};

export default config;
