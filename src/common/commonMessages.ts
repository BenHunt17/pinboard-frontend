import { defineMessages } from "react-intl";

const error = defineMessages({
  requiredField: {
    id: "common.error.required-field",
    defaultMessage: "Required field",
  },
  minLength: {
    id: "common.error.min-length",
    defaultMessage: "Minimum length: {number}",
  },
  maxLength: {
    id: "common.error.max-length",
    defaultMessage: "Maximum length: {number}",
  },
});

export const commonMessages = { error };
