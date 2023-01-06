import { useEffect } from "react";

export const CognitoUI = () => {
  const HOSTED_UI_URL = `https://bultin-login.auth.sa-east-1.amazoncognito.com/login?client_id=1l1pg2a87u7agm14jh6loovrbh&response_type=code&scope=phone+email+openid+aws.cognito.signin.user.admin+profile&redirect_uri=http://localhost:3000`;
  useEffect(() => {
    window.location.href = HOSTED_UI_URL;
  }, [HOSTED_UI_URL]);

  return <div></div>;
};
