import { useEffect } from "react";
import { getCognitoURL } from "../../utils";

export const CognitoUI = () => {
  useEffect(() => {
    window.location.href = getCognitoURL();
  }, []);
};
