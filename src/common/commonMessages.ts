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

const buttons = defineMessages({
  loadMore: {
    id: "common.buttons.load-more",
    defaultMessage: "Load more",
  },
});

export const commonMessages = { error, buttons };
