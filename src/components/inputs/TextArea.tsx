import TextInput from "./TextInput";

type TextInputProps = React.ComponentProps<typeof TextInput>;

interface TextAreaProps {
  maxRows?: number;
}

export default function TextArea(props: TextAreaProps & TextInputProps) {
  return (
    <TextInput
      {...props}
      textFieldProps={{
        ...props.textFieldProps,
        multiline: true,
        maxRows: props.maxRows,
      }}
    />
  );
}
