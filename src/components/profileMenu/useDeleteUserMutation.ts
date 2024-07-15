import { useMutation } from "react-query";
import { usersService } from "../../dataAccess/services/usersService";
import useAccessToken from "../../common/hooks/useAccessToken";
import useHandleDataAccessError from "../../dataAccess/common/useHandleDataAccessError";
import { useSnackbar } from "../../SnackbarProvider";
import { defineMessages, useIntl } from "react-intl";
import { useAuth0 } from "@auth0/auth0-react";

export default function useDeleteUser(onComplete: () => void) {
  const getAccessToken = useAccessToken();
  const handleDataAccessError = useHandleDataAccessError();
  const { formatMessage: f } = useIntl();
  const { showSnackbar } = useSnackbar();

  const { logout } = useAuth0();

  const result = useMutation({
    mutationFn: async () => {
      const accessToken = await getAccessToken();
      return usersService.deleteCurrentUser(accessToken);
    },
    onSuccess: () => {
      showSnackbar(f(messages.successSnackbar), "success");
      logout({ logoutParams: { returnTo: window.location.origin } });
      onComplete();
    },
    onError: handleDataAccessError,
  });

  return result;
}

const messages = defineMessages({
  successSnackbar: {
    id: "profile-menu.delete-success",
    defaultMessage: "Your aaccount was successfully deleted",
  },
});
