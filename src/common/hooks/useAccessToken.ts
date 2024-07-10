import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";

export default function useAccessToken() {
  const { getAccessTokenSilently } = useAuth0();

  const getAccessToken = useCallback(
    async () =>
      await getAccessTokenSilently({
        authorizationParams: {
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
          scope: "read:current_user",
        },
      }),
    [getAccessTokenSilently]
  );

  return getAccessToken;
}
