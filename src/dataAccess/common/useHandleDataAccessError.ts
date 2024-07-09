import { useIntl } from "react-intl";
import { useSnackbar } from "../../SnackbarProvider";
import { ZodError } from "zod";
import { commonMessages } from "../../common/commonMessages";

export default function useHandleDataAccessError() {
  const { formatMessage: f } = useIntl();
  const { showSnackbar } = useSnackbar();

  const handleDataAccessError = (e: unknown) => {
    if (e instanceof ZodError) {
      showSnackbar(f(commonMessages.toasts.invalidResponse), "error");
    } else if (e instanceof Error) {
      showSnackbar(e.message, "error");
    } else {
      showSnackbar(JSON.stringify(e), "error");
    }
  };

  return handleDataAccessError;
}
