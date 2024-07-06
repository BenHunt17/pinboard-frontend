import { IconButton, TextField, TextFieldProps } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";

interface TextInputProps {
  onSave: () => void;
  onClear: () => void;
  isDirty: boolean;
  isValid: boolean;
  textFieldProps: TextFieldProps;
}

export default function TextInput({
  onSave,
  onClear,
  isDirty,
  isValid,
  textFieldProps,
}: TextInputProps) {
  return (
    <>
      <TextField
        spellCheck={false}
        InputProps={{
          endAdornment: isDirty ? (
            <>
              <IconButton onClick={onSave} disabled={!isValid}>
                <SaveIcon />
              </IconButton>
              <IconButton onClick={onClear}>
                <ClearIcon />
              </IconButton>
            </>
          ) : undefined,
        }}
        {...textFieldProps}
      />
    </>
  );
}
