export const getCognitoURL = () => {
  const COGNITO_BASE_URL =
    "https://bultin-login.auth.sa-east-1.amazoncognito.com";
  const CLIENT_ID = "1l1pg2a87u7agm14jh6loovrbh";
  const RESPONSE_TYPE = "code";
  const SCOPE = "phone+email+openid+aws.cognito.signin.user.admin+profile";
  const REDIRECT_URI_DEV = "http://localhost:3000";
  const REDIRECT_URI_PROD = "https://alfiomartini.github.io/cognito-hosted-ui/";
  const REDIRECT_URI =
    process.env.NODE_ENV === "development"
      ? REDIRECT_URI_DEV
      : REDIRECT_URI_PROD;
  const loginBase = `${COGNITO_BASE_URL}/login?`;
  const query = `client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`;
  return `${loginBase}${query}`;
};
