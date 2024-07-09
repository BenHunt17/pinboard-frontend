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

const toasts = defineMessages({
  invalidResponse: {
    id: "common.toasts.invalid-response",
    defaultMessage: "Invalid response from server",
  },
  added: {
    id: "common.toasts.added",
    defaultMessage: "Added",
  },
  updated: {
    id: "common.toasts.updated",
    defaultMessage: "Updated",
  },
  deleted: {
    id: "common.toasts.deleted",
    defaultMessage: "Deleted",
  },
});

export const commonMessages = { error, buttons, toasts };
