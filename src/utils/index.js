import axios from "axios";
export const COGNITO_BASE_URL =
  "https://bultin-login.auth.sa-east-1.amazoncognito.com";
export const CLIENT_ID = "1l1pg2a87u7agm14jh6loovrbh";
export const RESPONSE_TYPE = "code";
export const SCOPE = "phone+email+openid+aws.cognito.signin.user.admin+profile";
export const REDIRECT_URI_DEV = "http://localhost:3000/loading";
export const REDIRECT_URI_PROD =
  "https://alfiomartini.github.io/cognito-hosted-ui/loading";

export const REDIRECT_URI =
  process.env.NODE_ENV === "development" ? REDIRECT_URI_DEV : REDIRECT_URI_PROD;

export const getCognitoURL = () => {
  const loginBase = `${COGNITO_BASE_URL}/login?`;
  const query = `client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`;
  return `${loginBase}${query}`;
};

export const signOut = async (token) => {
  const body = {
    Token: token,
    ClientId: "1l1pg2a87u7agm14jh6loovrbh",
  };

  const headers = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityProviderService.RevokeToken",
  };
  return axios.post("https://cognito-idp.sa-east-1.amazonaws.com", body, {
    headers: headers,
  });
};
